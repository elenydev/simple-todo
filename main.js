const addBtn=document.querySelector('.search-button');
const content=document.querySelector('.content-wrapper');
let inputevent=document.querySelector('.search-input');


function addItem(){
    let id=1;
    const items=[];
    function makeDiv(){
        const input=document.querySelector('.search-input').value;
        const div=document.createElement('div');
        div.classList.add('content-container');
        content.appendChild(div);
        makeContent(input,div);
        const currentDiv=document.querySelector('.content-container');
        div.setAttribute('id', id); 
        items.push(div);
        id++;
        addDeleteBtn(items);
        clear();
        saveLocalTodo(input);
    }
    function makeContent(value,div){
        div.textContent=value;
        clear(); 
    }
    function saveLocalTodo(todo){
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[];
        }
        else{
        todos=JSON.parse(localStorage.getItem("todos"))
        }
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    function showTodo(){
        let todos;
        if(localStorage.getItem("todos")==="null"){
            todos=[];
        }
        else{
        todos=JSON.parse(localStorage.getItem("todos"))
        }
        todos.forEach(function(todo){
            const div=document.createElement('div');
            div.classList.add('content-container');
            content.appendChild(div);
            div.textContent=todo;
            const deleteButton=document.createElement('button');
            deleteButton.classList.add('delete');
            div.appendChild(deleteButton);
            deleteButton.textContent='X';
        });
    }
    
    function addDeleteBtn(tab){
        tab.forEach(onediv =>{
            const deleteButton=document.createElement('button');
            deleteButton.classList.add('delete');
            onediv.appendChild(deleteButton);
            deleteButton.textContent='X';
           
        });
    }
    function clear(){
        inputevent.value="";
    }
    
function deleteElement(e){
    const item=e.target;
    if(item.classList[0]==='delete'){
        const prev=item.parentElement;
        prev.classList.add('hide');
        item.textContent="";
        removelocaltask(prev);
        prev.addEventListener('transitionend', function(){
           
            prev.remove();
        });
    }
}
function removelocaltask(todo){
    if(localStorage.getItem("todos")==="null"){
        todos=[];
    }
    else{
    todos=JSON.parse(localStorage.getItem("todos"))
    
    }
    const todovalue=todo.textContent;  
    todos.splice(todos.indexOf(todovalue), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}   

content.addEventListener('click', deleteElement);
inputevent.addEventListener('keypress', function(e){
   if(e.keyCode===13){
    makeDiv();
   }});
addBtn.addEventListener('click', makeDiv);  
inputevent.textContent="";
showTodo();
}

addItem();