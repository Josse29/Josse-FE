// initialize 
	let todos = {};
	const STORAGE_WISH = "STORAGE_WISH";
	const todoBox = document.getElementById('todoList');
	const inputBox = document.querySelector(".inputField input#new_text");
	const addBtn = document.querySelector(".inputField button");
	
	inputBox.onkeyup = ()=>
	{
		let userData = inputBox.value;
			if(userData.trim()!=0)
			{
				addBtn.classList.add('active');
			}
			else
			{
				// unactive button
			addBtn.classList.remove('active');
		}
	}

	if( todoFromLocal = localStorage.getItem(STORAGE_WISH))
	{
		todos = JSON.parse(todoFromLocal);
		for(let key in todos)
		{
			createList(key, todos[key]);
		}
	}

	function syncLocalStorage(activity, item, status = false)
	{
		switch(activity)
		{
			case 'ADD':		
			case 'CHECK':
				todos[item] = status		
				break;
			case 'DELETE':
				delete todos[item]
				break;	
			default:
				break;
		}
		localStorage.setItem(STORAGE_WISH, JSON.stringify(todos));
		return;
	}

	function add()
	{
		let newText = document.getElementById('new_text');
		createList(newText.value);
		syncLocalStorage('ADD', newText.value);
		newText.value = '';
		alert("Sooner or Later It's gonna be happened");
	}
		
	function createList(text, status=false)
	{
		let isCheck = (status) ? 'fa-check' : '';
		let newTodo = 
		`<li class='wishes'> 
			<span onclick='checked(this)' style='cursor:pointer'>${text}</span>
			<span class='fa ${isCheck}'></span>
			<i class='gajadi' onclick='hapus(this)'>[x]</i>
		</li>`;
		todoBox.insertAdjacentHTML('afterbegin',newTodo);
	}

	function checked(el)
	{	
		let status = el.nextElementSibling.classList.toggle('fa-check');
		syncLocalStorage('CHECK', el.innerText, status);
	}

	function hapus(el){
		if(confirm('are you sure that you wanna delete this'))
		{
			
			el.parentElement.remove();
			syncLocalStorage('DELETE', el.previousElementSibling.previousElementSibling.innerText.trim());
		};
	}
