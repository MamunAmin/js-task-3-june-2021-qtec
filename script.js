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

    for(let i = 0; i < clickedItems.length; i++) {
        
    }


    if("$(itemId)" in clickedItems)
    {
        console.log("hii");   
        
    }
    //clickedItemId[itemID] = itemID;
    clickedItems.push( {[itemID]: itemID} );
    console.log(clickedItems);   
}
/*
//document.getElementById("nam").innerHTML = evnt.currentTarget.clickedItemId;
$('input[type=checkbox]').each(function(i, e) {
    stuff['row'+i] = e.checked;
})
stuff.push( {'name':$(this).attr('checked')} );
let margin = document.getElementsByClassName("newDiv");
margin[i].style.marginLeft = "10px";
*/