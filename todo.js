// append Child 
const todoList = document.querySelector('ul')
const newTodo = document.createElement('li')
newTodo.textContent = 'Always busy'
todoList.appendChild(newTodo)
// insert Before node
const anotherTodo = document.createElement('li')
anotherTodo.textContent = 'Pay bills'
todoList.insertBefore(anotherTodo, todoList.firstElementChild)
// replace Node
const modifiedTodo = document.createElement('li')
modifiedTodo.textContent = 'Feed the dog'
todoList.replaceChild(modifiedTodo, todoList.children[2])