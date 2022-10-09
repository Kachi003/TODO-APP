let todo=document.querySelector(".mytodo");
let addButton=document.querySelector(".add-btn");
let Todos=document.querySelector(".todos");
let removeAll=document.querySelector(".remove");
let doneAll=document.querySelector(".done");
let Container=document.querySelector(".container");



   
    document.addEventListener("DOMContentLoaded",loadTodos())

    addButton.addEventListener("click",function createTodo(){
       if (todo.value=="") {
            alert("Please add an activity");}
        
        else {
         let newDiv=document.createElement("div");
         let newSpan=document.createElement("span");
         let markBtn=document.createElement("button");
         let delBtn=document.createElement("button");
         let controlsDiv=document.createElement("span");

         

        newSpan.textContent=todo.value;
        newSpan.classList.add("myspan");
        addToLocalStorage(todo.value);


        markBtn.textContent="done";
        markBtn.classList.add("complete");
        markBtn.addEventListener("click",()=>{
         markBtn.closest("div").classList.add("completedEffect");
        })

        

        delBtn.textContent="Del";
        delBtn.classList.add("delete");
        delBtn.addEventListener("click",()=>{
         delBtn.closest("div").classList.add("delanimation");
         setTimeout(() => {
            delBtn.closest("div").remove();
         }, 2000);
         
        clearTodo(delBtn);
        })

        controlsDiv.appendChild(markBtn);
        controlsDiv.appendChild(delBtn);
        controlsDiv.classList.add("controls");
        
        newDiv.appendChild(newSpan);
        newDiv.appendChild(controlsDiv);
        newDiv.classList.add("todosElem");

       Todos.appendChild(newDiv);

       todo.value=""
       
      }
       
        })





function btnFuntions() {
   removeAll.addEventListener("click",()=>{
      while (Todos.firstChild) {
            Todos.firstChild.remove();
         
         
      }
     })
     
     doneAll.addEventListener("click",()=>{
         let Todoelements=[...Todos.children];
         Todoelements.forEach(elem => {
            elem.classList.add("completedEffect")
         });
         
        })    
}

btnFuntions();

function addToLocalStorage(item) {
   let allTodo;
   if (localStorage.getItem("allTodo")===null) {
      allTodo = [];
   }
   else{
      allTodo=JSON.parse(localStorage.getItem("allTodo"))
   }

   allTodo.push(item);

   localStorage.setItem("allTodo",JSON.stringify(allTodo));
}


function loadTodos() {
   let allTodo;
   if (localStorage.getItem("allTodo")===null) {
      allTodo = [];
   }
   else{
      allTodo=JSON.parse(localStorage.getItem("allTodo"))
   }

   allTodo.forEach((elem)=>{
      let newDiv=document.createElement("div");
         let newSpan=document.createElement("span");
         let markBtn=document.createElement("button");
         let delBtn=document.createElement("button");
         let controlsDiv=document.createElement("span");

         

        newSpan.textContent=elem;


        markBtn.textContent="done";
        markBtn.classList.add("complete");
        markBtn.addEventListener("click",()=>{
         markBtn.closest("div").classList.add("completedEffect");
        })

        

        delBtn.textContent="Del";
        delBtn.classList.add("delete");
        delBtn.addEventListener("click",()=>{
         delBtn.closest("div").classList.add("delanimation");
         setTimeout(() => {
            delBtn.closest("div").remove();
         }, 2000);
         
         clearTodo(delBtn);
        })

        controlsDiv.appendChild(markBtn);
        controlsDiv.appendChild(delBtn);
        controlsDiv.classList.add("controls");
        
        newDiv.appendChild(newSpan);
        newDiv.appendChild(controlsDiv);
        newDiv.classList.add("todosElem");

       Todos.appendChild(newDiv);

       todo.value=""
       
      }
       
        )





function btnFuntions() {
   removeAll.addEventListener("click",()=>{
     
      while (Todos.firstChild) {
            Todos.firstChild.remove();
         }
         
     })
   
     
     doneAll.addEventListener("click",()=>{
         let Todoelements=[...Todos.children];
         Todoelements.forEach(elem => {
            elem.classList.add("completedEffect")
         });
         
        })    
   }
}

function clearStorage() {
   removeAll.addEventListener("click",()=>{
    localStorage.clear();
   })
}

function clearTodo(btn) {
   let allTodo=JSON.parse(localStorage.getItem("allTodo"));
   
       let content=btn.closest("div").children[0].innerHTML;
       
      allTodo.forEach((child)=>{
        if (child==content) {
         let index=allTodo.indexOf(child);
         allTodo.splice(index,1);
        }
      })
localStorage.setItem("allTodo",JSON.stringify(allTodo))
      
}

clearStorage();










