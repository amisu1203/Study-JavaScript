
class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrands(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}를 파는 브랜드 : `);
        console.log(this.brands.join(', '));
    }
}

const hamburger = new Food('햄버거');
hamburger.addBrands('버거킹');
hamburger.addBrands('맥도날드');
hamburger.addBrands('쉐이크쉑');
hamburger.print();

const pizza = new Food('피자');
pizza.addBrands('피자헛');
pizza.addBrands('파파존스');
pizza.print();


