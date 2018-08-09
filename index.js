var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random()*100)+1;
  cart.push({"itemName": item, "itemPrice": itemPrice});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let str = "In your cart, you have ";
  if (cart.length > 1){
    for (var i=0; i<cart.length-1; i++) {
      str+=`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
     } 
    str+=`and ${getCart()[cart.length-1].itemName} at $${getCart()[cart.length-1].itemPrice}.`;
    } else if (cart.length === 1) {
      str+=`${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
    } else {
     str = "Your shopping cart is empty."
  }
  return str;
}

function total() {
  let total=0;
  for (var i=0; i<cart.length; i++) {
    total+= cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  var itemExist = false;
  for (var i=0; i<cart.length; i++){
    if (cart[i]['itemName'] === item) {
      cart.splice(i,1);
      itemExist = true;
    }
  }
  if (itemExist === true) {
    return cart;
  } else {
    return "That item is not in your cart.";
  }
  
}

function placeOrder(cardNumber) {
  if (cardNumber) { 
    let finalTotal = total();
    cart = [];
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
