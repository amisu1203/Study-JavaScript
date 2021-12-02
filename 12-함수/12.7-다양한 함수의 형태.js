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
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// 예제 12-46 : 함수를 가리키는 식별자로 재귀 호출
var factorial = function foo(n) {
    if (n < 1) return 1;
    return n * foo(n-1);
}
console.log(factorial(5));

// 예제 12-47 : while 문으로 구현한 재귀함수
function factorial(n) {
    if (n <= 1) return 1;
    var res = n;
    while (--n) res = res * n;
    return res;
}
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6


// (7-3) 중첩 함수
function outer() {
    var x = 1;
    // nested / inner function
    function inner() {
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }
    inner();
}
outer();


// (7-4) 콜백 함수

// 예제 12-49 : n만큼 어떤 일을 반복하는 repeat 함수 생성
function repeat(n) {
    // i를 출력하게 만든다.
    for (i = 0; i < n; i++) {
        console.log(i);
    }
}
repeat(5); // 0 1 2 3 4

// 예제 12-50 
function repeat1(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력한다.
        if (i % 2) {
            console.log(i);
        }
    }
}
repeat2(5); 1 3

