function errorHandler(error,req,res,next){
    const status = error && error.status? error.status : 500;
    const body = {
        error: error.message
    }

    if(error.meta && status<500)
        body.meta = error.meta

    if(status>=500)
        console.error('Server error',error)

    res.status(status).json(body);
}

module.exports = errorHandler