let me = true;
let check = 0;
function addTask(){
    let input = document.querySelector('.input');
    let list = document.querySelector('.list');
    if(input.value == ""){
        alert("Enter the task");
    }else{
        let listik = document.createElement('listik');
            listik.className = 'task';
            list.appendChild(listik);
        let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';
            checkbox.addEventListener('change', checkTask);
        let text = document.createElement('div');
            text.textContent = input.value;
            input.value = '';
            text.className = 'text';
        let buttonDel = document.createElement('button');
            buttonDel.className = 'buttonDel';
            buttonDel.textContent = 'x';
            buttonDel.addEventListener('click', delTask);
        listik.appendChild(checkbox);
        listik.appendChild(text);
        listik.appendChild(buttonDel);    
    }
}
function delTask({target}){
    target.closest('.task').remove();
}
function checkTask({target}){
    let text = target.closest('.task').querySelector('.text');
        text.classList.add('done');
        target.remove();
}