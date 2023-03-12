function diffFrom13(num) {
    var diff = Math.abs(num - 13);
    if (num > 13) {
        return diff * 2;
    } else {
        return diff;
    }
}

// Example usage:
console.log(diffFrom13(8));
console.log(diffFrom13(15));
console.log(diffFrom13(13));  