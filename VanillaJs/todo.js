const toDoFrom = document.querySelector(".js-toDoForm"),
toDOinput = toDoFrom.querySelector("input"),
toDOList = document.querySelector(".js-toDoList");
const ToDOLS="toDos"

function paintToDo(text){
  console.log(text);
  const li =document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "x";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn); 
  li.appendChild(span);
  toDOList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDOinput.value;
    paintToDo(currentValue);
    toDOinput.value="";
}

function loadToDos(){
    const toDos = localStorage.getItem(ToDOLS);
    if(toDos !==null){

    }
}

function init(){
    loadToDos();
   toDoFrom.addEventListener("submit",handleSubmit)
   
}
init();