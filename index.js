var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 99 + 1)
  var itemObj = Object.assign({itemName: item, itemPrice: price})
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var myCart = getCart()
  
  if (myCart.length === 0) {
    return "Your shopping cart is empty."
  }
    
  for (var i = 0; i < myCart.length; i++) {
    
    var cartItem = myCart[i]
    var cartString
    
    if ( i === 0 && myCart.length === 1) {
      cartString = `In your cart, you have ${cartItem.itemName} at $${cartItem.itemPrice}.`
    }
    
    else if (i === 0 && myCart.length > 1) {
      cartString = `In your cart, you have ${cartItem.itemName} at $${cartItem.itemPrice}`
    }
    
    else if (i !== (myCart.length - 1) && myCart.length > 1) {
      cartString = cartString +`, ${cartItem.itemName} at $${cartItem.itemPrice}`
    }
    
    else {
      cartString = cartString + `, and ${cartItem.itemName} at $${cartItem.itemPrice}.`
    }
  }
  return cartString
}

function total() {
  var myCart = getCart()
  var cartTotalValue = 0
  
  for (var i = 0; i < myCart.length; i++) {
    var cartItem = myCart[i]
    cartTotalValue = cartTotalValue + cartItem.itemPrice
  }
  return cartTotalValue
}

function removeFromCart(item) {
  var myCart = getCart()
  var itemIsInCart = false
  
  for (var i = 0; i < myCart.length; i++) {
    
    if (myCart[i].itemName === item) {
      myCart = [...myCart.slice(0, i), ...myCart.slice(i+1, myCart.length)]
      itemIsInCart = true 
    }
  }
  
  if (itemIsInCart === false) {
    return "That item is not in your cart."
  }
  cart = myCart 
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var orderTotal = total(cart)
    setCart([])
    return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`
  }
}
