// 특정 값이 여러 값 중 하나인지 확인할 때
function isBrands (name) {
    const brand = [ 'Samsung', 'Apple', 'LG' ];
    return brand.includes(name);
}
console.log(isBrands('Apple')); // true 
console.log(isBrands('hihi')); // false



// 값에 따라 다른 결과물을 반환하는 경우
// 동물 이름을 받아오면 동물 소리를 반환해주는 함수
function animalSound (animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        원숭이: '우끼끼'
    }
    return sounds[animal] || '...?';
}
console.log(animalSound('개')); // 멍멍!
console.log(animalSound('human')); // ...?



// 값에 따라 다른 결과물을 반환해야 하고, 값에 따라 실행하는 구문이 다른 경우
// 이 경우에는 객체에 함수를 넣으면 됨

function makeSound (animal) {
    const task = {
        개() {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        참새() {
            console.log('짹짹');
        },
        원숭이() {
            console.log('우루롺ㄲ!');
        }
    }
    if (!task[animal]) {
        console.log('무슨 소리를..');
        return;
    }
    return task[animal]();
    // 여기서 task[animal]을 계속 사용하니까 const task = task[animal]로 선언해서 사용해주면 더 깔끔하다.
}
makeSound('개'); // 멍멍
makeSound('인간'); // 무슨 소리를..
makeSound('원숭이'); // 우루롺ㄲ!