console.log('Iam Working.Im worth it');
let a=221;
let b= a-5;
console.log(b)
a =4;
console.log(a,b)
//변수초기화, 생성 let
//변수는 변동가능

// const a = 221

//const 상수. 변하지 x
/*to do
to do*/
// String
//이모티콘가능."숫자"는 string
const what = "nocolas"
console.log(what);
/*bleen
const wat = true;
*/
//Foat
const wat = 55.1;
//const dayOfWeek = 

const dayOfWeek = ["Mon","Tue","Wed","Thu","Fri","sat","Sun",54,true];

console.log(dayOfWeek);
console.log(dayOfWeek[2]);

//list array[]
//object {} 컬리브라켓 이름지정가능, 나열만x
const nicoInfo ={
  name:"nico",
  age:33,
  gender:"male",
favMovies:["Along thegods","LoTR","oldboy"],
favFood:[{name:"kimchi",fatty:false},{name:"Cheese bugar", fatty:true}]}

//console.log(nicoInfo.gender);
//nicoInfo.gender="Female"
console.log(nicoInfo.gender);
console.log(nicoInfo);

console.log(nicoInfo,console)

function sayHello(potato,age){
  console.log("Hello",potato," you have ",age,"years of age");
}
sayHello();
console.log("Hi",15)
sayHello("nicolas",15);

function sayYes(name,age){
  return(`Hello ${name} you are ${age} years old`);
}

const greetNicolas = sayYes("Nicolas", 14)

console.log(greetNicolas)

const calculator = {
  plus : function(a,b){
    return a + b;
  }
}

const plus = calculator.plus(5,5)
console.log(plus)

//console.log(ducument);

//console.log(document.getElementById());

const title = document.getElementById("title");

console.log(title)

//const title = document.getElementById("title");
const title = document.querySelector("#title")
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title);
document.title = "I own you now";

function handleResize(event){
    console.log(event)
    console.log("i have been resized")
}
window.addEventListener("resize",handleResize);//handleResize()를 붙이면 즉시호출. 





if(10===5){
console.log('hi');
}else if("10"==="10"){
    console.log('lala');
}else{
    console.log('ho');
}

if(20>6 && "n" === "n"){
    console.log('yes');
}else{
    console.log('no');
}

if(20>6 || "a" === "n"){
    console.log('yes');
}else{
    console.log('no');
}

//const age = prompt("How old are you?");

/*if(age >= 18 && age <= 21){
    console.log("you can" );
} else if(age >21){
    console.log('go ahead');
}else{
    console.log("toyoung");
}*/


const title = document.querySelector("#title");

const baseColor = "rgb(52, 73, 94)";
const otherColor = '#7f8cBd';
function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === baseColor) {
        title.style.color = otherColor;
    } else {
        title.style.color = baseColor;
    }
}
function init() {
    title.style.color = baseColor;
    title.addEventListener("click", handleClick
    );
}
init();

// function handleOffLine(){
// console.log("bye");
// }

// function handleOnLine(){
//     console.log("hello");
// }

// window.addEventListener("offLine", handleOffLine);
// window.addEventListener("onLine",handleOnLine);
