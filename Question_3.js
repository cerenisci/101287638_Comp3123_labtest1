const fs = require('fs');
const path = require('path');

// Directory for logs
const logsDir = path.join(__dirname, 'Logs');

// Function to remove log files
function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        console.log('Files to delete:');
        files.forEach(file => {
            console.log(file);
            fs.unlinkSync(path.join(logsDir, file)); // Remove each file
        });
        fs.rmdirSync(logsDir); // Remove the Logs directory
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}
removeLogFiles();
