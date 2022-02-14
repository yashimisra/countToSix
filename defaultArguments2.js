module.exports=function makeImportant(input,numberOfExclamations=input.length) {
    return input+"!".repeat(numberOfExclamations);
}