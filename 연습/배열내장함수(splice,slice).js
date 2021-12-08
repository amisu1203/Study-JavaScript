
// splice
// 배열의 기존 요소를 삭제 또는 교체하거나 추가하여 기존 배열을 변경!시킨다.

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index); // 2
numbers.splice(index, 1);
console.log(numbers);