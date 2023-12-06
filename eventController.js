import {
  addTodo,
  findIndexTodo,
  findTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  removeTodo,
  setItemToDone,
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

export { addTodoHandler, removeButtonHandler, notDoneButtonHandler };
