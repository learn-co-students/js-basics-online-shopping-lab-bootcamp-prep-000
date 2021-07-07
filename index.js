var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var x = {[itemName]:itemPrice}
 cart.push(x);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
      
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)  
  } else {
      var x = [];
      var i = 0;
    while (i < cart.length - 1) {
      x.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
      var y = `${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}`;
      i++;
    } 
    console.log(`In your cart, you have${x}, and ${y}.`);
  } 
  }

function total() {
  var x = []
  var i = 0
  while (i < cart.length) {
    x.push(parseInt(Object.values(cart[i])))
  i++
  }  {
    var y = x.reduce((total, amount) => total + amount);
      return y
  }
}

  function removeFromCart(name) {
  var x = []
  let i = 0
  while (i < cart.length) {
    x.push((Object.keys(cart[i]).toString()))
    
    i++
  }
  if (x.includes(name) === true) {
    console.log(x.indexOf(name))
    var y = x.indexOf(name)
    cart.splice(y, 1)
  } else {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNumber) {
  
  if (typeof cardNumber === 'number') {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  return cart
}
