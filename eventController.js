import {
  addTodo,
  findIndexTodo,
  findTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  loadTodos,
  removeTodo,
  setItemToDone,
  todos,
} from "./lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfNotDone,
  showNumberOfDone,
  removeTodoItem,
} from "./todoListUI.js";

function addTodoHandler() {
  let input = document.querySelector("#addTodo > input");
  let addButton = document.querySelector("#addTodo > #addBtn");
  addButton.addEventListener("click", (e) => {
    if (input.value === "") {
      alert("Fail to add it is empty");
    } else {
      let newTodoID = addTodo(input.value);
      let newTodo = findTodo(newTodoID)[0];

      showTodoItem(newTodoID, newTodo.getTodo().description);
      input.value = "";
    }
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
  });
}

function notDoneButtonHandler(Id) {
  let select = document.querySelector(`#listTodo > #todo-${Id} > button`);

  select.style.backgroundColor = "green";
  select.textContent = "Done";
  select.style.color = "white";
  setItemToDone(Id);
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}
function removeButtonHandler(removeId) {
  removeTodoItem(removeId);
  removeTodo(removeId);
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

function loadHandler() {
    window.addEventListener('load',(e)=>{
      let data = localStorage.getItem('todos')

      loadTodos(JSON.parse(data))
      console.log('Doing');
      showNumberOfDone(getNumberOfDone());
      showNumberOfNotDone(getNumberOfNotDone());
    })
 
 
  }


function beforeUnloadHandler(){
  window.addEventListener('beforeunload',(e)=>{
    e.preventDefault()
    let convert = JSON.stringify(todos)
    localStorage.setItem('todos',convert)
    // let empty = []
    // loadTodos(empty)
  })
  
    
}

export { addTodoHandler, removeButtonHandler, notDoneButtonHandler,beforeUnloadHandler,loadHandler };
