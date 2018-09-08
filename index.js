var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



 ///////////////////////////create an Objects array.

function addToCart(item) {
  var newItem = {};  // this object contains the item name and price.
  var itemList = []; // this is the arry to contails all the items-price objects.

  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100)
  }
  //newItem.itemName = item;
 //newItem.itemPrice = Math.floor(Math.random()*100)
 itemList.push(newItem); // it was pop(newItem)
 return `${newItem.itemName} has been added to your cart.`
}


function viewCart() {
  allItemsInString = "In your cart, you have ";
  if (itemList.length === 0) {
    return "Your shopping cart is empty."
  } else {

    for (var i=0; i < itemList.length-1; i++) {
      allItemsInString.concat(`${itemList[i].itemName}  at $${itemList[i].itemPrice},`);
    }

  }
  return allItemsInString.concat(` and ${itemList[itemList.length-1].itemName}  at $${itemList[itemList-1].itemPrice}.`) ;

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
