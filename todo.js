
function strikeOffTodo(event) {
    const todoValue = event.target.parentElement.querySelector('.todo_value');
    todoValue.style.textDecoration = 'line-through';
  }
  



  function deleteTask(event) {
    event.target.parentElement.remove();
  }
  

  function editTask(event) {
    const todoValue = event.target.parentElement.querySelector('.todo_value');
    const newValue = prompt('Enter new value', todoValue.value);
    if (newValue !== null) {
      todoValue.value = newValue;
    }
  }
  



document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
    const mainContent = document.querySelector('.content');
    const numContainers = 3;

    for (let i = 0; i < numContainers; i++) {
        const newContainer = document.createElement('div');
        newContainer.classList.add('container');

        const template = `
            <div class="todo"></div>
            <input class="todo_value" type="text" placeholder="(empty)">
            <input class="todo_checkbox" type="checkbox">
            <button class="strike-off-button">Strike Off</button>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        newContainer.innerHTML = template;

        mainContent.insertBefore(newContainer, document.querySelector('.button-container'));
    }
}

document.querySelector('.content').addEventListener('click', (event) => {
    if (event.target.classList.contains('strike-off-button')) {
        strikeOffTodo(event);
    } else if (event.target.classList.contains('edit-button')) {
        editTask(event);
    } else if (event.target.classList.contains('delete-button')) {
        deleteTask(event);
    }
});
