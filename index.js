var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {}
  obj[item] = Math.floor(Math.random()*10)
  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  // write your code here  
   var objects = []
  var keys = []
  
  for (var i=0;i<cart.length;i++) {
    objects.push(Object.keys(cart[i]))
    keys.push(cart[i][Object.keys(cart[i])])
  }
  
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length===1) {
    console.log("In your cart, you have "+objects[0]+" at $"+keys[0]+".")
  } else if (cart.length===2) {
    console.log("In your cart, you have " + objects[0] + " at $" + keys[0] + " and " + objects[1] + " at $" + keys[1]+".")
  } else if (cart.length===3) {
    console.log("In your cart, you have "+objects[0]+" at $"+keys[0]+", "+objects[1]+" at $"+keys[1]+", and "+objects[2]+" at $"+keys[2]+".")
  } else {
    console.log("In your cart, you have "+objects[0]+" at $"+keys[0]+", "+objects[1]+" at $"+keys[1]+", "+objects[2]+" at $"+keys[2]+", and "+objects[3]+" at $"+keys[3]+".")
  }
  
}

function total() {
  // write your code here
  var total = 0
  for (var i=0;i<cart.length;i++) {
    total = total + cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
   for (var i=0;i<cart.length;i++) {
    if (Object.keys(cart[i])==item) {
      cart.splice(i,1)
      return cart
    }
  }
  if (i===cart.length) {
    console.log("That item is not in your cart.")
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
    if (cardNumber) {
    console.log("Your total cost is $"+total()+", which will be charged to the card "+cardNumber+".")
    cart = []
  } else {
    console.log("Sorry, we don\'t have a credit card on file for you.")
    return cart
  }
}
