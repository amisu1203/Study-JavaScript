// 스코프 체인

// (13-6) 전역함수와 중첩함수의 스코프
function foo() {
    console.log('global function foo');
}
function bar() {
    function foo () {
        console.log('local function foo');
    }
    foo();
}
bar(); // local function foo
