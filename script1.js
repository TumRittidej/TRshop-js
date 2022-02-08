function todoList() {
    const todoListInput = document.getElementById('todolistinput');

    if (todoListInput.value === '') {
        alert(`ใส่ข้อมูลด้วยไอสัส`)
        li.remove()
    }

    const todoListObj = {
        list:todoListInput.value
    }
    
    if (localStorage.getItem('addList') === null) {
        const todoListArr = [];
        todoListArr.push(todoListObj);
        localStorage.setItem('addList', JSON.stringify(todoListArr));
    } else {
        const todoListArr = JSON.parse(localStorage.getItem('addList'));
        todoListArr.push(todoListObj);
        localStorage.setItem('addList', JSON.stringify(todoListArr));
    }

    todoListInput.value = '';
    showtodoList();
}

function showtodoList() {
    const todoListArr = JSON.parse(localStorage.getItem('addList'));
    const ulEl = document.getElementById('ulel');

    ulEl.innerHTML = '';

    for (let i = 0; i < todoListArr.length; i++) {
        ulEl.innerHTML += ` 
        <li id="input-content"> ${todoListArr[i].list}
            <button id="editlist-btn" onclick="edittodoList(${i})"><i class="far fa-edit"></i></button>
            <button id="deletelist-btn" onclick="deletetodoList(${i})"><i class="far fa-minus-square"></i></button>
            <input type="text" id="edittext">
        </li>
        `;
    }
}
showtodoList();

function deletetodoList(index) {
    const todoListArr = JSON.parse(localStorage.getItem('addList'));
    todoListArr.splice(index, 1)
    localStorage.setItem('addList', JSON.stringify(todoListArr))
    showtodoList()
}

function deletetodoListAll() {
    localStorage.removeItem('addList')
    showtodoList()
}

function edittodoList(index) {
    const editText = document.getElementById('edittext')
    const todoListArr = JSON.parse(localStorage.getItem('addList'));
    editText.classList.toggle('active')

    if (editText.value === '') {
        return
    }
    const editTextObj = {
        list:editText.value
    }
    todoListArr.splice(index, 1, editTextObj)
    // todoListArr.pop(editTextObj) 

    localStorage.setItem('addList', JSON.stringify(todoListArr))
    
    editText.value = ''
    showtodoList();
}