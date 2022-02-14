const inputs=process.argv.slice(2);
const val=Math.min(...inputs);
console.log(`The minimum of [${inputs}] is ${val}`)