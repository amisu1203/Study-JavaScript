// 13.5 lexical scope

// (13-9) 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다.
var x = 1;
function foo() {
    var x = 10;
    bar();
}
function bar() {
    console.log(x);
}
foo(); // 1
bar(); // 1