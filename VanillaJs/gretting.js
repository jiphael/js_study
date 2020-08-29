const form = document.querySelector(".js-form"),
input = form.querySelector("input");
greeting = document.querySelector(".js-greetings")

const userLs ="currentUser",
    showingOn = "showing";

function saveName(text){
    localStorage.setItem(userLs, text)
}

function paintGreeting(text){
    form.classList.remove(showingOn);
    greeting.classList.add(showingOn);
    greeting.innerText = `Hello ${text}`
}

function hanldSumbmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(showingOn);
    form.addEventListener("submit", hanldSumbmit);
}

function loadName(){
    const currentUser = localStorage.getItem(userLs);
    if(currentUser ===null){
    askForName();
    }else{
     paintGreeting(currentUser);
    }
}
function init(){
loadName();
}

init();