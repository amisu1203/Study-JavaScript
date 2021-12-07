// sumOf()는 배열을 받아서 각 숫자들의 합을 구하는 함수


function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let result = sumOf([1, 2, 3, 4, 5]);
console.log(result); // 15

function biggerThanThree(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) {
            array.push(numbers[i]);
        }
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]