// let form = document.querySelector("#form")
// let ul = document.querySelector("#main ul")

// const todoArry = [
//     'apple',
//     'banana',
//     'grapes',
//     'mango',
// ]

// for (let i = 0; i < todoArry.length; i++) {
//     ul.innerHTML += `<li>${todoArry[i]}</li>`
// }

// localStorage.setItem('arry', JSON.stringify(todoArry))
// let c = JSON.parse(localStorage.getItem('value'))
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let input_value = JSON.stringify(event.target.children[0].value)

//     localStorage.setItem('value', input_value)
//     let b = localStorage.getItem('value')
    
//     ul.innerHTML += `<li>${b}</li>`
//     c.push(b)
//     event.target.reset()
// })

// let todoLits = document.querySelector('.todoLits')
// let todoValue = document.querySelector('.todoValue')

// const addtodolist = (e)=>{
//     e.preventDefault();
//     console.log('hello');
    
// }

// document.querySelector('.todo_btn').addEventListener('click',(e)=>{
//     addtodolist(e);
//  e.preventDefault()
// })

let form = document.querySelector("#form");
let todoList = document.querySelector("#todo-list");

// Load initial todos from localStorage
const todoArray = JSON.parse(localStorage.getItem('todos')) || ['apple', 'banana', 'grapes', 'mango'];

function renderTodos() {
    todoList.innerHTML = '';
    todoArray.forEach(todo => {
        todoList.innerHTML += `<li>${todo}</li>`;
    });
}

// Initial rendering of todos
renderTodos();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = event.target.elements[0].value;

    // Add the new todo to the array
    todoArray.push(inputValue);

    // Save updated array to localStorage
    localStorage.setItem('todos', JSON.stringify(todoArray));

    // Render the updated todos
    renderTodos();
    
    // Reset the form
    event.target.reset();
});

