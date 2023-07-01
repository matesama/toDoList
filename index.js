const input = document.querySelector('input');
const form = document.querySelector("form");
const list = document.querySelector("#listItems");

const submitFunction = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        alert("There is not input. Please enter a value before submitting");
    } else {
        console.log(itemsInput.value);
           let newItem = document.createElement('li');
           let newItemContent = document.createTextNode(`${itemsInput.value}`);
           newItem.appendChild(newItemContent);
           list.appendChild(newItem);
          
          
           //window.localStorage.setItem('item', `${itemsInput.value}`);
           //document.getElementById("test").innerHTML = window.localStorage.getItem("item");
           

    }
}

const editButton = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        console.log("There is not input. Please enter a value before submitting");
    } else {
    let edButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode('Edit');
    edButton.appendChild(buttonText);
    list.appendChild(edButton); 
    }

}
const doneButton = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        console.log("There is not input. Please enter a value before submitting");
    } else {
    let edButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode('Done');
    edButton.appendChild(buttonText);
    list.appendChild(edButton); 
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
    list.appendChild(tickButton); 
    }

}

form.addEventListener('submit', submitFunction);
form.addEventListener('submit', editButton);
form.addEventListener('submit', doneButton);
form.addEventListener('submit', tickButton);