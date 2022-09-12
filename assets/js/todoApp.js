let form1 = document.getElementById('form1');
let inputHabit1 = document.getElementById('inputHabit1');
let todoList1 = document.getElementById('todoList1');
let listHobby1= [];
let storageHobby1 = 'STORAGEHOBBY1';
let opsi1 = document.getElementById('opsi1');
let form2 = document.getElementById('form2');
let todoList2 = document.getElementById('todoList2');
let listHobby2= [];
let storageHobby2 = 'STORAGEHOBBY2';
let pendNumber = document.getElementById('pendingNumber');

form1.addEventListener('submit', function(e){
	newListHobby1(e);	
	e.preventDefault();
	manageLocalStorage1('ADD1', inputHabit1.value);
	otomate();
	inputHabit1.value = '';
})
function hapus1(e){
	if(confirm("are you sure it's gonna be gone?"))
	{
	e.parentElement.remove();
	manageLocalStorage1('DELETE1', e.previousElementSibling.innerText.trim());
	otomate();
	}
}
function manageLocalStorage1(action, item){
	switch(action){
		case 'ADD1':
		listHobby1.push(item);
			break;
		case 'DELETE1':
		listHobby1 = listHobby1.filter(function(e){
			return e!=item;	
		})
			break;
	}
	localStorage.setItem(storageHobby1, JSON.stringify(listHobby1));
}
if( storages1 =localStorage.getItem(storageHobby1)){
	const loopStorages1 = JSON.parse(storages1);
	loopStorages1.forEach(function(e){
		newListHobby1(e);
		newOpsi1(e);
		listHobby1.push(e);
	})
}
function newListHobby1(e)
{
	todoList1.innerHTML +=
		`<li>
			<span>${e}</span>
			<span onClick='hapus1(this)' class='fa fa-check'></span>
		</li>`;
}

function newOpsi1(e)
{
	opsi1.innerHTML += 
	`<option value="${e}">${e}</option>`;
}

form2.addEventListener('submit', function(e)
{
	newListHobby2(opsi1.value);
	manageLocalStorage2('ADD2', opsi1.value);
	otomate();
	e.preventDefault();
})
function done(e)
{
	if(confirm('have you done this task?')){
		e.parentElement.remove();
		manageLocalStorage2('DONE', e.previousElementSibling.innerText.trim());
		otomate();
	}
}
function manageLocalStorage2(action, item)
{
	switch(action)
	{
		case 'ADD2':
		listHobby2.push(item)
			break;
		case 'DONE':
		listHobby2 = listHobby2.filter(function(e){
			return e!=item;
		})
			break;
	}
	localStorage.setItem(storageHobby2, JSON.stringify(listHobby2));
}
if(storages2 = localStorage.getItem(storageHobby2)){
	const loopStorages2 = JSON.parse(storages2);
	loopStorages2.forEach(function(e){
		newListHobby2(e);
		listHobby2.push(e);
	})
}
function newListHobby2(e)
{
	todoList2.innerHTML+=
	`<li>
		<span>${e}</span>
		<span onClick='done(this)' class='fa fa-check'></span>
	</li>`
}

function otomate(){
	location.href = 'todoApp.html';
	alert("Sooner or later you're gonna success");
}
pendNumber.innerHTML = listHobby2.length;
if(listHobby2.length>0){
	pendDone.classList.add('active');
	pendDone.addEventListener('click',function(){
	})
}