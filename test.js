const { coinCounterRecursive, coinCounterClosure } = require('./index');

const amount = 4.99;
const change = coinCounterRecursive(amount);
console.log(`Change for $${amount.toFixed(2)} is:`);
console.log(change);



const amount2 = 4.99;
const change2 = coinCounterClosure(amount);
console.log(`Change for $${amount2.toFixed(2)} is:`);
console.log(change2);
