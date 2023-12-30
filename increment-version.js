const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
console.log('Command line arguments:', args);
const env = args[0];
// Read the current version
const configFile = (env.length==0) ? path.join(__dirname, 'src/environments/environment.ts'):path.join(__dirname, 'src/environments/environment.'+env+'.ts');
const data = fs.readFileSync(configFile, 'utf8');
const lines = data.split('\n');
let versionLine = '';
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('version:')) {
    versionLine = lines[i];
    break;
  }
}

// Increment the version
const versionMatch = versionLine.match(/version: '([^']+)'/);
console.log(versionLine)
if (versionMatch) {
  const currentVersion = versionMatch[1];
  const versionArray = currentVersion.split('.');
  versionArray[2] = (parseInt(versionArray[2]) + 1).toString(); // Increment the third segment
  const newVersion = versionArray.join('.');

  // Update the version in the configuration
  const newConfig = data.replace(versionLine, `  version: '${newVersion}',`);
  fs.writeFileSync(configFile, newConfig, 'utf8');

  console.log(`Version updated to ${newVersion}`);
} else {
  console.error('Version not found in the configuration.');
}
