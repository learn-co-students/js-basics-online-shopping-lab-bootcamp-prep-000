var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( new Object({[item]: Math.floor(Math.random() * (100 - 1 + 1))})) 
 console.log(`${item} has been added to your cart.`)
 return cart
}
function nulle() { }

function viewCart() {
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`)
  }
    else if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.getOwnPropertyNames(cart[0])} at $${Object.values(cart[0])}.`)
    }
    else if (cart.length === 2){
      console.log(`In your cart, you have ${Object.getOwnPropertyNames(cart[0])} at $${Object.values(cart[0])} and ${Object.getOwnPropertyNames(cart[1])} at $${Object.values(cart[1])}.`)
    }
    else  {
      var bing = [];
      var l = cart.length
      for (let i = 0; i < l; i++ ) {
        var name = Object.keys(cart[i])
        var price = Object.values(cart[i])
        var item = `${name} at $${price}`;
        i === l - 1 ? item = 'and ' + item : nulle();
        bing.push(item) 
      }
      console.log(`In your cart, you have ${bing.join(', ')}.`)
      
    }
}

function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
  var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    }
  
  for (var j = 0; j<pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j]+=totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var go = item 
  var fish = []
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
console.log('That item is not in your cart.')
  
}
function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
  }
}
