var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
	// console.log('i am working');
	addnew();
	e.preventDefault();
});

function addnew(todo){
	var todotext = gettextbox.value;
	// console.log(totext);
	if(todo){
		todotext = todo.text;
	}

	const li = document.createElement('li');
	li.appendChild(document.createTextNode(todotext));
	// console.log(li);
	getul.appendChild(li);
	gettextbox.value = '';

	updatelocalstorage();
}

function updatelocalstorage(){
	var getalllis = document.querySelectorAll('li');
	console.log(getalllis);

	const todos = [];

	getalllis.forEach(function(getallli){
		todos.push({
			text:getallli.textContent,
			done:getallli.classList.contains('done')
		});
	});

	// console.log(todos);

	localStorage.setItem('todos',JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getlstodos);


if(getlstodos){
	getlstodos.forEach(function(getlstodo){
		console.log(getlstodo);
		console.log(getlstodo.text);

		addnew(getlstodo);
	});
}