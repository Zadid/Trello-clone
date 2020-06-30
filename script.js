var taskName, taskIdNo=[], taskArray=[], i;

function changeHtml (idNo, name) {
    document.getElementById('task-list').innerHTML += `<div class="row draggable" id=${idNo} draggable="true">` +
    `<p>` + name + '</p>' +
    `<button class='edit-btn'>Edit</button>` +
    `<button class='delete-btn'>Delete</button>` +     
    '</div>';
}

function addTask() {
    
    taskName = document.getElementById('task').value;
    if (taskName === ''){
        alert('Input task name in the text box.');
    } else { 
        taskArray.push(taskName);
        taskIdNo.push(taskArray.length-1); 
        var name = taskArray[taskArray.length-1];
        var idNo = taskIdNo[taskArray.length-1]; 
        changeHtml (idNo, name);
    }
}

function deleteTask (id) {
    document.getElementById('task-list').innerHTML = '';
    for (i = 0; i <taskArray.length; i++){
        if (taskIdNo[i] < id){
            taskIdNo[i] = i;
            taskArray[i] = taskArray [i];
        } else {
            taskIdNo[i] = i;
            taskArray[i] = taskArray[i+1];
            if (i === taskArray.length-1) {
                taskIdNo.pop(taskIdNo[i]);
                taskArray.pop(taskArray[i]);
            }
        }
    }
    
    for (i = 0; i<taskArray.length; i++) {
        changeHtml (i, taskArray[i]);
    } 
}
document.querySelector('.add-task').addEventListener('click', addTask);
document.getElementById('task-list').addEventListener('click', event => {
    if (event.target.innerText === 'Delete') {
        var id = event.target.parentNode.id;
        deleteTask(id);
    }
});
