// 13.4 함수 레벨 스코프

// (13-07)
var  x = 1;
if (true) {
    // var 키워드로 선언된 변수는 함수의 코드 블록(함수몸체)만을 지역 스코프로 인정한다.
    // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었어도 모두 전역 변수다.
    // 따라서 x는 전역변수
    var x = 10;
}
console.log(x); // 10

// (13-08)
var i  = 10;
// for 문에서 선언한 변수는 전역 변수
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 5

