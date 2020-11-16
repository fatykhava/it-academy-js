const btnAdd = document.querySelector('#click-btn'),
	list = document.querySelector('#list'),
	input = document.querySelector('#print-text'),
	btnSave = document.querySelector('#save-btn'),
	btnClear = document.querySelector('#clear-btn'),
	btnAbout = document.querySelector('#about-btn'),
	popup = document.querySelector('.popup'),
	btnClosePopup = document.querySelector('.popup-close'),
	activeTasks = document.querySelector('#active-tasks'),
	completeTasks = document.querySelector('#complete-tasks');

btnAdd.addEventListener('click', function () {
	let re = /\b/;
	let task = input.value;
	if (task.length === 0 || !re.exec(task)) {
		input.value = '';
		return false;
	}

	input.value = '';

	let item = document.createElement('li');
	let icon = document.createElement('span');

	icon.className = 'fas fa-trash';

	let dateOfTask = showDay();
	list.appendChild(item).append(icon, task, dateOfTask); //append параллельно добавляет несколько дочерних элементов

	checkTasks();
})

list.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('text-decoration');
	}

	if (e.target.tagName === 'SPAN') {
		e.target.parentNode.remove();
	}

	checkTasks();
})

const loadTodo = () => {
	list.innerHTML = localStorage.getItem('todo-list');
	checkTasks();
}

const saveTodo = () => {
	localStorage.setItem('todo-list', list.innerHTML);
}

const clearTodo = () => {
	localStorage.setItem('todo-list', '');
	loadTodo();
}

const showDay = () => {
	let date = new Date(),
		day = date.getDate();
	dayOfWeek = date.getDay(),
		month = date.getMonth(),
		year = date.getFullYear();

	switch (dayOfWeek) {
		case 1: {
			dayOfWeek = 'Monday';
			break;
		}
		case 2: {
			dayOfWeek = 'Tuesday';
			break;
		}
		case 3: {
			dayOfWeek = 'Wednesday';
			break;
		}
		case 4: {
			dayOfWeek = 'Thursday';
			break;
		}
		case 5: {
			dayOfWeek = 'Friday';
			break;
		}
		case 6: {
			dayOfWeek = 'Saturday';
			break;
		}
		case 7: {
			dayOfWeek = 'Sunday';
			break;
		}
	}

	return ` / ${dayOfWeek} ${day}.${month + 1}.${year}`;
}

const showPopup = () => {
	popup.classList.toggle('show');
}

const checkTasks = () => {
	let activeTasksCounter = 0, completeTasksCounter = 0;
	for (let i = 0; i < list.childNodes.length; i++) {
		if (list.childNodes[i].classList.contains('text-decoration')) {
			completeTasksCounter++;
		}
	}
	activeTasksCounter = list.childNodes.length - completeTasksCounter;
	activeTasks.innerHTML = activeTasksCounter;
	completeTasks.innerHTML = completeTasksCounter;
}

loadTodo();

btnSave.addEventListener('click', saveTodo);
btnClear.addEventListener('click', clearTodo);
btnAbout.addEventListener('click', showPopup);
btnClosePopup.addEventListener('click', showPopup);
