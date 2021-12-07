// for 문과 다르게 i의 초기값을 설정하는 것을 밖에서 작성
let i = 0;

while(i < 10) {
    // i 값에 변화를 주는 것은 while 블록문 안에서 작성
    console.log(i);
    i++;
}

i = 0;
let isFun = false;
while(!isFun) {
    console.log(i);
    i++;
    if(i === 5) {
        isFun = true;
    }
} // 0 1 2 3 4