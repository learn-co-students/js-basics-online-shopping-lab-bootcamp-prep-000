var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100) + 1;
 cart.push({[item]: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code 
  if(cart.length === 0 )
  {
    console.log("Your shopping cart is empty.");
  }else{
    var inCart = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++)
    {
      inCart += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`;
      if(cart.length >= 3 && i < cart.length - 1)
      {
        inCart += ', ';
      }
      if(cart.length === 2 && i === 0)
      {
        inCart += ' ';
      }
      if(cart.length >= 2 && i === cart.length -2){
        inCart += 'and ';
      }
    }
    inCart += '.';
    console.log(inCart);
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i++){
    totalPrice += Object.values(cart[i])[0];
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item))
    {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
