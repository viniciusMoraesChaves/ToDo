const btn = document.getElementById('btn');
const text = document.getElementById('text');
const area = document.getElementById('todoArea');

function addTodo(){
    if(text.value.trim() != ""){
        let todo = document.createElement("div");
        let close = document.createElement("div");

        todo.classList.add("todo");

        todo.innerHTML = text.value;

        close.innerHTML ="X";
        close.classList.add("close");
        todo.appendChild(close);
        

        text.value= "";
        area.appendChild(todo);

        close.addEventListener("click",function(){
            area.removeChild(todo)
        })


    }else{
        alert("Não é possível criar um todo vazio!")
    }
}