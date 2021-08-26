// Here is the JavaScript :
function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 

        /* Step 4 below here */ 
        
        //To make the todo item typed in the input box dissappear, set input.value to an empty string
        // Change input.placeholder to set it to a new string such as "enter next task.."
        input.value="";
        input.placeholder="Enter To Do Item";
    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}

/* Step 7 below here - Why won't my function delete only when checked off and display alert if if not checked off when delete(X) is chosen??*/
function remove (item) {
    // remove item completely from document ONLY if it has been checked off
    // if(document.getElementById(item.class) ='finshed'){
    item.remove();
    // }
    // else
    // { alert("please check off item before attempting to delete");
//    }
}

/* Step 11 below here change text in html id divabout (Why won't my background change to yello??)*/
function doAbout() {

    var dtext = document.getElementById("divAbout");
    var dbackgrnd = document.getElementById("divAbout");

    dtext.innerHTML = "Author: Antwan Grant";
    dbackgrnd.className = "aboutColor";

}

/* Step 14 below here- CLEAR */
function clearAbout() {
    var dclear = document.getElementById("divAbout");
    dclear.innerHTML = " ";

}