// 12. 6 - 참조에 의한 전달과 외부 상태의 변경

// 예제 12-33 

function changeVal(primitive, obj) { // 매개변수 primitive는 원시 값을 전달받고, obj는 객체를 전달받는다.
    primitive += 100;
    obj.name = 'Kim';
}
// 외부 상태
var num = 100;
var person = { name: 'Park'};

console.log(num); // 100
console.log(person); // { name: 'Park'}

// 원시 값은 값 자체가 복사되어 전달되고, 객체는 참조 값이 복사되어 전달
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Kim'}
