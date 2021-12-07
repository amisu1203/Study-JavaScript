// forEach
// 배열안에 있는 모든 원소들을 다루고 싶을 때 사용
const animal = ['cat', 'lion', 'dog'];
animal.forEach(oneAnimal => console.log(oneAnimal)); // cat lion dog

// map
// 배열안에 있는 모든 원소를 변환하고 새로운! 배열을 만들고 싶을 때 사용
// 1번 for문으로 만드는 경우
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sqrt = [];
for (let i = 0; i < array.length; i++) {
    sqrt.push(array[i]*array[i]);
}
console.log(sqrt); 
// [ 1,  4,  9, 16, 25, 36, 49, 64 ]

// 2번 forEach로 만드는 경우
array = [1, 2, 3, 4, 5, 6, 7, 8];
sqrt = [];
array.forEach(n => sqrt.push(n * n));
console.log(sqrt); 
// [ 1,  4,  9, 16, 25, 36, 49, 64 ]

// 3번 map으로 만드는 경우
array = [1, 2, 3, 4, 5, 6, 7, 8];
let square = n => n * n; // 실행할 함수 만들어줌
let squared = array.map(square);
console.log(squared); 
// [ 1,  4,  9, 16, 25, 36, 49, 64 ]

// 3-1 map으로 만드는 경우 변화함수의 이름을 선언하지 않아도 괜찮다
array = [1, 2, 3, 4, 5, 6, 7, 8];
squared = array.map(n => n * n);
console.log(squared); 
// [ 1,  4,  9, 16, 25, 36, 49, 64 ]

