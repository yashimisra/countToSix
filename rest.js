module.exports = function average(...args) {
    let sumOfArguments=0;
    const numberOfArguments=args.length;
    args.forEach(function(value){
        sumOfArguments+=value;
    });
    return sumOfArguments/numberOfArguments;

};