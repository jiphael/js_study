//변수
//값을 저장하고 저장된값을 참조하기 위해 사용. 변수는 위치를 기억하기 위한 저장소이다.


var x;//변수의 선언
x = 6; // 정수값의 할당

var sr = 'Hellow world'

//DataType
//원시타입의 값은 변경 불가능한 값이며 값에 의한 전달이다.

//number
var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; //음의정수
var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

console.log(binary); //65
console.log(octal); //65
console.log(hex); //65

//자바스크립트의 숫자타입은 정수만을 위한 타입이 없고 모든수를 실수를 처리. 정수로 표시된다해도 사실은 실수다. 따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올수 있다.

var result = 4/2;
console.log(result); //2
result = 3/2
console.log(result); //1.5

var pInf = 10/0 ; //양의 무한대
console.log(pInf); //Infinity

var nInf = 10/-0;
console.log(nInf);

//string 
//문자열타입은 텍스트 데이터를 나타나는데 사용함. 문자열은 0개 이상의 16bit유니코드문자들의 집합으로 대부분 전세계의 문자를 표현할수 있다. 문자열은 '또는 ""안에 텍스트를 넣어생성. 가장 일반적표기는 작은 따음표를 사용하는것이다.
var str = 'string';
console.log(str); //string

var str = 'string';
console.log(str);

str = 'String';
console.log(str);

str += 'test';
console.log(str);

str = str.substring(0, 3);
console.log(str);

str = str.toUpperCase();
console.log(str);

//boolean
//참, 거짓을 나타내는 true와 false 뿐

var foo =true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다

console.log(typeof foo); //boolean
console.log(typeof bar); 
//boolean

//undefined
var abc;
console.log(abc);

//symbol
//심볼은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
//심볼은 주로 이름의 충돌위험이 없는 유일한 객체 프로퍼티키를 만들기 위해 사용한다. 심볼은 symbol함수를 호출해 생성한다.
//이때 생성된 심볼값은 다른 심볼값들과 달느 유일한 심볼값이다.

//심볼 key는 이름의 충돌위험이 없는 유일한 객체의 프로퍼티키

var key = Symbole('key');
console.log(typeof key); //symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); //value

//객체타입
//객체는 데이터와 그 데이터에 관련한동작을 모두 포함할수있는 개념적 존재이다. 
//이름값과 데이터를 의미하는 프로퍼티와 동작을 의미하는 메소드를 포함할수있는 독립적 주체이다.
//자바스크립는 객체object 기반의 스크립트언어로서 자바스크립트를 이루고 있는 거의 '모든것'이 객체이다. 원시타입(primitives)를 제외한 나머지값들(배열,함수, 정규표현식등)은 모두객체이다.
//또한 객체는 pass-by-reference(참조에 의한전달) 방식으로 전달된다.
