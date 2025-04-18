document.addEventListener('DOMContentLoaded', () =>{
    const taskList= document.querySelector('.task-list');
    const window= document.querySelector('.new-window');
    const addBtn = document.querySelector('#plus-btn');
    const windowInput= document.getElementById('window-input')
    const cancelBtn = document.getElementById('cancel-btn')
    const saveBtn = document.getElementById('add-btn')
    const searchInput= document.querySelector('.search-container input');
    const filterSelect= document.getElementById('filter-select');

    addBtn.addEventListener('click', () =>{
        window.style.display = 'flex';
        windowInput.value= '';
        windowInput.focus();
    })

    cancelBtn.addEventListener('click', () =>{
        windowInput.value= '';
        window.style.display = 'none';
    })

    saveBtn.addEventListener('click', () =>{
        const taskText= windowInput.value.trim();
        if(taskText != ''){
            addTask(taskText);
            window.style.display = 'none';

        }
    })

    function addTask(text){
        const li= document.createElement('li');
        li.className= 'task';
        const label= document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span= document.createElement('span');
        span.textContent = text;
        const deleteTask= document.createElement('span');
        deleteTask.className = 'delete-btn';
        deleteTask.textContent= 'delete';
        deleteTask.style.marginLeft= 'auto';
        deleteTask.style.cursor= 'pointer';

        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
            filterTasks(filterSelect.value);
        })

        deleteTask.addEventListener('click', () => {
            li.remove();
        });
        label.appendChild(checkbox);
        label.appendChild(span);
        
        li.appendChild(label);
        li.appendChild(deleteTask);
        li.style.display = 'flex';
        taskList.appendChild(li);

    }



    
    searchInput.addEventListener('input', () => {
        const search = searchInput.value.toLowerCase();
        document.querySelectorAll('.task').forEach(task => {
            const text = task.innerText.toLowerCase();
            if(text.includes(search)){
                task.style.display= 'flex';
            }
            else{
                task.style.display= 'none';
            }

        })
    })

    filterSelect.addEventListener('change', () =>{
        const option = filterSelect.value;
        filterTasks(option);
    })

    function filterTasks(option){
        const tasks= document.querySelectorAll('.task');

        tasks.forEach(task => {
            const isChecked = task.querySelector('input[type="checkbox"]').checked;

            if (option === 'all'){
                task.style.display = 'flex';
            }
            else if (option === 'completed' && isChecked){
                task.style.display = 'flex';
            }
            else if (option === 'pending' && !isChecked){
                task.style.display = 'flex';
            }
            else{
                task.style.display = 'none';
            }
        });
    }
})