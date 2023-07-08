/* //const input = document.querySelector('input');
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
           let newItemText = document.createElement('div');

           let newItemContent = document.createTextNode(`${itemsInput.value}`);
           newItemText.appendChild(newItemContent);
           newItem.appendChild(newItemText);
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
    }
}

form.addEventListener('submit', submitFunction);

//Conditional to check if you are clicking editButton => event.target.classList.contains("edit-button")
const editFunction = (event) => {
    console.log('event', event)
    event.preventDefault();
    if(event.target.classList.contains("edit-button")) {
        const listItem = event.target.parentNode;
        const listItemText = listItem.firstChild;
        listItemText.contentEditable = true;
        listItemText.style.backgroundColor = "#dddbdb";
    } else if(event.target.classList.contains("done-button")){
        const listItem = event.target.parentNode;
        const listItemText = listItem.firstChild;
        listItemText.contentEditable = false;
        listItemText.style.backgroundColor = "#ffffff";
    } else if(event.target.classList.contains("delete-button")) {
        event.target.parentNode.remove();
    } else if(event.target.classList.contains("tick-button")){
        event.target.classList.toggle("checked")
    }

};

listItems.addEventListener('click', editFunction);
*/

// OOP Version:
           let newItem = document.createElement('li');
           let newItemText = document.createElement('div');

           let newItemContent = document.createTextNode(`${itemsInput.value}`);
           newItemText.appendChild(newItemContent);
           newItem.appendChild(newItemText);
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


class ListElement{
    constructor(text){
        this.text = text;
        
        }

    get text(){
        return this.text;
    }
    
    set text(newText){
        this.text = newText;

    }
}

class TODOList {
    #items
   constructor() {
    this.#items = [];
    this.form = document.querySelector("form");
    this.list = document.querySelector("#listItems");
    this.form.addEventListener('submit', submitFunction);
   }

    get items(){
          return this.#items;
        }
        
    addItem(placeholder){
        
        this.text = document.createTextNode(`${itemsInput.value}`);
        this.#items.push(placeholder);
    }
    

}


const myToDoList = new TODOList();
const item1 = new ListElement();
console.log(item1);


myBookList.addItem(new ListElement);


