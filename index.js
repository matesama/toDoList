//const input = document.querySelector('input');
const form = document.querySelector("form");
const list = document.querySelector("#listItems");
const itemsInput = form.elements['items'];
const inputText = document.querySelector('#txt');

const submitFunction = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        alert("There is not input. Please enter a value before submitting");
    } else {
            //item
           let newItem = document.createElement('li');

           let newItemContent = document.createTextNode(`${itemsInput.value}`);
           newItem.appendChild(newItemContent);
           newItem.setAttribute('class', `item`);
           list.appendChild(newItem);
            //edit
            let editButton = document.createElement("BUTTON");
            let editText = document.createTextNode('Edit');
            editButton.appendChild(editText);
            editButton.setAttribute("class", `edit-button` );
            newItem.appendChild(editButton); 
            //done
            let doneButton = document.createElement("BUTTON");
            let doneText = document.createTextNode('Done');
            doneButton.appendChild(doneText);
            doneButton.setAttribute("class", `done-button`);
            newItem.appendChild(doneButton); 
            //tick
            let tickButton = document.createElement("INPUT");
            tickButton.setAttribute("type", "checkbox")
            tickButton.setAttribute("class", `tick-button`);
            newItem.appendChild(tickButton);
            //delete
            let deleteButton = document.createElement("BUTTON");
            let buttonText = document.createTextNode('Delete');
            deleteButton.appendChild(buttonText);
            deleteButton.setAttribute("class", `delete-button`);
            newItem.appendChild(deleteButton); 

            
          
           //window.localStorage.setItem('item', `${itemsInput.value}`);
           //document.getElementById("test").innerHTML = window.localStorage.getItem("item");
           

    }
}



/*const editButton = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        console.log("There is not input. Please enter a value before submitting");
    } else {
    let editButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode('Edit');
    editButton.appendChild(buttonText);
    editButton.setAttribute("class", `edit-button` );
    list.appendChild(editButton); 
    }

}
const doneButton = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        console.log("There is not input. Please enter a value before submitting");
    } else {
    let doneButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode('Done');
    doneButton.appendChild(buttonText);
    doneButton.setAttribute("class", `done-button`);
    list.appendChild(doneButton); 
    }
}

const tickButton = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        console.log("There is not input. Please enter a value before submitting");
    } else {
    let tickButton = document.createElement("INPUT");
    tickButton.setAttribute("type", "checkbox")
    tickButton.setAttribute("class", `tick-button`);
    list.appendChild(tickButton); 
    }

}

const deleteButton = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        console.log("There is not input. Please enter a value before submitting");
    } else {
    let deleteButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode('Delete');
    deleteButton.appendChild(buttonText);
    deleteButton.setAttribute("class", `delete-button`);
    list.appendChild(deleteButton); 
    }
}
*/
form.addEventListener('submit', submitFunction);
/*form.addEventListener('submit', editButton);
form.addEventListener('submit', doneButton);
form.addEventListener('submit', tickButton);
form.addEventListener('submit', deleteButton);
*/
//Query selector id listIItems


//Conditional to check if you are clicking editButton => event.target.classList.contains("edit-button")
const editFunction = (event) => {
    console.log('event', event)
    event.preventDefault();
    

    if(event.target.classList.contains("edit-button")) {
        //event.target.parentNode.querySelector("li");
        event.target.parentNode.contentEditable = true;
       event.target.parentNode.style.backgroundColor = "#dddbdb";
    } else if(event.target.classList.contains("done-button")){
        event.target.parentNode.contentEditable = false;
        event.target.parentNode.style.backgroundColor = "#ffffff";

    } else if(event.target.classList.contains("delete-button")) {
        event.target.parentNode.remove();
        
        
        

    } else if(event.target.classList.contains("tick-button")){

    }

};
//event.target.parentNode.querySelector(".container")
//Add event listener click (event)

listItems.addEventListener('click', editFunction);







/*list.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if(button.textContent === 'Done') {
            list.removeChild(li);
        }


    }
})*/