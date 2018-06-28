var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = new Object();
 obj.itemName = item
 obj.itemPrice = parseInt(Math.random()*100)
 cart.push(obj)
 return `${obj.itemName} has been added to your cart.`
}

function viewCart() {
  var output = []
  if (cart.length ==0) {
    return "Your shopping cart is empty."
  } else if (cart.length==1) {
    output.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`)
  } else if (cart.length==2) {
    output.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`)
    output.push(` and ${cart[1].itemName} at $${cart[1].itemPrice}`)
  } else {
    for (let i=0; i<cart.length; i++) {
      if (i+1 == cart.length) {
        output.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else {
        output.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
  }
  return `In your cart, you have${output.toString()}.`
}

function total() {
  var total = 0;
  for (let i=0; i<cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var found = false
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName == item){
      cart.splice(i,1)
      found = true
    }
  }
  if (found == false) { return "That item is not in your cart."}
  
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cost = 0
    cost = total()
    for (let i=0; i<=cart.length; i++) {
      cart.pop()
    }
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
  
}
