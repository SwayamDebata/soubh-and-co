const fs = require('fs');

let content = fs.readFileSync('src/SprintStoryPage.jsx', 'utf8');

// Fix bubble offsets causing overlaps over character faces
content = content.replaceAll('translate-y-[12vh]', 'translate-y-[4vh]');
content = content.replaceAll('sm:translate-y-[10vh]', 'sm:translate-y-[2vh]');
content = content.replaceAll('translate-y-[10vh]', 'translate-y-[2vh]');
content = content.replaceAll('sm:translate-y-[8vh]', 'sm:translate-y-[0vh]');

// Fix Google Meet split-screen characters sinking into the bottom frame
content = content.replaceAll('translate-y-[28%]', 'translate-y-[10%]');
content = content.replaceAll('sm:translate-y-[25%]', 'sm:translate-y-[8%]');

// Remove mb-0 which forces them tight, use mb-2 for a touch of spacing
content = content.replaceAll('mb-0', 'mb-2');

fs.writeFileSync('src/SprintStoryPage.jsx', content);
console.log('Fixed alignments!');
