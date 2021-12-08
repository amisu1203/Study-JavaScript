
// indexOf
// 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.

const animal = ['cat', 'lion', 'rabit', 'tiger'];
// 이 배열에서 rabit이 몇 번째 요소인지 알고 싶다면
let index = animal.indexOf('rabit');
console.log(index); // 2



// findIndex
// 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하고 만족하는 요소가 없으면 -1을 반환한다.
// 배열 안의 값이 객체이거나 함수일 때 유용하게 사용한다.

const todos = [
    {
        id: 1,
        text: '물 마시기',
        done: true
    },
    {
        id: 2,
        text: '체조하기',
        done: true
    },
    {
        id: 3,
        text: '닭발 먹기',
        done: true
    },
    {
        id: 4,
        text: '모달창 만들기',
        done: false
    }
];

// 이 배열에서 done이 false인 요소가 몇 번째인지 알고 싶다면
index = todos.findIndex(todo => todo.done === false);
console.log(index); // 3

// 이렇게 사용할 수도 있음
index = todos.findIndex(todo => !todo.done);
console.log(index); // 3



// find
// 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환하고 만족하는 요소가 없으면 undefined 반환한다.

// 위의 배열에서 done이 false인 요소의 값 자체를 찾고 싶다면
const todo = todos.find(todo => todo.done === false);
console.log(todo); // { id: 4, text: '모달창 만들기', done: false }



// filter
// 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운! 배열을 만든다.

// 위 배열에서 done = false인 요소만 추출해서 새로운 배열을 만들고 싶다면
const taskNotDone = todos.filter(todo => todo.done === false);
console.log(taskNotDone);
// [ { id: 4, text: '모달창 만들기', done: false } ]

