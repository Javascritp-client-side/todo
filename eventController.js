import {
  addTodo,
  findIndexTodo,
  findTodo,
  getNumberOfDone,
  getNumberOfNotDone,
} from "./lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfNotDone,
  showNumberOfDone,
} from "./todoListUI.js";

function addTodoHandler() {
  let input = document.querySelector("#addTodo > input");
  let addButton = document.querySelector("#addTodo > #addBtn");
  addButton.addEventListener("click", (e) => {
    if (input.value === "") {
      alert("Fail to add it is empty");
    } else {
       let newTodoID =  addTodo(input.value)
       let newTodo = findTodo(newTodoID)[0]
     
        showTodoItem(newTodoID,newTodo.getTodo().description)
        input.value = ''
    }
  });
}

function notDoneButtonHandler(){

}
function removeButtonHandler(){

}

export {
    addTodoHandler
}