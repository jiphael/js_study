 const title = document.querySelector("#title");
 const clickClass ="clicked";

 function handleClick(){
     title.classList.toggle(clickClass);
    // const currentClass = title.className;
    // const hasClass = title.classList.contains(clickClass);
//     if(hasClass){
//         //title.className=clickClass;
//         title.classList.remove(clickClass);
//     } else{
//         //title.className="";
//         title.classList.add(clickClass);
       
//  }
}

 function init(){
     title.addEventListener("click",handleClick);
 }
 init();