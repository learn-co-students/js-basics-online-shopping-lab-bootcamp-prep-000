var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var Price = Math.floor((Math.random() * 100) + 1);  //rand gen no between 1-100
 var itemObject = {itemName: item, itemPrice: Price};   //create an object with the item name and item price
 getCart().push(itemObject);   //push item object into cart array
 return `${item} has been added to your cart.`;  //return message saying "'item' has been added to cart"
}

function viewCart() {
  //if shopping cart empty return "You shopping cart is empty."
  var cart = getCart();
  if (cart.length === 0) {   
    return "Your shopping cart is empty.";     
  }
  //if shopping cart has 1 item.
  else if (cart.length === 1) {
  var oneItem = cart[0].itemName;
  var onePrice = cart[0].itemPrice;
  return `In your cart, you have ${oneItem} at $${onePrice}.` //return message about what is in cart.
  }
  //if shopping cart has more than 1 item.
  else {  //return list of items in cart
    var allItems = [];  //define allItems array to but in item and price details from cart
    for (let i = 0; i<cart.length - 1; i++) {  //iterate through all cart array
    var obj = cart[i];
    var Name = obj["itemName"];     //pull & save ith items name from cart
    var Price = obj["itemPrice"];     //pull & save ith items price from cart
    allItems.push(` ${Name} at $${Price}`); //push ith item name & price onto end of new array called allItems
  }
  var lastno = cart.length - 1
  var objlast = cart[lastno];
  var lastitem = objlast["itemName"];
  var lastprice = objlast["itemPrice"];
  var allItemsMsg = allItems.join(', ') //combine all items in allItems array into 1 string.
  return `In your cart, you have${allItems}, and ${lastitem} at $${lastprice}.` //return message about what is in cart.
  }
}

function total() {
 //adds up price of all items in the cart
 var cart= getCart();
 var allPrices = [];
 var sum = 0;
//iterate through cart to get all prices from object into array
  for(let i=0;i<cart.length;i++) {  
   var ithObject = cart[i];       //get the ith object in the cart
   var objPrice = ithObject["itemPrice"];       //get the item price property from the ith object
   sum += objPrice;     //add the itemPrice from the ith object to sum
  }
  return sum;
}


function removeFromCart(item) {
  //find the index of the item
    var cart = getCart();
  var removeIndex = cart.findIndex(x => x.itemName== item);
  //check if item exists in cart
  if (removeIndex === -1) {
    return "That item is not in your cart."
  }
  else {
  // removes the specified item from the cart
  cart.splice(removeIndex, 1);
}
}

function placeOrder(cardNumber) {
var sum = total();
if (cardNumber === undefined) {
  return "Sorry, we don\'t have a credit card on file for you.";
}
else {
  cart = [];
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  //empty the cart
  
}
}

function testnest(cardNumber) {
  var sum = total()
  return sum
}
