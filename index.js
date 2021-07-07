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
 var itemInfo = {};
 itemInfo.itemName = item;
 itemInfo.itemPrice = Math.floor(100*Math.random());
 cart.push(itemInfo);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  //empty cart condition
  //loop through cart
    //conditional if first, middle, last item 
      //add statement to a list      
  //return statement from list  

  var cartList = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }  
  
  for (let i = 0; i < cart.length; i++) {
    if (i === 0 && cart.length === 1) {
      cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}.`);
    } else if (i === 0 && cart.length != 1) {
      cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    } else if (i === cart.length - 1) {
      cartList.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
    } else {
      cartList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);      
    }
  }
  return `In your cart, you have ${cartList}`;
}

function total() {
  // write your code here
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  //loop through cart to determine item exists
    //if not, return not found statement
    //if so, remove item from cart and return cart
  var i = 0;
  while (i < cart.length) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return;
    }
    i++;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var total = total();
    cart.splice(0);
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
  }
}
