messageElement = document.getElementById("message");

b1Elem = document.getElementById("b1");
b2Elem = document.getElementById("b2");

let inventory = [];

let hungry = true;

let notHungry = function() {
    alert("You're not hungry anymore");
    hungry = false;
}

let tooFull = function() {
    alert("You are too full. Stop Eating!")
    hungry = false;
}

function addToInventory(item, type) {
    inventory.push(item);
    
    var li = document.createElement("li");
    var item = document.createTextNode(item);
    li.appendChild(item);
    var myDiv = document.getElementById(type);
    myDiv.appendChild(li);
    
}

let eatApple = function() {
    messageElement.innerText = "You have entered Low Earth Orbit. Wheeee!";
    b1Elem.parentNode.removeChild(b1Elem);
    addToInventory("Apple Seeds", "misc")
    
    
}

let eatOrange = function() {
    messageElement.innerText = "You have entered Geostationary Orbit. There's your house!"
    b2Elem.parentNode.removeChild(b2Elem)
    addToInventory("Orange Seeds", "misc")
}

b1Elem.onclick = () => {
    
    eatApple();
    if (hungry) {
        notHungry();
    }   else {
        tooFull();
    }
    
}

b2Elem.onclick = () => {
    eatOrange();
    if (hungry) {
        notHungry();
    }   else {
        tooFull();
    }
}

