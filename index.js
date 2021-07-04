var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = new Object();
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random() * 100);
  cart.push(newItem);
  return `${item} has been added to your cart.`
 // write your code here
}

function viewCart() {
  var emptyArray = [];
  var s = "In your cart, you have"
  for (var i = 0; cart.length > i; i++) {
    emptyArray.push (`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (emptyArray.length === 0) {
    return "Your shopping cart is empty."
  } else if (emptyArray.length === 1) {
    return `${s} ${emptyArray[0]}.`
  } else if (emptyArray.length === 2) {
    return `${s} ${emptyArray[0]}, and ${emptyArray[1]}.`
  } else {
    var last = emptyArray.pop()
    return `${s} ${emptyArray.join(', ')}, and ${last}.`
  }
}

function total() {
  var price = [];
  for(var i = 0; i < cart.length; i++) {
    price.push (cart[i].itemPrice);
  }
    let sum = price.reduce(function(total, amount) {
      return (total + amount)
    });
    return sum
}

function removeFromCart(item) {
  var unwanted = false;
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      unwanted = true;
   }
 } if(unwanted === false) {
 return "That item is not in your cart.";
}
}


function placeOrder(cardNumber) {
  if(cardNumber) {
    let cart_total = total()
    setCart([])
    return `Your total cost is $${cart_total}, which will be charged to the card ${cardNumber}.`

  } else
  return "Sorry, we don\'t have a credit card on file for you."
}
