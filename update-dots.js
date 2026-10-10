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
    
    // We only want to replace emojis in the "Key Users & Facilities" or "Key Industries & Uses" section.
    // The easiest way is to find the <ul className="space-y-5"> block that follows the H3 heading of that section.
    // Let's use a regex to match the section.
    
    // The pattern to match:
    // <h3 ...>Key Users & Facilities</h3> OR Key Industries & Uses
    // <ul className="space-y-5">
    // ... items with <div className="mt-1 text-2xl">...</div>
    // </ul>
    
    let regex = /(<h3[^>]*>(?:Key Users & Facilities|Key Industries & Uses|Key Industries)[\s\S]*?<ul[^>]*>)([\s\S]*?)(<\/ul>)/g;
    
    let changed = false;
    let newContent = content.replace(regex, (match, prefix, listContent, suffix) => {
      let newListContent = listContent.replace(/<div className="mt-1 text-2xl">.*?<\/div>/g, '<div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>');
      if (newListContent !== listContent) {
        changed = true;
      }
      return prefix + newListContent + suffix;
    });

    if (changed) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated: ' + filePath);
      modifiedFiles++;
    }
  }
});

console.log('Modified files:', modifiedFiles);
