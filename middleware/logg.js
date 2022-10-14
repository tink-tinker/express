
const moment =require('moment'); 

const logg=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    //gives http, hsot from url // n as well as the original url//moment module to get current dat n time
    next();
};

module.exports = logg;