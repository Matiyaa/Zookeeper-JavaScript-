function isString(data) {
    if (typeof data === 'string') {
        return true;
    }
    else {
        return false;
    }
}
console.log(isString("this is a string"));
console.log(isString("[10, 20, 30]"));