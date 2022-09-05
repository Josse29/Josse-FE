// initialize 
		let todos = {};
		const STORAGE_TODO = "STORAGE_TODO";
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


		if( todoFromLocal = localStorage.getItem(STORAGE_TODO))
		{
			todos = JSON.parse(todoFromLocal);
			console.log(todos);
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
				case 'UPDATE':
					todos[item] = status		
					break;	
				default:
					break;
			}
			localStorage.setItem(STORAGE_TODO, JSON.stringify(todos))
			return
		}

		function add()
		{
			let newText = document.getElementById('new_text');
			createList(newText.value);
			syncLocalStorage('ADD', newText.value);
			alert("Sooner or Later It's gonna be happened");
			newText.value = '';
		}
		
		function createList(text, status=false)
		{
			let isDone = (status) ? 'fa-check' : '';
			let newTodo = `<li > 
							<span onclick='LOA(this);'>${text}</span>
							<i class='fa ${isDone}'></i> 
						  </li>`;
			todoBox.insertAdjacentHTML('afterbegin',newTodo);
		}

		function LOA(el)
		{	
			let status = el.nextElementSibling.classList.toggle('fa-check');
			syncLocalStorage('UPDATE', el.innerText, status);
		}