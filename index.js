var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() *100)
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  var sentenceStart = "In your cart, you have ";
  var itemArray = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  for (let i = 0; i < cart.length; i++) {
    itemArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  
  if (cart.length === 1) {
    return `${sentenceStart}${itemArray[0]}.` 
  } else if (cart.length === 2) {
    return `${sentenceStart}${itemArray[0]}, and ${itemArray[1]}.`
  } else if (cart.length > 2) {
    var lastItem = itemArray.pop();
    var itemsString = sentenceStart;
    
    for (let i = 0; i < itemArray.length; i++) {
      itemsString += `${itemArray[i]}, `;
    }
    
    return `${itemsString}and ${lastItem}.`
  }
}

function total() {
  let cartTotal = 0;
  
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName.toLowerCase() === item.toLowerCase()) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber=null) {
  if (cardNumber === null) {
    return "Sorry, we don't have a credit card on file for you."
  }
  
  cart = [];
  return "Your total cost is $" + total() + `, which will be charged to the card ${cardNumber}.`
}
