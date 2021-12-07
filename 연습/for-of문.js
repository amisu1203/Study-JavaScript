// for of
// 주로 배열의 값을 이용할 때
const numbers = [10, 20, 30, 40 ,50];
for(let number of numbers) {
    console.log(number); // 10 20 30 40 50
}

// for in
// 주로 객체의 값을 이용할 때
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}
for(let key in doggy) {
    console.log(key); // name sound age
    console.log(`${key}: ${doggy[key]}`); // name: 멍멍이 sound: 멍멍 age: 2
}

// 객체의 정보를 배열 형태로 가져올 수 있는 방법

// 객체 doggy의 키 값만 배열로 받아옴
console.log(Object.keys(doggy)); // ['name' 'sound' 'age']

// 객체 doggy의 밸류 값만 배열로 받아옴
console.log(Object.values(doggy)); // [ '멍멍이', '멍멍', 2 ]

// 객체 doggy의 모든 프로퍼티를 배열로 받아옴
console.log(Object.entries(doggy)); // [ [ 'name', '멍멍이' ], [ 'sound', '멍멍' ], [ 'age', 2 ] ]