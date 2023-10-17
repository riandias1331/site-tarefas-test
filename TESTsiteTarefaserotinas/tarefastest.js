const localStoragekey = 'ToDoListGN';

function validadeIfExistNewTask(){
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue )
    return !exists ? false : true
}

function newtask(){ 
    let input = document.getElementById('input-new-task')
    
     
    if(!input.value){
       alert('Digite Algo');
    }
    else if(validadeIfExistNewTask()){
        alert('esta tarefa ja existe!')

    }
    else {
        //increment to localStorage

        let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey, JSON.stringify(values))
        ShowValues()
    }
    input.value = ''
}


function ShowValues(){
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let list = document.getElementById('to-do-list')
    
    list.innerHTML = ""

    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id = "btn-ok" onclick = 'removeItem("${values[i]['name']}")' >ok</button></li>`
    }
}


function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStoragekey, JSON.stringify(values))  
    ShowValues()
}



ShowValues()
