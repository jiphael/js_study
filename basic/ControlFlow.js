//블록문
{var foo = 10;
console.log(foo);
}

//제어문
var x = 0;
while(x<10){
    x++;
}
console.log(x); //10

//함수선언문
function sum(x,y){
    return x + y;
}
console.log(sum(1,2));

//윤년판단, 2월 일수계산

var year = 2000;
var month = 2;
var days = 0;

switch(month){
    case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12: days =31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
    //윤년 계산 알고리즘
    // 1. 년도가 4로 나누어떨어지는 해는 윤년(2000,2004,2008,2012,2016,2020....)
    //2. 그중에서 년도가 100으로 나누어 떨어지는 해는 평년 (2000,2100,2200...)
    //3. 그중에서도 년도가 400으로 나누어 떨어지는 해는 윤년 (2000, 2400, 2800....)
    days = ((year %4===0 &&year % 100 !== 0 ) || (year % 400 ===0)) ? 29 : 28;
    break;
    default:
        console.log('Invalid month');

}
console.log(days); // 29

//for(초기화식; 조건식; 증감식){

// 조건식이 참인 경우 반복 실행될 문}

for(var i=0; i<2; i++){
    console.log(i);
}