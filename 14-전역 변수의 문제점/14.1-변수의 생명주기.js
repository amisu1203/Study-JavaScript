// 14-1 변수의 생명 주기

// (14-01)
function foo() {
    var x = 'local';
    console.log(x); // local
    return x;
}
foo(); // local
// console.log(x); // ReferenceError: x is not defined

//