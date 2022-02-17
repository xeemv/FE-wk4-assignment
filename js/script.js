let id = 0;


document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();    
    // w/o passing any arguments into new Date, it will take the current date/time
    let table = document.getElementById('list');
    // this is the reference to the table
    let row = table.insertRow(1);
    // the header row is position zero, so we want the new row to begin at position 1
    row.setAttribute('id', `item-${id}`);
    // what this line of code will do is, give each row an ID + the ID from line 10
    row.insertCell(0).innerHTML = document.getElementById('new-entry-date').value;
    // allow us to set the value of the first cell will equal whatever we type into our task input
    // row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    // // this will create the date created and format it using template literal to concatenate things
    //     //  it will read as current year - month - day
    //     //  plus 1 due to zero based counting for the month
    row.insertCell(1).innerHTML = document.getElementById('new-trip-date').value;
    // user would select their an date for their planned trip
    row.insertCell(2).innerHTML = document.getElementById('new-task-destination').value;
    //  the start date that we selected at the time of creating the task will drop into this cell
    row.insertCell(3).innerHTML = document.getElementById('new-destination').value;
    //  the start date that we selected at the time of creating the task will drop into this cell
    row.insertCell(4).innerHTML = document.getElementById('Reseached-and-logging').value;
    // user will select from drop down list and values will display in the table
    row.insertCell(5).innerHTML = document.getElementById('partners').value;
    // user will select from drop down list and values will display in the table
    row.insertCell(6).innerHTML = document.getElementById('new-comments').value;
    // row.insertCell(5).innerHTML = document.getElementById('new-comments').value;
    let action = row.insertCell(7);
    // this is the action created to allow a user to delete the current row
    action.appendChild(createDeleteButton(id++));
    // add a button or append a button so the user could delete the button
    // it will increment
    document.getElementById('new-entry-date').value = "";
    // this will give the user a blank slate to start over and add more task
    // this will clear the entry date
    document.getElementById('new-trip-date').value = '';
    // this will give the user a blank slate to start over and add more task
    // this will clear the trip date
})

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

