document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    if (taskInput) {
        console.log('Elemento de input encontrado.');
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    } else {
        console.error('Elemento de input não encontrado.');
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    console.log('Adicionando tarefa:', taskText);

    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    taskSpan.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    console.log('Tarefa adicionada com sucesso.');
}
