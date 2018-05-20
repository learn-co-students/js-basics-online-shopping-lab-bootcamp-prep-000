var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = new Object({itemName: item,
  itemPrice: Math.floor(Math.random()*100)+1
  });
  
  cart.push(items)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0)
  {
    return 'Your shopping cart is empty'
  }
  
  var string = (`In your cart, you have `)
  for(let i = 0; i < cart.length; (i+2))
  {
    if(i === cart.length - 2){
      string += (`and ${cart[i]} at $${cart[i+1]}`)
    }else{
      string += (`${cart[i]} at $${cart[i+1]}`)
    }
  }
  string += (`.`)
  return string
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
