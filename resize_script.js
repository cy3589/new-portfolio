const sharp = require('sharp');
const fs = require('fs');

const directory = './public/test';

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(64, 64) // width, height
    .toFile(`${directory}/${file}-resized.jpg`);
});
