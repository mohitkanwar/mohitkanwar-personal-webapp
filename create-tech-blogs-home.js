const fs = require('fs-extra');
const path = require('path');

const directoryPath = 'src/assets/md/technology'; // Replace this with your directory path
const jsonFilePath = 'src/assets/md/technology/home.json'; // Replace this with your desired output JSON file path

// Check if the JSON file exists and delete it if it does
if (fs.existsSync(jsonFilePath)) {
  fs.unlinkSync(jsonFilePath);
  console.log('Deleted existing JSON file');
}

// Read files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
      }
    
      const fileData = [];
    
      // Get file stats and sort by modification time
      const filesWithStats = files.map((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        return { name: file, time: stats.mtime.getTime() };
      });
    
      const sortedFiles = filesWithStats
        .sort((a, b) => b.time - a.time)
        .map((file) => file.name);
    
      // Process each file
      sortedFiles.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        fileData.push(filePath.split('.')[0]);
      });
    
      const blogs = { blogs: fileData, timestamp: new Date() };
    
  // Write data to JSON file
  fs.writeFileSync(jsonFilePath, JSON.stringify(blogs, null, 2));
  console.log('JSON file created with file data');
});
