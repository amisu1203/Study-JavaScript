// 12.7 다양한 함수의 형태

// (7-1) 즉시 실행 함수

// 예제 12-34 : 익명 즉시 실행 함수
(function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 예제 12-35 : 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 4;
    return a * b;
}());
 // foo(); referenceError: foo is not defined

// 예제 12-36
/* function () {
    (...)
}(); SyntaxError가 발생하는데, 함수 정의가 함수 선언문에 형식에 맞지 않기 때문(이름 생략 불가). */

// 예제 12-38
/* function foo (){} (); 
이것은 function foo (){}; ();로 해석되기 때문에 함수 선언문 뒤에 오는 그룹 연산자에 피연산자가 없어서 에러가 발생한다. */

// 예제 12-40
console.log(typeof function f(){}); // function
console.log(typeof function (){}); // function

// 예제 12-41
(function () {
    return console.log(1);
}());
(function () {
    return console.log(1);
})();
!function () {
    return console.log(1);
}();
+function () {
    return console.log(1);
}();

// 예제 12-42 : 즉시 실행함수의 값 반환과 인수 전달
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); // 15

res = (function (a, b) {
    return a * b;
}(2, 3));

console.log(res); // 6


// (7-2) 재귀함수

// 예제 12-43 : 10부터 0까지 출력하는 함수
function countdown(n) {
    for (i = n; i >= 0; i--) {
        console.log(i);
    }
}
countdown(10);

// 예제 12-44 : 재귀 호출을 사용한 함수
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
}
countdown(10);

// 예제 12-45 : 
function factorial (n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}
factorial(3);