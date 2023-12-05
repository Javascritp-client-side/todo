import { removeButtonHandler } from "./eventController.js";

function showTodoItem(newId, newDescription) {
  let container = document.createElement("div");
  container.classList.add("todoItem");
  container.id = `todo-${newId}`;
  let description = document.createElement("p");
  description.textContent = newDescription;
  container.appendChild(description);
  let buttonState = document.createElement("button");
  buttonState.textContent = "Not Done";
  container.appendChild(buttonState);
  let remove = document.createElement("button");
  remove.textContent = "remove";
  remove.addEventListener("click", (e) => {
    removeButtonHandler(newId);
  });
  container.appendChild(remove);

  document.getElementById("listTodo").appendChild(container);
}

function showNumberOfDone(numberOfDone) {
    let select = document.querySelector('#done')
    select.textContent = `Number of Done : ${numberOfDone}`
  }

function showNumberOfNotDone(numberOfNotDone) {
 let select = document.querySelector('#notDone')
 select.textContent = `Number of NotDone : ${numberOfNotDone}`

}

function removeTodoItem(removeId) {
  let removeDiv = document.querySelector(`#listTodo > #todo-${removeId}`);
  removeDiv.remove();
}

export { showTodoItem, showNumberOfNotDone, showNumberOfDone, removeTodoItem };
