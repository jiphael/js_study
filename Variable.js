//변수는 프로그램에서 사용되는 데이터를 일정기간동안 기억하여 필요할때에 다시 사용하기 위해 데이터의 고유의 이름인 식별자를 명시한것. 

//var, let, const키워드를 사용하여 선언. 

var score ; //변수선언
score = 80; //값의 할당
score = 90; //값의 재할당
score; //변수의 참조

//변수의 선언과 할당
var average = (50+100)/2

//동적타이핑 (Dynamic Typing)

//자바스크립트는 동적타입(dynamic/wak type)언어이다.
//변수의 타입지정없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입결정될것이라는 뜻이다. 따라서 같은변수에 여러타입의 값을 할당할수 있다.
//이를 동적타이핑이라한다.

var foo;
console.log(typeof foo);
//undefiened

foo = null;
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = 3;
console.log(typeof foo); //number

foo = 3.14;
console.log(thpeof foo); 
//number

foo = 'Hi';
console.log(typeof foo);
//string

foo = true;
console.log(typeof foo);




