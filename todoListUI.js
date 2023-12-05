import { removeButtonHandler } from "./eventController.js";

function showTodoItem(newId, newDescription) {
  let container = document.createElement("div");
  container.classList.add("todoItem");
  container.id = `todo-${newId}`
  let description = document.createElement("p");
  description.textContent = newDescription;
  container.appendChild(description);
  let buttonState = document.createElement("button");
  buttonState.textContent = "Not Done";
  container.appendChild(buttonState);
  let remove = document.createElement("button");
  remove.textContent = "remove";
  remove.addEventListener('click',(e)=>{
    removeButtonHandler(newId)
  })
  container.appendChild(remove)
  
  document.getElementById("listTodo").appendChild(container);
}

function showNumberOfDone(numberOfDone) {
  let done = document.createElement("p");
  done.textContent = numberOfDone;
  document.getElementById("done").appendChild(done);
}
function showNumberOfNotDone(numberOfNotDone) {
  let notDone = document.createElement("p");
  notDone.textContent = numberOfNotDone;
  document.getElementById("notDone").appendChild(notDone);
}

function removeTodoItem(removeId) {
  let removeDiv = document.querySelector(`#listTodo > #todo-${removeId}`);
  removeDiv.remove();
}

export { showTodoItem, showNumberOfNotDone, showNumberOfDone, removeTodoItem };
