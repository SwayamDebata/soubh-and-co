const fs = require('fs');

let mainCode = fs.readFileSync('src/SprintStoryPage.jsx', 'utf8');
const newSlides = fs.readFileSync('slides_10_18.jsx', 'utf8');

// 1. Inject Imports
const newImports = `
import annaBaseV1 from "./assets/storyboard/anna-base-v1.png";
import tomGesture from "./assets/storyboard/tom-gesture.png";
import priyaThoughtful from "./assets/storyboard/priya-thoughfull.png";
import davidSitting from "./assets/storyboard/david-sitting.png";
`;
mainCode = mainCode.replace('import joshTalking', 'import joshTalking from "./assets/storyboard/  josh-talking.png";' + newImports);

// 2. Update TOTAL_SLIDES
mainCode = mainCode.replace('const TOTAL_SLIDES = 10;', 'const TOTAL_SLIDES = 19;');

// 3. Inject new slides
// Find the exact marker where Slide 9 ends.
const marker = `              />
            </div>
          </div>
        </div>
      </div>

      <button`;

mainCode = mainCode.replace(marker, `              />
            </div>
          </div>\n\n` + newSlides + `\n        </div>
      </div>

      <button`);

fs.writeFileSync('src/SprintStoryPage.jsx', mainCode);
console.log('Successfully injected scenes 11-18');
