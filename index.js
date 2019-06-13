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
    cart.push({itemName:item, itemPrice:Math.floor(Math.random()*100 + 1) });
    return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var MsgTxt = "In your cart, you have "
  
  if (cart.length === 0) return "Your shopping cart is empty.";

  else {
    for (var i = 0; i<cart.length; i++)
    {
        MsgTxt += `${cart[i].itemName} at $${cart[i].itemPrice}`

        if (cart.length === 1) {
            return MsgTxt += ".";
        }
        else if (i+2 === cart.length) {
            return MsgTxt += `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.` 
        }
        else MsgTxt += ", ";  
    }
  }
  return MsgTxt;
}

function total() {
  // write your code here
  var totalValue = 0;
  
  for (var i = 0; i < cart.length; i++) {
    totalValue += parseInt(cart[i].itemPrice);
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) return "Sorry, we don't have a credit card on file for you.";

  var cartTotal = total();
  cart = [];
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
