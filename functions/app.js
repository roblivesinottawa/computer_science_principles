const greet = (name) => `Hello, ${name}`;
console.log(greet("John"));

const isEven = (n) => (n % 2 === 0 ? `${n} is even.` : `${n} is odd.`);
console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(12));

const calculateTip = (bill, service) => {
  service === "good" ? (percent = 0.2) : (percent = 0.15);
  let tip = bill * percent;
  return tip;
};
const result = calculateTip(30, "good");
console.log(result);
