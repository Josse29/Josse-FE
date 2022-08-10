// DOM ELEMENT  = GET ELEMENT 
const inputBox = document.querySelector(".inputField input");
const todoList = document.querySelector("ul.todoList");
const addBtn = document.querySelector(".inputField button");
const deleteAllbtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>
{
	// getting input user
	let userData = inputBox.value;
	if(userData.trim()!=0)
	{
		// if user doesn't only input a whitespace value, then active button
		addBtn.classList.add('active');
	}
	else
	{
		// unactive button
		addBtn.classList.remove('active');
	}
}

addBtn.onclick = ()=>
{
	let userData = inputBox.value;
	let getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage==null)
	{
		// creating blank array
		listArr=[];
	}
	else
	{
		// transforming json string into a js objcet
		listArr=JSON.parse(getLocalStorage);
	}
	// pushing or adding inputs user data
	listArr.push(userData);
	// transforming js object into a json string 
	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
}

function showTasks()
{
	let getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage == null)
	{
		// creating blank array
		listArr=[];
	}
	else
	{
		// transforming json string into a js object
		listArr=JSON.parse(getLocalStorage);
	}

	const pendingNumber = document.querySelector('.pendingNumber');
	pendingNumber.innerHTML = listArr.length;
	if(listArr.length>0)
	{
		deleteAllbtn.classList.add('active');
	}
	else
	{
		deleteAllbtn.classList.remove('active');
	}
	let newLiTag = '';
	listArr.forEach((element, index) => {
		newLiTag += `<li>${element} <span onclick= "deleteTask(${index})";><i class="fa fa-check"></i></span></li>`;
	});
	todoList.innerHTML = newLiTag;

	// once task added leave the input blank
	inputBox.value = "";
}

// delete  task function 
function deleteTask(index)
{
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);
	if(confirm('have you done this task?')===true)
	{
	// delete particular index li
	listArr.splice(index,1);
	alert('LOA Happened!');
	}
	else
	{
	alert('Keep it up!');
	}
	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
}

deleteAllbtn.onclick = ()=>{
	if(confirm('Have you done all this tasks ? ')===true)
	{
	listArr=[];
	alert('keep it up!');
	}
	else{
		alert('LOA Happened!');
	}
	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
}

showTasks();