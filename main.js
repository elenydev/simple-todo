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
        
        
    }
    function makeContent(value,div){
        div.textContent=value;
        clear();
        
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
        prev.style.transform="scale(0)";
        prev.addEventListener('animationend', function(prev){
            prev.remove();
        });
    }
}   

content.addEventListener('click', deleteElement);
inputevent.addEventListener('keypress', function(e){
   if(e.keyCode===13){
    makeDiv();
   }});
addBtn.addEventListener('click', makeDiv);  
inputevent.textContent="";
}

addItem();