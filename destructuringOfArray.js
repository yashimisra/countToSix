const userArray = process.argv.slice(2);
let [,x,y]=userArray;

console.log(`{ username: '${x}', email: '${y}' }`);