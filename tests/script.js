const fs = require("fs");
const { execSync } = require("child_process");

const filePath = './test.txt';

// Generate new content (for example, a timestamp and a random string)
const newContent = `Updated on ${new Date().toISOString()} with random string: ${Math.random().toString(36).substring(7)}`;

// Create or update test.txt with the new content
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`${filePath} has been created/updated.`);

try {
  // Stage the file
  execSync(`git add ${filePath}`, { stdio: 'inherit' });
  
  // Commit the change with a message
  execSync(`git commit -m "Automated commit: update test.txt"`, { stdio: 'inherit' });
  
  // Push the commit to the remote repository
  execSync(`git push`, { stdio: 'inherit' });
  
  console.log('Changes have been pushed to the remote repository.');
} catch (error) {
  console.error('Error during git operations:', error);
  process.exit(1);
}
