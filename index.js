var cart = new Object({});

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 Object.assign({},cart,{item:Math.floor(Math.random()*100)+1});
 console.log('${item} has been added to your cart.');
 return cart;
}

function viewCart() {
  var string = "In your cart, you have";
  if(cart.length>0)
  {
  for(var x =0; x < cart.length; x++)
  {
    string= string + cart[x]+" at $"+ cart[x].value+(x==cart.length-1?".":"")+(x==cart.length-1?", and ":"")+(x<cart.length-2?", ");
  }
  }
  else
  {
    string= "Your shopping cart is empty";
  }
  console.log(string);
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
