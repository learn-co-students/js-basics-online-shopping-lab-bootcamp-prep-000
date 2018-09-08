var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

 var newItem = {};  // this object contains the item name and price.
 var itemList = []; // this is the arry to contails all the items-price objects.

function addToCart(item, price) {
  var newItem = {
    newItem: item,
    itemPrice: Math.floor(Math.random()*100),
  }
  //newItem.itemName = item;
 //newItem.itemPrice = Math.floor(Math.random()*100)
 itemList.push(newItem); // it was pop(newItem)
 return newItem.itemName;
}


function viewCart() {
  allInYourCart = "In your cart, you have ";
  if (itemList.length === 0) {
    return "Your shopping cart is empty."
  } else {

    for (i=0; i < itemList.length; i++) {
      allInYourCart = allInYourCart.concat(`${itemList[i].itemName}  at $${itemList[i].itemPrice},`);
    }

  }
  return allInYourCart;
  //allInYourCart.concat( `and ${itemList[itemList.length-1].itemName] at '$'${itemList[itemList.length-1)].itemPrice}) `

}


function total() {
  // write your code here
  return itemList.length
}

function removeFromCart(item) {
  // write your code here

}

function placeOrder(cardNumber) {
  // write your code here
}
