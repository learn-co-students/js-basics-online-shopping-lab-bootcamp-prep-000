var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var newItem = {};
    newItem['itemName'] = item;
    newItem['itemPrice'] = Math.floor(Math.random() * 101);
  
    cart.push(newItem);
    
    return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  var itemList = [];
  if (cart.length === 1) {
    for (let i = 0; i < cart.length; i++){
  itemList = [...itemList,`${cart[i].itemName} at $${cart[i].itemPrice}`];
    } return `In your cart, you have ${itemList[itemList.length-1]}.`;

    
  } else if (cart.length === 2) {
    for (let i = 0; i < cart.length; i++){
  itemList = [...itemList,`${cart[i].itemName} at $${cart[i].itemPrice}`];
    } return `In your cart, you have ${itemList.slice(0,itemList.length-1)}, and ${itemList[itemList.length-1]}.`;

    
  } else if (cart.length > 2) {
    for (let i = 0; i < cart.length; i++){
  itemList = [...itemList,`${cart[i].itemName} at $${cart[i].itemPrice}`];
    } return `In your cart, you have ${itemList[0]}, ${itemList[1]}, and ${itemList[itemList.length-1]}.`;

    
  } else {
  return "Your shopping cart is empty.";
}
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
       total += cart[i].itemPrice;
  } return total;
}

function removeFromCart(item) {
  if (cart.indexOf(item) >= 0) { 
    cart.splice(cart.indexOf(item),1);
    return cart;
  } else { 
    return "That item is not in your cart.";
}
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalCost = total();
    cart.splice(0,cart.length);
    return `Your total cost is $${totalCost}, which will be charged to the card ${creditCard}.`;
  }
}