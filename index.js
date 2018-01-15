var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var getPrice = function() {
    return Math.floor(Math.random() * Math.floor(101));
  }
  var obj = {[item]: getPrice()}
  console.log(`${item} has been added to your cart.`)
  cart.push(obj)
  return cart
}

function viewCart() {
  
  if(cart.length === 0) console.log("Your shopping cart is empty.")
  
  else if(cart.length === 1) {
    var item = cart[0]
    var itemName = Object.keys(item)[0]
    var itemPrice = item[itemName]
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
  }
  
  else if(cart.length === 2) {
    var fItem = cart[0]
    var fItemName = Object.keys(fItem)[0]
    var fItemPrice = fItem[fItemName]
    
    var sItem = cart[1]
    var sItemName = Object.keys(sItem)[0]
    var sItemPrice = sItem[sItemName]
    
    console.log(`In your cart, you have ${fItemName} at $${fItemPrice} and ${sItemName} at $${sItemPrice}.`)
  }
  
  else if(cart.length >= 3) {
    
    var intro = `In your cart, you have`
    
    var message = []
    
    for (var i = 0; i < cart.length - 1; i++) {
      var mItem = cart[i]
      var mItemName = Object.keys(mItem)[0]
      var mItemPrice = mItem[mItemName]
      
      message.push( ` ${mItemName} at $${mItemPrice}` )
    }
    
    var lItem = cart[cart.length - 1]
    var lItemName = Object.keys(lItem)[0]
    var lItemPrice = lItem[lItemName]
    
    var end =  `, and ${lItemName} at $${lItemPrice}.`
    
    console.log (`${intro}${message}${end}`);
    
  }
}

function total() {
  
  var sum = 0;
  
  for (var i = 0; i < cart.length; i++) {
    
    var item = cart[i]
    var itemName = Object.keys(item)[0]
    var itemPrice = item[itemName]
      
    sum += itemPrice
  }
  
  return sum
}

function removeFromCart(item) {
  
  var lng = cart.length
  
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  if (lng === cart.length) {
    console.log("That item is not in your cart.")
    return cart
  }
}

function placeOrder(cardNumber) {
  
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  
  var t = total()
  console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
  
  cart = []
  
  return cart
}
