// 15.1 var 키워드로 선언한 변수의 문제점

// (15-01) 변수 중복 선언 허용
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x); // 100
console.log(y); // 1

// (15-02) 함수 레벨 스코프
var x = 1;
if (true) {
    // x는 전역 변수다. x는 중복 선언된다.
    var x = 10;
}
console.log(x); // 10

// (15-03) 
var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 5
// 이렇게 함수레벨 스코프는 전역 변수를 남발하게 되어 의도치않게 전역 변수가 중복 선언된다.

// (15-04) 변수 호이스팅
console.log(foo); // undefined
foo = 123; 
console.log(foo); // 123
var foo;


