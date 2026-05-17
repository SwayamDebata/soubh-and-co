const fs = require('fs');

let content = fs.readFileSync('src/SprintStoryPage.jsx', 'utf8');

// 1. Overlay Classes (Shadow Backdrop)
const overlayReplacements = [
  'bg-gradient-to-b from-black/55 via-black/25 to-[#FAF8F3]/88',
  'bg-gradient-to-t from-[#FAF8F3]/18 via-transparent to-transparent',
  'bg-gradient-to-t from-slate-950/50 via-slate-900/15 to-transparent',
  'bg-gradient-to-t from-black/55 via-amber-950/20 to-transparent',
  'bg-gradient-to-b from-sky-100/20 via-transparent to-[#FAF8F3]/35',
  'bg-black/10',
  'bg-black/20'
];
overlayReplacements.forEach(cls => {
  content = content.replaceAll(`overlayClassName="${cls}"`, `overlayClassName="bg-[#0f172a]/85"`);
});

// 2. Font Sizes
const fontReplacements = {
  'text-[1.0625rem]': 'text-[1.3rem]',
  'text-[1.1875rem]': 'text-[1.5rem]',
  'text-[1.25rem]': 'text-[1.6rem]',
  'text-[0.8125rem]': 'text-[1.1rem]',
  'text-[1.1rem]': 'text-[1.3rem]',
  'text-[1.2rem]': 'text-[1.5rem]',
  'text-[1.35rem]': 'text-[1.6rem]',
  'text-[14px]': 'text-[17px]',
  'text-[15px]': 'text-[18px]',
  'text-[16px]': 'text-[19px]',
  'text-[18px]': 'text-[21px]'
};
for (const [oldVal, newVal] of Object.entries(fontReplacements)) {
  content = content.replaceAll(oldVal, newVal);
}

// 3. Character Heights
const heightReplacements = {
  'max-h-[min(48vh,420px)]': 'max-h-[min(65vh,550px)]',
  'max-h-[min(50vh,450px)]': 'max-h-[min(65vh,550px)]',
  'max-h-[min(55vh,540px)]': 'max-h-[min(70vh,600px)]',
  'max-h-[min(60vh,500px)]': 'max-h-[min(75vh,650px)]',
  'max-h-[min(70vh,600px)]': 'max-h-[min(80vh,700px)]',
  'max-h-[min(80vh,700px)]': 'max-h-[min(85vh,750px)]'
};
for (const [oldVal, newVal] of Object.entries(heightReplacements)) {
  content = content.replaceAll(oldVal, newVal);
}

// 4. Also increase title sizes slightly to match the larger body
content = content.replaceAll('text-[1.2rem]', 'text-[1.4rem]'); // for cover title base
content = content.replaceAll('text-[1.95rem]', 'text-[2.2rem]'); // for cover title md

fs.writeFileSync('src/SprintStoryPage.jsx', content);
console.log('Successfully updated SprintStoryPage.jsx');
