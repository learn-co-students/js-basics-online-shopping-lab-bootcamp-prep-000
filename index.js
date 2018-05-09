var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObj = {itemName: item, itemPrice: price };
  cart.push(itemObj);
  return item + ' has been added to your cart.';
}

function viewCart() {
  var cartItems = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    for(var i in cart) {
      var itemKey = cart[i].itemName;
      var itemValue = cart[i].itemPrice
      cartItems.push(`${itemKey} at $${itemValue}`);
    }
  }
  
  if (cart.length === 1) {
    return `In your cart, you have ${cartItems[0]}.`;
  } else if (cart.length === 2) {
    return (`In your cart, you have ${cartItems[0]}, and ${cartItems[1]}.`);
  }else if (cart.length > 2) {
    var endItem = cartItems.pop();
    return (`In your cart, you have ${cartItems.join(", ")}, and ${endItem}.`);
  }
}


function total() {
  var cost = 0;
  for(let i = 0; i < cart.length; i++){
    cost += cart[i].itemPrice;
  }
  return cost;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var cartTotal = total();
    setCart([]);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    } else {
    return "Sorry, we don't have a credit card on file for you.";
   }
}
