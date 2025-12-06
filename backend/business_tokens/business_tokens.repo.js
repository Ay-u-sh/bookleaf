const pool = require('../db')
const mapPgError = require('../utils/pgErrorMapper')

async function storeToken(tokenHash,businessId,expiry){
    const query = 'INSERT INTO business_tokens(business_id,token_hash,expires_at) VALUES ($1,$2,$3) RETURNING id';
    const values = [businessId,tokenHash,expiry]

    try{
        const result = await pool.query(query,values);
        return result.rows[0];
    }
    catch(error){
        const mappedError = mapPgError(error);
        throw mappedError instanceof Error? mappedError : new Error('Database Error')
    }
}
async function verifyToken(tokenHash){
    if(!tokenHash)
        return {ok:false,reason:'missing token'}
    try{
        const query = `SELECT id, business_id,expires_at,used FROM business_tokens WHERE token_hash = $1`
        const values = [tokenHash];

        const result = await pool.query(query,values); 
        if(result.rows.length === 0)
            return 'Invalid or already used token';

        const resultRows = result.rows[0];
        console.log(resultRows.used);

        if(resultRows.expires_at){
            const expiryDate = new Date(resultRows.expires_at);
            const now = new Date();
            
            if(expiryDate < now)
                return {ok:false,reason:'Token expired'}
        }

        if(resultRows.used)
            return {ok:false,reason:'already used'};
    
        await pool.query('BEGIN');
        const tokenQuery = `UPDATE business_tokens SET used = true WHERE id = $1`;
        const tokenQueryValues = [resultRows.id]

        const businessUpdateQuery = 'UPDATE business SET email_verified = true, updated_at = now() WHERE id = $1';
        const businessUpdateQueryValues = [resultRows.business_id];
        
        await pool.query(tokenQuery,tokenQueryValues);
        await pool.query(businessUpdateQuery,businessUpdateQueryValues);

        await pool.query('COMMIT')
    }
    catch(error){
        await pool.query('ROLLBACK');
        const mapped = mapPgError(error);
        throw mapped instanceof Error ? mapped : new Error('Database Error');
    }
}

module.exports = {storeToken,verifyToken};