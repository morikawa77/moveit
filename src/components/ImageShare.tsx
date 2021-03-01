export function ImageShare() {
  const fs = require('fs');
  const { createCanvas, loadImage } = require('canvas');

  const width = 1200;
  const height = 630;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  context.fillStyle = 'var(--white)';
  context.fillRect(0, 0, width, height);

  context.font = '400 16px "Inter"';
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.fillStyle = 'var(--text)';

  const text = 'Hello, World!';

  const textWidth = context.measureText(text).width;
  context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
  context.fillStyle = '#fff';
  context.fillText(text, 600, 170);

  context.fillStyle = '#fff';
  context.font = 'bold 30pt Menlo';
  context.fillText('flaviocopes.com', 600, 530);

  loadImage('./logo-full.svg').then(image => {
    context.drawImage(image, 340, 515, 70, 70);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./shared-images/test.png', buffer);
  })
}