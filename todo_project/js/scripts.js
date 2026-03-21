// Elements

const inputForm = document.querySelector('#input-form')
const taskInput = document.querySelector('#task-input')
const addBtn = document.querySelector('#add-btn')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const editBtn = document.querySelector('#edit-btn')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

const todoList = document.querySelector('#todo-list')
const btn = document.createElement('button')

const editListBtn = document.querySelector('#edit-list-btn')

// Functions
const addTask = (task) => {
    const div = document.createElement('div')
    div.classList.add('task')

    const taskItem = document.createElement('h4')
    taskItem.textContent = task;
    div.appendChild((taskItem))

    todoList.appendChild(div)
}

const hideOrShow = () => {
    inputForm.classList.toggle('hide');
    editForm.classList.toggle('hide');
}

// Events
addBtn.addEventListener('click',(e) => {
    e.preventDefault()

    console.log('Botton Activate')
    console.log(taskInput.value)

    if (!taskInput.value) {
        return
    }

    addTask(taskInput.value)
})

editListBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideOrShow();
})

