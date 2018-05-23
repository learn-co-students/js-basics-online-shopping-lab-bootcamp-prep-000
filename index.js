var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName : item , itemPrice: Math.floor(Math.random() * 100)};
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
     var oneItemMessage = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return oneItemMessage
  } else if (cart.length > 1) {
     var countdown = cart.length;
     var number = 0;
     var message = ["In your cart, you have"];
     while (countdown > 1) {
       message = `${message} ${cart[number].itemName} at $${cart[number].itemPrice},`;
       number++;
       --countdown;
     }
     while (countdown === 1) {
       message = `${message} and ${cart[number].itemName} at $${cart[number].itemPrice}.`;
       --countdown;
     }
  }
  return message
}


function total() {
  var countdown = cart.length;
  var number = 0;
  var total = 0;
  while (countdown > 0) {
    total = total+cart[number].itemPrice
    number++
    --countdown
  }
  return total
}

function removeFromCart(item) {
  var countdown = cart.length
  var number = 0 
  while (countdown > 0) {
    if (cart[number].itemName === item) {
      cart.splice([number],1);
      return cart 
    }
    --countdown;
    number++
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var countdown = cart.length;
    var number = 0;
    var total = 0;
    while (countdown > 0) {
     total = total+cart[number].itemPrice
     number++
     --countdown
  }
    cart.splice(0,cart.length)
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
