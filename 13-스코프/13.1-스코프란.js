// 13.1 스코프란?

// (13-1)
function add(x, y) {
    console.log(x, y); // 2 5
    return x + y;
}
add(2, 5); 
// console.log(x , y); ReferenceError: x is not defined.

// (13-2)
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수
if (true) {
    var var2 = 2; // 코드 블록 안에서 선언한 변수
    if (true) {
        var var3 = 3; // 중첩된 코드 블록에서 선언한 변수
    }
}
function foo() {
    var var4 = 4; // 함수에서 선언한 변수
    function bar () {
        var var5 = 5; // 중첩된 함수에서 선언한 변수
    }
}
console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
// console.log(var4); // ReferenceError : var4 is not defined
// console.log(var5); // ReferenceError : var4 is not defined

// (13-3)
var x = 'global';
function foo() {
    var x = 'local';
    console.log(x); // local
}
foo(); 
console.log(x); // global

// (13-4) var 키워드의 중복 선언
function foo() {
    var x = 1;
    var x = 2;
    console.log(x); // 2
}
foo();


