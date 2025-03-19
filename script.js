const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// function addTask(){
//     if(inputBox.value === ''){
//         alert('Please add you task');
//     }
//    else{
//     let li=document.createElement("li");
//     li.innerHTML=inputBox.value;
//     listContainer.appendChild(li);

//     let span=document.createElement("span");
//     span.innerHTML="\u00d7";
//     li.appendChild(span);
//     let span1=document.createElement("span");
//     span.innerHTML="Date()";
//     li.appendChild(span1);
//    }
//    inputBox.value="";
//    saveData();
// }

// Updated addtask function:

function addTask() {
    if (inputBox.value === '') {
        alert('Please add your task');
    } else {
        let li = document.createElement("li");
        
        // Get current date and time
        let now = new Date();
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        let formattedDate = now.toLocaleString('en-US', options);

        // Set task with date
        li.innerHTML = `${inputBox.value} <br><small style="color: gray;">${formattedDate}</small>`;
        listContainer.appendChild(li);

        // Add delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();
