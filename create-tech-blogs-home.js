const fs = require('fs-extra');
const path = require('path');

const directoryPath = 'src/assets/blogs/'; // Replace this with your directory path
const jsonFilePath = 'src/assets/blogs/home.json'; // Replace this with your desired output JSON file path

// Check if the JSON file exists and delete it if it does
if (fs.existsSync(jsonFilePath)) {
  fs.unlinkSync(jsonFilePath);
  console.log('Deleted existing JSON file');
}

async function readFiles() {
  const files = await fs.readdir(directoryPath);
  let blogsFromFiles = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      const { publishDate } = jsonData;
      const fileName = file.split('.')[0];
      blogsFromFiles.push({ fileName, publishDate });
    } catch (error) {
      console.error('Error processing file:', file, error);
    }
  }

  blogsFromFiles.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  const blogs = { blogs: blogsFromFiles, timestamp: new Date() };

  try {
    await fs.outputJson(jsonFilePath, blogs, { spaces: 2 });
    console.log('JSON file created with sorted file data');
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}

readFiles();
