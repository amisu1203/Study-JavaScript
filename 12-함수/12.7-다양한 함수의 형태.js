 // 12.7 다양한 함수의 형태

// (7-1) 즉시 실행 함수

// (12-34) : 익명 즉시 실행 함수
(function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// (12-35) : 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 4;
    return a * b;
}());
 // foo(); referenceError: foo is not defined

// (12-36)
/* function () {
    (...)
}(); SyntaxError가 발생하는데, 함수 정의가 함수 선언문에 형식에 맞지 않기 때문(이름 생략 불가). */

// (12-38)
/* function foo (){} (); 
이것은 function foo (){}; ();로 해석되기 때문에 함수 선언문 뒤에 오는 그룹 연산자에 피연산자가 없어서 에러가 발생한다. */

//(12-40)
console.log(typeof function f(){}); // function
console.log(typeof function (){}); // function

// (12-41)
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

// (12-42) : 즉시 실행함수의 값 반환과 인수 전달
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

// (12-43): 10부터 0까지 출력하는 함수
function countdown(n) {
    for (i = n; i >= 0; i--) {
        console.log(i);
    }
}
countdown(10);

// (12-44) : 재귀 호출을 사용한 함수
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
}
countdown(10);

// (12-45) : 
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

// (12-46) : 함수를 가리키는 식별자로 재귀 호출
var factorial = function foo(n) {
    if (n < 1) return 1;
    return n * foo(n-1);
}
console.log(factorial(5));

// (12-47) : while 문으로 구현한 재귀함수
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

// (12-49) : n만큼 어떤 일을 반복하는 repeat 함수 생성
function repeat(n) {
    // i를 출력하게 만든다.
    for (i = 0; i < n; i++) {
        console.log(i);
    }
}
repeat(5); // 0 1 2 3 4

// (12-50) 
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
repeat2(5); // 1 3

// (12-51)
// 외부에서 전달받은 f를 n만큼 반복호출하는 함수
function repeat3(n, f) {
    for(var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복호출할 함수를 인수로 전달
repeat3(5, logAll); // 0 1 2 3 4

var logOods = function (i) {
    if(i % 2) {
        console.log(i);
    }
}

repeat3(5, logOods); // 1 3

// (12-52)
// 익명함수 리터럴은 repeat함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat3(5, function(i) {
    if (i % 2) console.log(i);
}); // 3

// (12-53)
// 콜백함수를 전달받는 함수가 자주 호출된다면 외부에서 콜백함수를 정의하고 고차함수에 참조를 전달하는게 효율적이다.
var logOods = function(i) {
    if (i % 2) {
        console.log(i)
    }
};

repeat3(3, logOods); // 1

// ( 12-54)
// 콜백함수를 이용한 이벤트 처리
// myButton을 클릭하면 콜백 함수를 실행한다.
// document.getElementById('myButton').addEventListener('click', function(){
//     console.log('button clicked');
// });

// 콜백함수를 이용한 비동기 처리
setTimeout(function () {
    console.log('1초 경과');
}, 1000);

// (12-55)
// 콜백함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
    return item * 2;
});
console.log(res); // [2, 4, 6]

// 콜백함수를 사용하는 고차함수 filter
res = [1, 2, 3].filter(function (item) {
    return item % 2;
});
console.log(res); // [1, 3]

// 콜백함수를 사용하는 고차함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);
console.log(res); // 6

// (12-56)
var count = 0;
// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase (n) {
    return n++;
}
// 순수함수가 반환한 값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

// (12-57) : 비순수 함수
var count = 0;
function increase() {
    return ++count;
    // 외부 상태를 변경하며 외부 상태에 의존한다.
}
increase(); 
console.log(count); // 1

increase();
console.log(count); // 2




