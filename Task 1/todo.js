const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadline');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    const deadlineText = deadlineInput.value;

    if (taskText === '' || deadlineText === '') {
        alert('Please enter both a task and a deadline.');
        return;
    }

    const listItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = `${taskText} - Due: ${deadlineText}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = '#ef4444';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '4px';
    deleteBtn.style.cursor = 'pointer';

    listItem.appendChild(textSpan);
    listItem.appendChild(deleteBtn);

    const today = new Date().toISOString().split('T')[0];
    if (deadlineText < today) {
        listItem.classList.add('overdue');
    }

    taskList.appendChild(listItem);

    taskInput.value = '';
    deadlineInput.value = '';
}

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
    }

    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});
