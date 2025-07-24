
let todoinput=document.querySelector(".todo-input");
let btn=document.querySelector(".btn");
let todos=document.querySelector(".todos")
// to get input values
btn.addEventListener("click",function(){
let todovalue=todoinput.value;
let li= document.createElement("li");
let div=document.createElement("div");
let delbtn=document.createElement("button");
delbtn.innerHTML="delete";

div.className="list";

div.appendChild(li);
div.appendChild(delbtn);
todos.appendChild(div)

delbtn.addEventListener("click",function(){
    todos.removeChild(div);
})

li.innerHTML=todovalue;
})

