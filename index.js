const todo = document.querySelector(".todo");
const addButton = document.querySelector(".add");
const listTodo = document.querySelector(".todolist-container");
const removeBtn = document.querySelector(".remove");
const filter = document.querySelector(".filter");

addButton.addEventListener("click", createElement);
document.addEventListener('DOMContentLoaded',refreshDom);
filter.addEventListener("click", filterOtions);
listTodo.addEventListener("click", removeCheck);



function createElement(e) {
  e.preventDefault();
  const newElement = document.createElement("div");
  newElement.classList.add("tasks");

  newElement.innerHTML = ` 
  <div>                   
  <i class="fa-solid fa-square-check"></i></span>
       <span><i class="fa-solid fa-trash-can"></i></span>
  </div>
  <span>${todo.value}</span>`;
  listTodo.appendChild(newElement);
  // console.log(listTodo.innerHTML);
  saveTolacal(listTodo.innerHTML);
  todo.value = "";
}


function saveTolacal(params) {  
  localStorage.setItem('elm',params);
}


function refreshDom() {  
  listTodo.innerHTML=localStorage.getItem('elm');
}

function removeCheck(e) {
  const classList = [...e.target.classList];
  const elm = e.target;
  // console.log(elm);
  if (classList[1] === "fa-trash-can")
  {
    elm.parentElement.parentElement.parentElement.remove();
    localStorage.setItem('elm',listTodo.innerHTML);
  }
    
  else classList[1] === "fa-square-check";
  elm.parentElement.parentElement.classList.toggle("completed");
}

function filterOtions(e) {
  const todos = [...listTodo.childNodes];
  console.log(todos);
  // console.log(e.target.value);
  todos.forEach((elm) => {
    switch (e.target.value) {
      case "all":
        elm.style.display = "flex";
        break;
      case "completed":
        if (elm.classList.contains("completed"))
         elm.style.display = "flex";
         else
         elm.style.display = "none";
        break;
      case "uncompleted":
        if (!elm.classList.contains("completed")) 
        elm.style.display = "flex";
        else
        elm.style.display = "none";
        break;
    }
  });
}
