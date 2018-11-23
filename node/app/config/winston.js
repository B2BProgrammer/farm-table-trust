var appRoot = require('app-root-path');
var winston = require('winston');
var fs = require('fs');
var path = "/home/blockchain/LocalWorkspace/bootcamp/boot-node-app/node/logs";

if (!fs.existsSync(path)) {
  try {
    fs.mkdirSync(path);
  } catch (err) {
    console.log("Error in creating log directory");
  }
}

// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    filename: `/home/blockchain/LocalWorkspace/bootcamp/boot-node-app/node/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,    
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  error: {
    level: 'error',
    filename: `/home/blockchain/LocalWorkspace/bootcamp/boot-node-app/node/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  data: {
    level: 'debug',
    filename: `/home/blockchain/LocalWorkspace/bootcamp/boot-node-app/node/logs/data.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  }
};

// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.File(options.data),
    new winston.transports.File(options.error),
    new winston.transports.Console(options.console)
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: `/home/blockchain/LocalWorkspace/bootcamp/boot-node-app/node/logs/exceptions.log`
    })
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;