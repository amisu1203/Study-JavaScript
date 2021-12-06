// 15.3 const 키워드

// (15-13) const는 선언과 동시에 초기화해야 한다.
const foo = 1;

// (15-14)
// const fi; // SyntaxError: Missing initializer in const declaration

// (15-15) 
{
    // 변수 호이스팅이 발생하지 않는 것처럼 보인다.
    // console.log(fu); // ReferenceError: Cannot access 'fu' before initialization
    const fu = 1;
    console.log(fu); // 1
}
// console.log(fu); // ReferenceError: fu is not defined

// (15-16) 재할당 금지
const hi = 2;
// hi = 3; // TypeError: Assignment to constant variable.

// (15-17) 
let preTaxPrice = 100; 
// 세후 가격 / 0.1의 의미를 명확히 알기 어려워서 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);
console.log(afterTaxPrice); // 110

// (15-18)
// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값
// 변수 이름을 대문자로 선언해 상수임을 나타낸다
const TAX_RATE = 0.1;
preTaxPrice = 100;
afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);
console.log(afterTaxPrice); // 110

// (15-19) const와 객체
const person = {
    name: 'Park'
};
person.name = 'Lee';
console.log(person); // { name: 'Lee' }
// const 키워드는 재할당을 금지할 뿐 불변을 의미하지는 않는다.
