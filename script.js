document.addEventListener('DOMContentLoaded', () =>{
    const window= document.querySelector('.new-window');
    const addBtn = document.querySelector('#plus-btn');
    const windowInput= document.getElementById('window-input')
    const cancelBtn = document.getElementById('cancel-btn')
    const saveBtn = document.getElementById('add-btn')

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


    }

})