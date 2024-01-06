
const fs = require('fs-extra');
const path = require('path');
const { exit } = require('process');

const directoryPath = 'src/assets/md/blogs'; 
const jsonFilePath = 'src/assets/blogs/'; 
const args = process.argv.slice(2);
console.log('Command line arguments:', args);
const env = args[0];

class Blog {
  constructor() {
      this.id = null;
      this.title = null;
      this.content = null;
      this.author = null;
      this.publishDate = null;
      this.summary = null;
      this.metaDescription = null;
      this.metaImagePath = null;
      this.tldr = null;
      this.speechText = null;
  }
}


// Read files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
      }
    
      const gitIgnorePath ='.gitignore';
      let gitIgnoreFiles;
      if (fs.existsSync(gitIgnorePath)) {
        const gitIgnoreContent = fs.readFileSync(gitIgnorePath, 'utf8');
         gitIgnoreFiles = gitIgnoreContent.split('\n');
      }
      if (fs.existsSync(jsonFilePath)) {
        const files = fs.readdirSync(jsonFilePath);
        if (files.length === 0) {
          console.log('Directory exists and is empty.');
        } else {
          // Delete all files within the directory
          files.forEach((file) => {
            fs.removeSync(`${jsonFilePath}/${file}`);
          });
          console.log('All files within the directory deleted.');
        }
      } else {
        // Create the directory
        fs.ensureDirSync(jsonFilePath);
        console.log('Directory created.');
      }
      // Get file stats and sort by modification time
      const filesWithStats = files.map((file) => {
        if (gitIgnoreFiles.includes(file)) {
          console.log(`Ignoring file: ${file}`);
          return;
        }
        if (env=='prod' && file.startsWith('draft-')){
          console.log(`Ignoring draft file for prod: ${file}`);
          return;
        } 
        const filePath = path.join(directoryPath, file);
        console.log(file);
        blog = parseBlogFile(filePath);
        writeToJsonFile(jsonFilePath + file.replace(".md", ".json"), blog);
      });
});


function parseBlogFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const blog = new Blog();

  const sections = content.split('---').map(section => section.trim());
  sections.forEach(section => {
      const lines = section.split('\n').filter(line => line.trim() !== '' && !line.trim().startsWith('//'));
      if(lines.length > 0) {
       
      
      if (lines[0].toLowerCase().startsWith('meta')) {

          lines.slice(1).forEach(line => {
              const [key, value] = line.split(':').map(item => item.trim());
              if (key && value) {
                  const formattedKey = key.replace(/\s+/g, '').toLowerCase();
                  if (formattedKey === 'id') blog.id = parseInt(value);
                  else if (formattedKey === 'title') blog.title = value;
                  else if (formattedKey === 'date') blog.publishDate = new Date(value);
                  else if (formattedKey === 'metadescription') blog.metaDescription = value;
                  else if (formattedKey === 'metaimage') blog.metaImagePath = value;
                  else if (formattedKey === 'author') blog.author = value;
              }
          });
      } else if (lines[0].toLowerCase().startsWith('tldr')) {
          blog.tldr = lines.slice(1).join('\n\n');
      } else if (lines[0].toLowerCase().startsWith('content')) {
          blog.content = lines.slice(1).join('\n\n');
          blog.speechText = blog.content;
      } else if (lines[0].toLowerCase().startsWith('summary')) {
          blog.summary = lines.slice(1).join('\n\n');
      }
    } else {
      
      console.log("Received empty line");
    }
  });
   blog.author == null? blog.author = "Mohit Kanwar" : blog.author;
   if(blog.title == null) {
    console.log("Please provide blog title :", filePath)
    exit(1);
   }
   if(blog.summary == null && blog.metaDescription == null) {
    console.log("Please provide summary or metadescription: ", filePath)
    exit(1);
   }
   return blog;
}

function writeToJsonFile(filePath, data) {
  console.log(filePath)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('JSON data has been written to the file successfully.');
}