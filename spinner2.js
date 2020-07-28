const spinner = '|/-\\|/-\\|';
let timeout = 100;
for (let char of spinner) {
  setTimeout(() => process.stdout.write('\r' + char + '   '), timeout);
  timeout += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timeout);