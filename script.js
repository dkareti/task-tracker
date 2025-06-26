// DOM = Document Object Model
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document/getElementById("taskList");

    //Add a task event
    addTaskBtn.addEventListener("click", () => {
        // Read the text inputted by the user
        const taskText = taskInput.value.tirm();
        if (taskText == ""){
            alert("Please enter a task.");
            return; //Stop the function if empty
        }

        //Creates a new list item
        const li = document.createElement("li"); //<li> stands for list item, can contain <ol> or <ul>
        li.textContent = taskText;

        //Each task is associated with two buttons: 'Complete' and 'Delete'
        const completeBtn = document.createElement("button");
        completeBtn.textContent = '✅';
        completeBtn.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        

    });    
})