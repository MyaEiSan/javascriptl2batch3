var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');

var getsortazm1btn = document.getElementById("sortazm1");
var getsortzam1btn = document.getElementById("sortzam1");

getsortazm1btn.addEventListener('click',sortazm1);

var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

getsortazm2btn.addEventListener('click',sortazm2);

getinput.addEventListener('keyup',filter);

function filter(){
	var inputfilter = this.value.toLowerCase();

	for(var x = 0; x < getli.length; x++){
		var getvalue = getli[x].querySelector('a').innerText.toLowerCase();
		
		if(getvalue.indexOf(inputfilter) > -1){
			getli[x].style.display = '';
		}else{
			getli[x].style.display = "none";
		}
	}
}

function sortazm1(){
	var lis = [];

	for(var i = 0; i < getli.length; i++){
		if(getli[i].style.display != "none"){
			lis.push(getli[i].textContent);
		}
	}

	var azlis = lis.sort();

	getul.innerHTML = '';

	azlis.forEach(function(azli){
		const newli = document.createElement('li');
		const newlink = document.createElement('a');

		newlink.href = `javascript:void(0);`;
		newlink.appendChild(document.createTextNode(azli));
		newli.appendChild(newlink);

		getul.appendChild(newli);
	});
}

function sortazm2(){
	var shouldswitch = true;
	var switching = true;

	do{
		switching = false;

		var i = 0;

		for(i; i < getli.length-1; i++){
			shouldswitch = false;

			if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){
			getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
			switching = true;
		}


	}while(switching);
}