function Animal(type, name, sound) {
    this.type = type,
    this.name = name,
    this.sound = sound
    // this.say = function () {
    //     console.log(this.sound);
    // }
}

// say함수가 계속 중복되니까 prototype으로 사용하면
Animal.prototype.say = function () {
    console.log(this.sound);
}

const dog = new Animal('강아지', '뭉뭉이', '멍!');
dog.say();

const cat = new Animal('고양이', '나비', '야옹~');
cat.say();

