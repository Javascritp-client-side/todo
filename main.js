import { addTodo,getNumberOfDone,getNumberOfNotDone } from "./lib/todoManagement.js";
import { showTodoItem,showNumberOfNotDone, showNumberOfDone } from "./todoListUI.js";
import { addTodoHandler, beforeUnloadHandler, loadHandler } from "./eventController.js";
// let newID = addTodo("Hello World")
// addTodo('Hello World 2')
// showTodoItem(newID,"Hello World")

showNumberOfNotDone(getNumberOfNotDone())
showNumberOfDone(getNumberOfDone())

addTodoHandler()
beforeUnloadHandler()
loadHandler()


