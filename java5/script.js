let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles);
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);
function sumInput() {
    let numbers = [];
    let sum = 0;
    while (true) {
        let value = prompt("Введіть число");
        if (value === "" || value === null || isNaN(value)) {
            break;
        }
        numbers.push(+value);
    }
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumInput());
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        if (partialSum > maxSum) {
            maxSum = partialSum;
        }
        if (partialSum < 0) {
            partialSum = 0;
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));