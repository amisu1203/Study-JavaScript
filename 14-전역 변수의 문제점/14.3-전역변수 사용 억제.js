// 14.3 전역변수의 사용을 억제하는 방법

// (14-04) 즉시 실행함수 사용
// 모든 코드를 즉시 실행함수로 감싸면 모든 변수는 즉시 실행함수의 지역변수가 된다.
(function () {
    var foo = 10;
}());
// console.log(foo); // ReferenceError: foo is not defined

// (14-05) 네임스페이스 객체
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name = 'Lee';
console.log(MYAPP.name); // Lee

// (14-06)
var MYAPP = {};
MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
};
console.log(MYAPP.person.address); // Seoul

// (14-07) 모듈 패턴
var Counter = (function () {
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());
// private 변수는 외부로 노출되지 않는다
console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter); // { increase: [Function: increase], decrease: [Function: decrease] }
