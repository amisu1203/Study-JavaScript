// 15.2 let 키워드

// (15-05) 변수 중복 선언 금지
var foo = 123;
var bar = 456;
let bar = 123;
// let bar = 456; // SyntaxError: Identifier 'bar' has already been declared.

// (15-06) 블록 레벨 스코프
let tofu = 1; // 전역 변수
{
    let tofu = 2; // 지역 변수
    let bi = 3; // 지역 변수
}
console.log(tofu); // 1
// console.log(bi); // ReferenceError: bi is not defined

// (15-09) let 변수의 호이스팅
// console.log(su); // ReferecneError: su is not defined
// 런타임 이전에 변수 선언단계가 실행되지만 일시적 사각지대에서는 변수 참조 불가
let su; // 변수 선언문에서 초기화 단계 실행
console.log(su); // undefined
su = 1; // 할당문에서 할당 단계 실행
console.log(su); // 1

// (15-10)
let fi = 1;
{
    // console.log(fi); // ReferenceError: cannot access 'fi' before initialization
    let fi = 2;
}

// (15-11) 전역 객체와 var
// 이 예제는 브라우저 환경에서 올바르게 동작한다.

// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;

// 전역 함수
function foo() {}
// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x); // 1
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y); // 2

// 함수 선언문으로 정의한 함수는 전역 함수로 전역 객체 window의 프로퍼티다.
console.log(window.foo); // ƒ foo() {}
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo); // f foo() {}

// (15-12) 전역 객체와 let
// 이 예제는 브라우저 환경에서 실행해야 한다.
let x = 1;
// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다. 
console.log(window.x); // undefined
console.log(x); // 1
