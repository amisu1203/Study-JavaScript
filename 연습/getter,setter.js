const dog = {
    _name: '멍멍이',
    set name(value) {
        console.log('이름이 바뀝니다.' + value);
        this._name = value;
    }
}
dog.name = '강아지지';
console.log(dog);

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    colculate() {
        console.log('colculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.colculate(); // this.sum을 업데이트 하기위해 호출
    },
    set b(value) {
        this._b = value;
        this.colculate();
    }
};
numbers.a = 20; // 'colculate'
console.log(numbers.sum); // 22