const array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4 ,5]

const something = [1, 'lala', {}, 4];
console.log(something[0]); // 1
console.log(something[4]); // undefined

const animal = ['고양이', '강아지'];
console.log(animal.length); // 2

animal.push('랫서팬더');
console.log(animal); // [ '고양이', '강아지', '랫서팬더' ]
console.log(animal.length); // 3