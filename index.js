var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  function setPrice() {
    return Math.floor(Math.random() * Math.floor(100))
    }
    var newItem = {
      itemName:item,
      itemPrice:setPrice()
    };
    cart.push(newItem);
    return `${item} has been added to your cart.`;
  }


function viewCart() {
  // write your code here
  var longList = []
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
    else if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else  {
      for (var i = 0; i < cart.length-1; i++) {
        longList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
        return `In your cart, you have ${longList.join(", ")}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    }
  }

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
//   write your code here
  var cardRGEX = /^[0-9]{8}$/;
  var cardResult = cardRGEX.test(cardNumber);
  if (cardResult === false) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
    }
  }
