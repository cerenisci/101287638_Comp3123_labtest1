// Function to create log files
function createLogFiles() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir); // Create Logs directory
        console.log('Logs directory created.');
    }

    process.chdir(logsDir); // Change current process to Logs directory

    for (let i = 1; i <= 10; i++) {
        const logFileName = `logfile${i}.txt`;
        fs.writeFileSync(logFileName, `This is log file number ${i}`); // Write text to file
        console.log(`Created: ${logFileName}`);
    }
}

// Remove log files and create new ones

createLogFiles();
