
let todoinput=document.querySelector(".todo-input");
let btn=document.querySelector(".btn");
let todos=document.querySelector(".todos")
// to get input values
btn.addEventListener("click",function(){
let todovalue=todoinput.value;
let li= document.createElement("li");
todos.appendChild(li)
let delbtn=document.createElement("button");
delbtn.innerHTML="delete";
todos.appendChild(delbtn);
delbtn.addEventListener("click",function(){
    todos.removeChild(li);
    todos.removeChild(delbtn);
})

li.innerHTML=todovalue;
})

