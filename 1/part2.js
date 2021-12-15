const fs = require('fs');
const path = require('path');

const rawInput = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split('\n').map(l => l.trim()).filter(Boolean).map(n => parseInt(n));
const input = [];
for (let i = 2; i < rawInput.length; i++) {
  input.push(rawInput[i] + rawInput[i - 1] + rawInput[i - 2]);
}

let increaseCount = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1])
    increaseCount++;
}

console.log(increaseCount);
