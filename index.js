var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100))

  var newCartItem = {
    itemName: `${item}`,
    itemPrice: price
  }

  cart.push(newCartItem)

  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  }
  var cartContents = []
  cart.forEach(function(item, index) {
    if (cart.length === 1) {
      cartContents.push(`${item.itemName} at $${item.itemPrice}`)
      return
    } else if (index < cart.length - 1) {
      cartContents.push(`${item.itemName} at $${item.itemPrice}`)
    } else {
      cartContents.push(`and ${item.itemName} at $${item.itemPrice}`)
    }
  });
  return `In your cart, you have ${cartContents.join(', ')}.`
}

function total() {
  // write your code here
  
  var totalCost = 0;
  
  cart.forEach(function(item) {
    totalCost = totalCost + item.itemPrice;
  });
  
  return totalCost;
}

function removeFromCart(item) {
  // write your code here

 cart.forEach(function(cartItem, index) {
    if (cartItem['itemName'] === item) {
      cart.splice(index, 1)
      return cart;
    }
  });
  return 'That item is not in your cart.';
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    
    var s = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    
    cart = []
    
    return s
  }
}