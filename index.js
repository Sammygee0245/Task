const input = document.querySelector("#todo-input")
const submit = document.querySelector("#submit")


submit.addEventListener("click",() => {
    let task = input.value;
    if(!task){
        alert("Please Add Task")
        return
    }


    if(!task){console.log("no ")}


    const list = document.querySelector(".task-holder")
    
    let task1 = document.createElement("div")
    task1.classList.add("task")
    list.appendChild(task1)

    let textBox = document.createElement("div")
    textBox.classList.add("text-box")
    task1.appendChild(textBox)

    let elemet = document.createElement("input")
    elemet.type = "text"
    elemet.classList.add("text")
    elemet.value = task
    elemet.setAttribute("readonly","readonly")
    textBox.appendChild(elemet)
    

    let action = document.createElement("div")
    action.classList.add("action")
    task1.appendChild(action)

    let edit = document.createElement("button")
    edit.innerText = "Edit"
    edit.classList.add("edit")
    action.appendChild(edit)

    let deleteb = document.createElement("button")
    deleteb.innerText = "Delete"
    deleteb.classList.add("delete")
    action.appendChild(deleteb)

    input.value = ''

    edit.addEventListener("click",()=>{
       if(edit.innerText.toLowerCase() == "edit"){
        elemet.removeAttribute("readonly")
        elemet.focus()
        edit.innerText = "Save"
       }
       else{
        elemet.setAttribute("readonly","readonly")
        edit.innerText = "Edit"
       }
    })

    deleteb.addEventListener("click",()=>{
        list.removeChild(task1)
    })

   
})