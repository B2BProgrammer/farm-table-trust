let appRoot = require('app-root-path');
let winston = require('winston');
let fs = require('fs');
let path = `${appRoot}/logs`;

if (!fs.existsSync(path)) {
    try {
        fs.mkdirSync(path);
    } catch (err) {
        console.log("Error in creating log directory");
    }
}

// define the custom settings for each transport (file, console)
let options = {
    file: {
        level: 'info',
        filename: `${path}/app.log`,
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
        filename: `${path}/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },
    data: {
        level: 'debug',
        filename: `${path}/data.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    }
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.File(options.data),
        new winston.transports.File(options.error),
        new winston.transports.Console(options.console)
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: `${path}/exceptions.log`
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