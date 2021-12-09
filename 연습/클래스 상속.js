class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;   
    }
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor (name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor (name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('보리', '멍멍!');
console.log(dog); // Dog { type: '개', name: '보리', sound: '멍멍!' }
dog.say(); // 멍멍!

const cat = new Cat('나비스', '애-옹');
cat.say(); // 애-옹

const 말티즈 = new Dog('솜사탕', '왈왈!');
말티즈.say(); // 왈왈!
