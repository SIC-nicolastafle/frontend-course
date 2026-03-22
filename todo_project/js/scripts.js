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

const editListBtns = document.querySelectorAll('.edit-list-btn')
const cancelListBtns = document.querySelectorAll('.cancel-btn')
const endListBtns = document.querySelectorAll('.end-btn')

const filter = document.querySelector('select')

// Debugg
console.log(filter)
console.log(filter.value)

// Functions
const addTask = (task) => {
    const div = document.createElement('div')
    div.classList.add('task')

    div.innerHTML = `
        <h4>${task}</h4>
        <button class="end-btn"><i class="fas fa-check"></i></button>
        <button class="edit-list-btn"><i class="fas fa-edit"></i></button>
        <button class="cancel-btn"><i class="fas fa-x"></i></button>
    `

    todoList.appendChild(div)
}

const hideOrShow = () => {
    inputForm.classList.toggle('hide');
    editForm.classList.toggle('hide');
}

const doneTodo = () => {

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

editListBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
        e.preventDefault();
        hideOrShow()
    })
})

endListBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target
        target.parentElement.parentElement.classList.toggle('done')
    })
})

filter.addEventListener('change', (e) => {
    const filter = e.target.value

    // ADICIONAR FUNÇÃO PARA TOGGLE HIDE DOS ELEMENTOS E SIMPLIFICAR O CODIGO
    switch ( filter ) {
    case 'All':
        break;
    case 'Done':
        console.log('Dentro do Done')
        const tasks = document.querySelectorAll('#todo-list .task')

        tasks.forEach((task) => {
            console.log(task)

            if(!task.classList.contains('done')) {
                task.classList.add('hide');
            };
        })
        break
}
})


