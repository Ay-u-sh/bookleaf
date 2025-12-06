const AppError = require('./AppError');

const CONSTRAINT_MAP = {
    business_email_key : {field:'email',message:'Email already in use'},
    business_phone_key : {field:'phone',message:'Phone number already in use'}
}
function mapPgError(error){
    if(!error || !error.code)
        return error;
    if(error.code === '23505'){
        if(error.constraint && CONSTRAINT_MAP[error.constraint]){
            const info = CONSTRAINT_MAP[error.constraint];
            return new AppError(info.message,409,{field:info.field,constraint:error.constraint});
        }
        return new AppError('Resource already exists',409,{});
    }
    return new AppError('Database Error',500,{original:error});
}

module.exports = mapPgError ;