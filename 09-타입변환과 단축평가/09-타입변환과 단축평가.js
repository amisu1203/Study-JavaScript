// 9.1 타입 변환과 단축평가

// (1-1) 타입 변환이란?
var x = 10;

// 명시적 타입 변환 (타입 캐스팅)
var str = x.toString(); 
console.log(typeof str, str); // string, 10
// 명시적 타입 변환을 했다고 변수 자체의 값이 변경되는 것은 아님
console.log(typeof(x), x); // number, 10

// 암묵적 타입 변환
var x = 10;
var str = x + '';
console.log(typeof str, str); // string, 10
// 마찬가지로 x 변수의 값이 변경되는 것은 아님
console.log(typeof x, x); // number, 10



// 9.2 암묵적 타입 변환
// 표현식을 평가할 때 개발자 의도와 상관없이 코드의 문맥으로 암묵적 타입을 강제 변환

// 피연산자가 모두 문자열 타입이어야 하는 문맥
console.log('10' + 2); // 102

// 피연산자가 모두 숫자 타입이어야 하는 문맥
console.log('10' * 2); // 20

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
console.log(!0); // true


// (2-1) 문자열 타입으로 변환
console.log(1 + '2'); // "12"

