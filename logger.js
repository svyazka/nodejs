var url = 'http://mylogger.com/log';

function log(message){
   //send an HTTP request
   return message + ' is not my name';
}

module.exports.log = log;
module.exports.endPoint = url;