// 8.1 블록문 

{
    var foo = 10;
}



// 8.2 조건문

// (2-1). if...else문
var num = 2;
var kind;

// if문
if (num > 0) {
    kind = '양수';
}
console.log(kind); // 양수

// if else문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}
console.log(kind); // 양수

// if... else if문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

// 같은 조건을 if else문으로
var x = 2;
var result;

if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}
console.log(result); // 짝수

// 같은 조건을 삼항 연산자로
var x = 2;
var result = (x % 2) ? '홀수' : '짝수';
console.log(result); // 짝수

// 세 가지 조건을 삼항 연산자로
var x = 5;
var result = x ? (x > 0 ? '양수' : '음수') : '영';
console.log(result); // 양수


// (2-1). switch 문

var month = 12;
var monthName;

// fall through
switch (month) {
    case 1 : monthName = 'January';
    case 2 : monthName = 'February';
    case 3 : monthName = 'March';
    case 4 : monthName = 'April';
    case 5 : monthName = 'May';
    case 6 : monthName = 'June';
    case 7 : monthName = 'July';
    case 8 : monthName = 'August';
    case 9 : monthName = 'September';
    case 10 : monthName = 'October';
    case 11 : monthName = 'November';
    case 12 : monthName = 'December';
    default : monthName = 'Invalid month';
}
console.log(monthName);

// 올바른 switch 문
switch (month) {
    case 1 : monthName = 'January';
        break;
    case 2 : monthName = 'February';
        break;
    case 3 : monthName = 'March';
        break;  
    case 4 : monthName = 'April';
        break;
    case 5 : monthName = 'May';
        break;
    case 6 : monthName = 'June';
        break;
    case 7 : monthName = 'July';
        break;
    case 8 : monthName = 'August';
        break;
    case 9 : monthName = 'September';
        break;
    case 10 : monthName = 'October';
        break;
    case 11 : monthName = 'November';
        break;
    case 12 : monthName = 'December';
        break;
    default : monthName = 'Invalid month';
}
console.log(monthName); // December

// switch 문으로 윤년 계산하기
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11: 
        days = 30;
        break;
    case 2: 
    // 윤년 계산 알고리즘
    // 연도가 4로 나누어떨어지는 해는 윤년이다.
    // 연도가 4로 나누어떨어지더라도 100으로 나누어 떨어지면 평년이다.
    // 연도가 400으로 떨어지는 해는 윤년이다.
    days = ((year % 4 == 0 && year % 100 == 0) || (year % 400 == 0) ? '29' : '28');
}
console.log(days); // 29



// 8.3 반복문

// (3-1) for 문
// 반복 횟수가 명확할 때 주로 사용
for (var i = 0; i < 2; i++) {
    console.log(i); // 0 1 
}
for (var i = 1; i >= 0; i--) {
    console.log(i); // 1 0
}

// for 중첩문 - 구구단 출력
for (var i = 2; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`); 
    }
}
// for 중첩문 - 주사위 두 개의 합이 6인 경우 출력
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j == 6) {
            console.log(`[${i}, ${j}]`);
        }
    }
}


// (3-2) while 문
// 반복 횟수가 불명확할 때 주로 사용

var count = 0;
while (count < 3) {
    console.log(count);
    count++;
} // 0 1 2

// if 문으로 무한루프 탈출하는 경우
var count = 0;
while (true) {
    console.log(count);
    count++;
    if (count == 3) break;
} // 0 1 2


// (3-3) do...while 문

var count = 0;
do {
    console.log(count);
    count++;
} while (count < 3); // 0 1 2



// 8.4 break 문
// 레이블문(식별자가 붙은 문), 반복문(for, for..in, for..of, while, do..while), switch문에서만 사용한다.

// 레이블 문을 탈출하는 경우
foo: {
    console.log(100);
    break foo;
    console.log(2);
} // 100

// 중첩된 for 문에서 외부 for문을 탈출하기 위해 레이블 문을 사용한 경우
outer: for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if ( i + j == 3) break outer;
            console.log(`inner ${i}, ${j}`);
        }
} // (0, 0), (0, 1), (0, 2), (1, 0), (1, 1)

// 반복문 탈출하는 경우
var string = 'am i su';
var search = 'i';
var index;

// 문자열은 유사 배열이기 때문에 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 문자열의 개별 문자가 i 이면
    if (string[i] == search) {
        index = i;
        break;
    }
}
console.log(`${string}의 ${index}번째 글자는 ${search} 입니다.`); // am i sud의 3번째 글자는 i 입니다.



// 8.5 continue 문

// 문자열에서 특정 문자의 개수를 세는 경우
var string = 'hello world';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    // string의 i번째 문자가 l이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] != 'l') {
        continue;
    }
    count++;
}
console.log(count);

// 위의 예제를 countinu없이 간결하게 표현하는 경우
var string = 'hello world';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] === search) {
        count++;
    }
}
console.log(count); // 3

// countinue문을 사용하지 않을 때는 if 문 안에 코드를 작성해야 한다. 따라서 if 문 안에서 실행해야 할 코드가 길다면 들여쓰기가 더 깊어지므로 continue를 사용하는 편이 가독성이 좋다.