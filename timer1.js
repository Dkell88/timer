const input = process.argv.slice(2);
const numOfTimers = input.map((element) =>{
  if (isNaN((Number(element)))) {
    return element;
  } else return Number(element);
});

console.log(input);
console.log(numOfTimers);

const timer = function(i) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (Math.abs(numOfTimers[i] * 1000)));
};

for (let i = 0; i < numOfTimers.length; i ++) {
  if (typeof(numOfTimers[i]) === "number" && typeof(numOfTimers[i]) !== isNaN) {
    timer(i);
  }
}