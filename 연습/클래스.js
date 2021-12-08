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

const dog = new Animal('강아지', '보리', '멍멍!');
dog.say(); // 멍멍!

const cat = new Animal('고양이', '나비스', '야옹~');
cat.say(); // 야옹~