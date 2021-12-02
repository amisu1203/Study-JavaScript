// 12.5 함수 호출


// (5-1) 매개변수와 인수

// 예제 12-16
function add (x, y) { 
    return x + y;
}
var result = add(2, 5); // 함수 호출


// 예제 12-17
function add(x, y) {
    console.log(x, y);
    return x + y;
}
add(3, 2);
// console.log(x,y);  referenceError로 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.


//예제 12-18
function add(x, y) {
    return x + y;
}
console.log(add(2)); // 인수가 할당되지 않은 매개변수는 undefined로 add(2)는 NaN이다.


// 예제 12-19
function add(x, y) {
    return x + y;
}
console.log(add(2, 5, 10)); // 7


// 예제 12-20
function hi(x, y) {
    console.log(arguments); // [Arguments] {'0': 2, '1': 5, '2': 10}
    return x + y;
}
hi(2, 5, 10) // 7



// (5-2) 인수 확인

// 예제 12-22
function add(x, y) {
    return x + y;
}
console.log(add(2)); // NaN
console.log(add('a', 'b')); // 'ab'


// 예제 12-23 : 적절한 인수가 전달되었는지 확인
function onlyNumber(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // 매개변수를 통해 전달된 인자의 타입이 넘버가 아닐 경우 에러를 발생시킨다.
        throw new TypeError('인수는 모두 숫자 값이어야 합니다');
    }
    return x + y;
}
console.log(onlyNumber(2,4)); // 6
// console.log(onlyNumber(1));  TypeError: 인수는 모두 숫자 값이어야 합니다
// console.log(onlyNumber('a', 'b'))/ TypeError: 인수는 모두 숫자 값이어야 합니다


// 예제 12-24 : 단축평가로 매개변수에 기본값 할당
function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0


// 예제 12-25 : ES6에서 도입된 매개변수 기본값 설정
function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}
console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0


// (5-4) 반환문

// 예제 12-27 : 반환문으로 실행 결과 반환
function multiply(x, y) {
    return x * y; // 반환문
}
// 함수 호출은 반환값으로 평가된다.
var result = multiply(2, 5);
console.log(result); // 10


// 예제 12-28 : 반환문의 첫 번째 역할
function multiply(x, y) {
    return x * y; // 반환문
    // 반환문 이후에 다른 문이 존재해도 그 문은 실행되지 않고 무시된다.
    console.log('실행 안됨');
}
console.log(multiply(2, 4)); // 8


// 예제 12-29 : 반환문의 두 번째 역할
function foo() {
    return; // 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.
}
console.log(foo()); // undefined


// 예제 12-30 : 반환문 생략
function foo() {
}
console.log(foo()); // undefined


// 예제 12-31 : return 키워드와 반환문 사이의 줄바꿈
function foo(x, y) {
    return // 세미콜론 자동 삽입기능으로 세미콜론이 추가되어 예제 12-29와 같아짐.
    x + y;
}
console.log(foo(3, 5)); // undefined


