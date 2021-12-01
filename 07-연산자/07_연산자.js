let x = 0;
let y = 0;
let z = 0;


// 7.1. 산술 연산자

// (1-1). 단항 산술 연산자 중 '+ 연산자'
//숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 숫자타입으로 변환시킨다.
x = '1';
console.log(+x); //1

// 불리언 값도 + 연산자를 통해 숫자로 변환가능.
x = true;
console.log(+x); // 1
x = false;
console.log(+x); // 0

//문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환.
x = 'hi?';
console.log(+x); // NaN


// (1-2). 단항 산술 연산자 중 '- 연산자'
// - 연산자는 피연산자의 부호를 반전시킨 후 숫자 타입으로 변환한다.
x = '10';
console.log(-x); // -10

// 불리언 값도 - 연산자를 통해 값이 반전된 숫자로 변환 가능.
x = true;
console.log(-x); // -1;

// 문자열은 숫자로 타입 변활할 수 없으므로 + 연산자와 마찬가지로 NaN 반환.
x = 'hi?';
console.log(-x); // NaN;


// (1-3). 문자열 연결 연산자
// + 연산자는 피연산자 중 하나 이상이 문자열이면 문자열 연결 연산자로 동작함.
console.log('1'+ 2); // '12'
console.log(1 + '2'); // '12'



// 7.2 할당 연산자

x = 10;
console.log(x); // 10

x += 5; // x = x + 5
console.log(x); // 15

x -= 5; // x = x - 5
console.log(x); // 10

x *= 5; // x = x * 5
console.log(x); // 50

x /= 5; // x = x / 5
console.log(x); // 10

x %= 5; // x = x % 5
console.log(x); // 0

// 문자열 연결 연산자를 이용한 경우
let str = `my name is `;
str += 'soo' // str = str + 'soo'
console.log(str); // `my name is soo`

// 연쇄 할당 (오른쪽에서 왼쪽으로 평가된다)
let a, b, c;
a = b = c = 0;
console.log(a, b, c); // 0 0 0



// 7.3 비교 연산자

// (3-1) 동등/일치 비교 연산자
// 아래와 같이 나올 수 있는 이유는 동등(==) 비교 연산자는 암묵적 타입 변환을 통해 타입을 일치 시킨 후 같은 값인지 비교하기 때문이다.
console.log(5 == '5'); // true

// 결과를 예측하기 어려운 동등 비교 연산자
console.log('0' == '') // false
console.log(0 == '') // true
console.log(0 == '0') // true
console.log(false == 'false') // false
console.log(false == '0') // true
console.log(false == null) // false
console.log(false == undefined) // false

// 일치 비교 연산자
console.log(5 === '5'); // false
console.log(NaN === NaN); // false (주의할 부분! 같은 bhc에서 뿌링클 2개를 시켜도 각각의 뿌링클은 다른 뿌링클..) 숫자가 NaN인지 조사하려면 빌트인 함수인 isNaN을 사용하면 된다.
console.log(0 === -0); // true (주의할 부분! 양의 0과 음의 0은 일치, 동등 비교에서 true다.) 이 경우에는 더 정확한 비교를 위해 Object.is 메서드를 사용하면 된다.
console.log(Object.is(-0,+0)); //false

// 부동등 비교 연산자
console.log(5 != 8); // true
console.log(5 != '5'); // false

// 불일치 비교 연산자
console.log(5 !== '5') // true
console.log(5 !== 5) // false


// (3-2). 대소 관계 비교 연산자
console.log(5 > 0); // true
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true



// 7.4. 삼항 조건 연산자

x = 2;
console.log((x > 3) ? 'x는 3보다 크다' : 'x는 3보다 작다'); // x는 3보다 작다
// 삼항 조건 연산자는 표현식인 문이기때문에 값처럼 다른 표현식의 일부로 사용할 수 있다.
x = 10;
let result = (x % 2) ? '홀수' : '짝수';
console.log(result); // 짝수



// 7.5. 논리 연산자

// 논리합 연산자 (||)
console.log(true || false); // true
console.log(true || true); // true
console.log(false || false); // false
console.log(false || true) // true

// 논리곱 연산자 (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true); // false

// 논리 부정 연산자 (!)
// 논리 부정 연산자는 피연산자가 불리언 값이 아니면 암묵적 타입 변환 시킨다.
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!'hello'); // false

// 단축 평가
// && 연산자나 || 연산자의 평가 결과가 항상 불리언 값은 아니다. 2개의 피연산자 중 한 쪽으로 평가될 수 있다.
console.log('cat' && 'dog'); // dog

// 드모르간 법칙
console.log(!(x || y) === (!x && !y)); // true
console.log(!(x && y) === (!x || !y)); // true



// 7.7 그룹 연산자

console.log(10 * 2 +3); // 23
console.log(10 * (2 + 3)); // 50



// 7.8 typeof 연산자

console.log(typeof ''); // string
console.log(typeof(1)); // number
console.log(typeof(NaN)); // number
console.log(typeof(true)); // boolean
console.log(typeof(undefined)); // undefined
console.log(typeof(Symbol())); // symbol
console.log(typeof(null)); // object
console.log(typeof([])); // object
console.log(typeof({})); // object
console.log(typeof(new Date())); // object
console.log(typeof(/test/gi)); // object
console.log(typeof(function(){})); // function

// 여기서 주의할 점은 typeof로 null을 확인하면 obejct가 나온다는 것이다. 이것은 자바스크립트의 첫 번째 버그이다. 
// 따라서 값이 null 타입인지 확일할 때는 typeof가 아닌 일치 비교 연산자(===)를 사용하자.
var foo = null;
console.log(typeof(foo)); // object
console.log(typeof(foo) === null); // false
console.log(foo === null); // true



// 7.9. 지수 연산자

console.log(2 ** 2); // 4
console.log(2 ** 0); // 1
console.log(2 ** -2); // 1/4 = 0.25
console.log((-5) ** 2); // 25





