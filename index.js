var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {
    itemName: item,
    itemPrice: (Math.floor(Math.random() * 101)),
  }
  cart.push(item);
  return item.itemName + " has been added to your cart."
}

cart = [
  {itemName: 'apples', itemPrice: 5},
  {itemName: 'pears', itemPrice: 2},
  {itemName: 'quince', itemPrice: 3},
]

function viewCart() {
  var array = [];
  for (let i=0; i < cart.length; i++) {
    array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  var intro = "In your cart, you have";
  if (array.length === 0) {
    return "Your shopping cart is empty.";
  } else if (array.length === 1) {
    return intro + array + ".";
  } else if (array.length === 2) {
    return intro + array[0] + ", and" + array[1] + "."; 
  } else {
    return intro + array.slice(0,array.length-1) + ", and" + array[array.length-1] + ".";
  }
}

function total() {
  var subTotal = 0;
  for (let i=0; i<cart.length; i++) {
    subTotal += cart[i].itemPrice;
  }
  return subTotal;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice([i],1);
      return cart;
    } 
  } return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return message;
  } 
}

console.log(placeOrder(3294392))