import { Todo } from "./todo.js";
let todos = [];

function addTodo(desc) {
  let new_todo = new Todo(undefined,desc,false)
  todos.push(new_todo);
  return new_todo.getTodo().id
}

function findTodo(searchId) {
  return todos.filter((e) => {
    return e.getTodo().id === searchId;
  });
}

function findIndexTodo(searchId) {
  return todos.findIndex((e) => {
    return e.getTodo().id === searchId;
  });
}

function removeTodo(removeId) {
  let index = findIndexTodo(removeId);
  todos.splice(index, 1);
}

function getNumberOfDone() {
  let doneList = todos.filter((e) => {
    return e.getTodo().done === true;
  });
  return doneList.length;
}

function getNumberOfNotDone() {
  let NotList = todos.filter((e) => {
    return e.getTodo().done === false;
  });
  return NotList.length;
}
function setItemToDone(doneId){
todos.forEach((e)=>{
  if(e.getTodo().id === doneId){
    e.setDone()
  }
})
}

function clearTodo() {
  todos = [];
}
function loadTodos(userTodos){
  todos = userTodos
}


export  {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
  todos,setItemToDone,loadTodos
};
