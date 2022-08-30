var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = document.querySelectorAll('li');

var sort = getli;


var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

// getsortazm1btn.addEventListener('click',sortingazm1);
// getsortzam1btn.addEventListener('click',sortingzam1);
getsortazm2btn.addEventListener('click',sortingazm2);

getinput.addEventListener('keyup',filter);

function filter(){
	var filtervalue = this.value.toLowerCase();
	// getul.innerHTML = '';

	// getli.forEach(function(li){
	// 	getul.appendChild(li);
	// });

    sort = [];
	for(var x = 0; x < getli.length; x++){
		var getavalue = getli[x].textContent.toLowerCase();
		if(getavalue.indexOf(filtervalue) > -1){
			getli[x].style.display = '';
			sort.push(getli[x]);
		}else{
			getli[x].style.display = "none";
		}
	}
}

function sortingazm1(){

	var lis = [];

	for(var i = 0 ; i < sort.length; i++){
		lis.push(sort[i].textContent);
	}

	var azlis = lis.sort();

	getul.innerHTML = '';

	azlis.forEach(function(azli){
		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href=`javascript:void(0);`;
		newlink.appendChild(document.createTextNode(azli));
		newli.appendChild(newlink);
		getul.appendChild(newli);
	});
}

function sortingzam1(){
	lis = [];

	for(var i = 0; i < sort.length; i++){
		lis.push(sort[i].textContent);
	}

	var zalis = lis.sort().reverse();

	getul.innerHTML = '';

	zalis.forEach(function(zali){
		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href="javascript:void(0);";
		newlink.appendChild(document.createTextNode(zali));
		newli.appendChild(newlink);
		getul.appendChild(newli);

	});
}



function sortingazm2(){
	// console.log('i am working');

	var shouldswitch = true;
	var switching = true;

	// console.log(getli.length);

	do{
		switching = false;

		var i = 0;

		for(i ; i < getli.length-1; i++){
			shouldswitch = false;

			if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){

			// element.insertBefore(new,existing),node.insertBefore(new,existing);

			getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
			switching = true;
		}

	}while(switching);
}
