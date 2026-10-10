const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedFiles = 0;

walkDir('/Users/rishabh/anglobalservices/app', function(filePath) {
  if (filePath.endsWith('page.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match the icon div specifically in the feature cards
    // Note: They use "rounded-xl" and "text-2xl mb-6 shadow-sm"
    // Also add "font-black" to the class so the numbers look bold and nice.
    const regex = /(<div className="w-12 h-12[^"]*rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm)(">)\s*(.*?)\s*(<\/div>)/g;
    
    let counter = 1;
    let changed = false;
    
    let newContent = content.replace(regex, (match, classStart, classEnd, icon, divEnd) => {
      // If it's already a number, don't change counter randomly, but let's just force replace anyway
      // Wait, let's just make sure we add font-black if it's not there
      if (!classStart.includes('font-black')) {
        classStart += ' font-black';
      }
      
      let numberStr = '0' + counter;
      counter++;
      changed = true;
      
      return classStart + classEnd + '\n                  ' + numberStr + '\n                ' + divEnd;
    });

    if (changed) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated: ' + filePath);
      modifiedFiles++;
    }
  }
});

console.log('Modified files:', modifiedFiles);
