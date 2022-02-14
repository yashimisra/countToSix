const inputs=process.argv.slice(2);
const result=inputs.map(item => item[0]).reduce((accumulator,item)=>accumulator+item);
console.log(`[${inputs}] becomes "${result}"`);