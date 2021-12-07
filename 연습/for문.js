// for 문
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}

for (i = 10; i >= 0; i--) {
    console.log(i); // 10 9 8 7 6 5 4 3 2 1 0
}

for (i = 10; i >= 0; i -= 2) {
    console.log(i); // 10 8 6 4 2 0
}

// for 문과 array 함께 사용
let animal = ['고양이', '강아지', '랫서팬더'];
for (i = 0; i < animal.length; i++) {
    console.log(animal[i]);
} // '고양이' '강아지' '랫서팬더'