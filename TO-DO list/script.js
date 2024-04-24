let input=document.getElementById("input-box");
let text=document.querySelector(".text");


function addTask(){
    if(input.value==""){
        alert("Please enter a task");
    }
    else{
        let newEle=document.createElement("ul") ;
        newEle.innerHTML=`${input.value}`;
        text.appendChild(newEle);
        }
    input.value="";
    saveData();
    }

    function deleteTask(){
        if(text.innerHTML==''){
            alert("no such task is there to delete")
        }
        else{
        let no=prompt("Enter the number of task you want to delete");
        if(no>text.children.length){
            alert("no such task number  is there to delete")
        }
        else{
        text.children[no-1].remove();
        }
    }
        saveData();

    }
function dltAllTask(){
    if(text.innerHTML==""){
        alert("No tasks to delete");
    }
    else{
    let del=confirm("Are you sure to delete all task?");
        if(del==true){
            text.innerHTML="";
        }
    else{
        alert("No tasks deleted");
    }
}
    saveData();
}
function saveData(){
    localStorage.setItem("data", text.innerHTML);
}
function showData(){
    text.innerHTML=localStorage.getItem("data");
}
showData();