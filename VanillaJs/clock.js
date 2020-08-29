const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds <10 ? `0${seconds}`:seconds}`;

}

//setInterval(fn, 1000) 실행할 함수, 실행할시간 밀리세컨기준 3초 3000





function init(){
getTime();
setInterval(getTime, 1000);
}

init();
