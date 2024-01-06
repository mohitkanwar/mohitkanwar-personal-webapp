const fs = require('fs-extra');
const path = require('path');
// Home page will be created only after all blogs are created
const directoryPath = 'src/assets/blogs/'; 
const jsonFilePath = 'src/assets/blogs/home.json'; 
const args = process.argv.slice(2);
console.log('Command line arguments:', args);
const env = args[0];

// Check if the JSON file exists and delete it if it does
if (fs.existsSync(jsonFilePath)) {
  fs.unlinkSync(jsonFilePath);
  console.log('Deleted existing JSON file');
}

async function readFiles(environment) {
  const files = await fs.readdir(directoryPath);
  let blogsFromFiles = [];
  const gitIgnorePath ='.gitignore';
  let gitIgnoreFiles;
  if (fs.existsSync(gitIgnorePath)) {
    const gitIgnoreContent = fs.readFileSync(gitIgnorePath, 'utf8');
     gitIgnoreFiles = gitIgnoreContent.split('\n');
  }
  for (const file of files) {
    if (gitIgnoreFiles.includes(file)) {
      console.log(`Ignoring file: ${file}`);
      continue;
    }

    if (environment=='prod' && file.startsWith('draft-')){
      console.log(`Ignoring draft file for prod: ${file}`);
      continue;
    } 
    const filePath = path.join(directoryPath, file);
    console.log(`processing: ${filePath}`)
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      const { publishDate } = jsonData;
      const fileName = file.split('.')[0];
      blogsFromFiles.push({ fileName, publishDate });
      console.log("processed: "+ fileName)
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

readFiles(env);
