const products =  [
    {"id": 1, "name": "Item 1", "price": 280, "imgURL": "images/products/1.jpg"},
    {"id": 2, "name": "Item 2", "price": 120, "imgURL": "images/products/2.jpg"},
    {"id": 3, "name": "Item 3", "price": 400, "imgURL": "images/products/3.jpg"},
    {"id": 4, "name": "Item 4", "price": 500, "imgURL": "images/products/4.jpg"},
    {"id": 5, "name": "Item 5", "price": 700, "imgURL": "images/products/5.jpg"},
    {"id": 6, "name": "Item 6", "price": 100, "imgURL": "images/products/6.jpg"},
    {"id": 7, "name": "Item 7", "price": 230, "imgURL": "images/products/7.jpg"},
    {"id": 8, "name": "Item 8", "price": 120, "imgURL": "images/products/8.jpg"},
    {"id": 9, "name": "Item 9", "price": 900, "imgURL": "images/products/11.jpg"},
    {"id": 10, "name": "Item 10", "price": 300, "imgURL": "images/products/13.jpg"},
    {"id": 11, "name": "Item 11", "price": 400, "imgURL": "images/products/14.jpg"},
    {"id": 12, "name": "Item 12", "price": 430, "imgURL": "images/products/15.jpg"},
];
products.forEach(product => {
    let newDiv = document.createElement("div");
    newDiv.className = "item";
    newDiv.addEventListener("click", rightItemsGenerator, false);
    newDiv.clickedItemId = product["id"];
    document.getElementById("items").appendChild(newDiv);
    
    let ProductImage = document.createElement("img");
    ProductImage.className = "image";
    ProductImage.src = product["imgURL"];
    
    let productName = document.createElement("p");
    let text = document.createTextNode(product["name"]);
    productName.className = "name";
    productName.appendChild(text);
    
    let productPrice = document.createElement("p");
    let textPrice = document.createTextNode("BDT " + product["price"]);
    productPrice.className = "price";
    productPrice.appendChild(textPrice);

    newDiv.appendChild(ProductImage);
    newDiv.appendChild(productName);
    newDiv.appendChild(productPrice);
    
});

let clickedItems = [];
function rightItemsGenerator(evnt) {
    let itemID = evnt.currentTarget.clickedItemId;
    let isExist = false;

    for(var i = 0; i < clickedItems.length; i++) {
        if(Object.keys(clickedItems[i])[0] == itemID) {
            isExist = true;
            break;
        } 
    }
    if(isExist) {
        clickedItems[i][itemID] =  Object.values(clickedItems[i])[0] += 1; 
    }
    else   {
        clickedItems.push( {[itemID]: 1} );
    }
    isExist = false;
    showRightItems();
}

function showRightItems() {
    let finalPrice = 0;
    let e = document.querySelector("#right-container");
    let child = e.lastElementChild;
    let removeItemIndex = 0;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    clickedItems.forEach(clickedItem => {
        let itemId = Object.keys(clickedItem)[0];
        let itemValue = Object.values(clickedItem)[0];
        let subPrice = Object.values(products[itemId-1])[2] * itemValue;
        finalPrice += subPrice;

        var newDiv = document.createElement("div");
        newDiv.id = "right-box";
        document.getElementById("right-container").appendChild(newDiv);
        
        let hr = document.createElement("hr");
        hr.className = "right-devider";
        document.getElementById("right-container").appendChild(hr);
        
        let rightImage = document.createElement("img");
        rightImage.className = "right-img";
        rightImage.src = Object.values(products[itemId-1])[3];

        let number = document.createElement("div");
        let num = document.createTextNode(itemValue); /***/
        number.className = "number";
        number.appendChild(num);
        
        let rightName = document.createElement("p");
        let text = document.createTextNode(Object.values(products[itemId-1])[1]);
        rightName.className = "right-name";
        rightName.appendChild(text);
        
        let rightPrice = document.createElement("p");
        let textPrice = document.createTextNode("BDT "+ subPrice);
        rightPrice.className = "right-price";
        rightPrice.appendChild(textPrice);

        let delIcon = document.createElement("span");
        let textDel = document.createTextNode("delete_forever");
        delIcon.className = "material-icons del";
        delIcon.addEventListener("click", itemRemover, false);
        //delIcon.delItemId = removeItemIndex;
        delIcon.delItemId = itemId;
        delIcon.appendChild(textDel);

        newDiv.appendChild(rightImage);
        newDiv.appendChild(number);
        newDiv.appendChild(rightName);
        newDiv.appendChild(rightPrice);
        newDiv.appendChild(delIcon);
        removeItemIndex++;
    });
    document.getElementById("rate1").innerHTML = "BDT " + finalPrice;
    document.getElementById("rate2").innerHTML = "BDT " + finalPrice;
    document.getElementById("rate3").innerHTML = "BDT " + finalPrice;
}

function itemRemover(evnt) {
    let itemIndex = evnt.currentTarget.delItemId;
    console.log(itemIndex);
    //clickedItems = clickedItems.slice(itemIndex);
    clickedItems = clickedItems.filter(person => itemIndex != Object.keys(person)[0]);
    //clickedItems.slice(0, itemIndex);
    console.log(clickedItems);
    showRightItems();
}