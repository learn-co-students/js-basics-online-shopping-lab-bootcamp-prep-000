var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var theCart = getCart();
  var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 100) }
  theCart.push(newItem);
  setCart(theCart)
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  var theCart = getCart();
  if(theCart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  var items = ""
  for(var i = 0; i < theCart.length; i++) {
    if(items.length > 0) {
      items += ", ";
    
      if(i === theCart.length - 1) {
        items += "and ";
      }
    }

    items += `${theCart[i].itemName} at $${theCart[i].itemPrice}`;
  }
  
  return `In your cart, you have ${items}.`;
}

function total() {
  var theCart = getCart();
  var cost = 0;
  for(var i = 0; i < theCart.length; i++) {
    cost += theCart[i].itemPrice;
  }
  
  return cost;
}

function removeFromCart(item) {
  var theCart = getCart();
  for(var i = 0; i < theCart.length; i++) {
    if(theCart[i].itemName == item) {
      setCart([...theCart.slice(0, i), ...theCart.slice(i + 1, theCart.length)])
      return getCart();
    }
  }
  
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  var output = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  setCart([])
  return output;
}
