const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split('\n').map(l => l.trim()).filter(Boolean);

let horizontalPosition = 0;
let aim = 0;
let depth = 0;

for (const line of input) {
  parseLine(line);
}

console.log(horizontalPosition * depth);

function parseLine(line) {
  const parts = line.match(/^([a-z]+) ([0-9]+)$/);
  if (parts === null) throw new Error(`Stumbled upon an invalid instruction: ${line}`);
  const [verb, value] = [parts[1], parseInt(parts[2])];
  switch (verb) {
    case 'forward':
      horizontalPosition += value;
      depth += aim * value;
      break;
    case 'up':
      aim -= value;
      break;
    case 'down':
      aim += value;
      break;
    default:
      throw new Error(`Stumbled upon an invalid instruction: ${line}`);
  }
}
