var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 101)
 cart.push( { itemName:`${item}`, itemPrice: price })
 return `${item}` + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return "In your cart, you have " + `${cart[0].itemName}` + " at $" + `${cart[0].itemPrice}` + "."
  } else if (cart.length === 2) {
    return "In your cart, you have " + `${cart[0].itemName}` + " at $" + `${cart[0].itemPrice}` + ", and " + `${cart[1].itemName}` + " at $" + `${cart[1].itemPrice}` + "."
  } else {
    var array = []
    for(var i = 0; i < cart.length; i++) {
      array.push(" " + `${cart[i].itemName}` + " at $" + `${cart[i].itemPrice}`)
    }
    return "In your cart, you have" + array.slice(0,array.length-1) + ", and" + array.slice(array.length-1) + "."
  }
  
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var check = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      check = 1 
    }
  }
  if (check === 0) {
    return "That item is not in your cart."
  } else {
    for (var j = 0; j < cart.length; j++) {
      if (cart[j].itemName === item) {
        cart.splice(j,1)
      }
    }
  }
}

function placeOrder(cardNumber) {
  function total() {
    var sum = 0
    for (var i = 0; i < cart.length; i++) {
      sum += cart[i].itemPrice
    }
    return sum
  }
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var total = total()
    var i = cart.length
    cart.splice(0,i)
    return "Your total cost is $" + `${total}` + ", which will be charged to the card " + `${cardNumber}` + "."
  }
}
