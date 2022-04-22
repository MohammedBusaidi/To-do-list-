//getting all the required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const listgroup = document.querySelector(".listgroup");
const deleteAllBtn = document.querySelector(".footer button");

showTasks(); //calling show tasks function

//if the user clicks on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New ToDoList"); //getting localstorage
    if(getLocalStorage == null){ //if local storage in null
        listArr = []; //creating a blank array
    }else{
       listArr = JSON.parse(getLocalStorage) //transforming json string into a js object 
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New ToDoList", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); //calling show tasks function
}

//function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New ToDoList"); //getting localstorage
    if(getLocalStorage == null){ //if local storage in null
        listArr = []; //creating a blank array
    }else{
       listArr = JSON.parse(getLocalStorage); //transforming json string into a js object 
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; //passing the length value in pendingNumb
    if(listArr.length > 0){ //if the array length is more than 0
        deleteAllBtn.classList.add("active"); //active the clear button
    }else{
        deleteAllBtn.classList.remove("active"); //unactive the clear button
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    listgroup.innerHTML = newLiTag; //adding a new li inside ul tag
    inputBox.value = ""; //onnce task added leave the input field empty
}

//delete task functon
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New ToDoList");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particulaar indexed li
    //after removing the li again, update the local storage
    localStorage.setItem("New ToDoList", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); //calling show tasks function
}

//delete all tasks function
deleteAllBtn.onclick = ()=>{
    listArr = []; //empty an array
    //after deleting the tasks again, update the local storage
    localStorage.setItem("New ToDoList", JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); //calling show tasks function
}