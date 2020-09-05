const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
  console.log('messageQueue: ', queue)
};

const validMessages = ['left', 'right', 'up', 'down'];
var getRandomCommand = (validMessages) => {
  var choice = Math.floor(Math.random() * (5))
  return validMessages[choice];
}

// Receives and routes all AJAX requests
module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log('module.exports.router res: ', res);
  console.log('module.exports.router req: ', req);
  res.writeHead(200, headers);
  res.write(getRandomCommand(validMessages));

  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};

