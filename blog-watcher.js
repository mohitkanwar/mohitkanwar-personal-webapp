const fs = require('fs');
const { exec } = require('child_process');

const directoryPath = 'src/assets'; // Replace this with your directory path
let isBuilding = false; // Flag to prevent multiple simultaneous builds

// Function to execute the build script
function runBuildScript() {
  if (!isBuilding) {
    isBuilding = true;
    console.log('Building...');
    // Replace 'your-build-script-command' with your actual build script command
    exec('npm run preprocess', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(`Build output: ${stdout}`);
      isBuilding = false;
    });
  }
}

// Watch for changes in the directory
fs.watch(directoryPath, { recursive: true }, (eventType, filename) => {
  if (eventType === 'change') {
    console.log(`${filename} has changed.`);
    runBuildScript(); // Execute build script when a file changes
  }
});

console.log(`Watching for file changes in ${directoryPath}...`);
