var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = `${item}`;
  var itemPrice = Math.floor(Math.random() * (100-1) + 1);
  var item = { [itemName]: itemPrice }
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart
}

function viewCart() {
  var i = 0;
  var l = cart.length;
  var cartList = []

  for(let i=0; i<l; i++){
    cartList.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`);
  }
  if(l<1){
    console.log("Your shopping cart is empty.");
  }
  else if(l===1){
    console.log(`In your cart, you have ${cartList[0]}.`)
  }
  else if (l===2) {
    console.log(`In your cart, you have ${cartList[0]} and ${cartList[1]}.`)
  }
  else{
    var fullCart = "In your cart, you have "
    for(let i =0; i<l-1; i++){
      fullCart += `${cartList[i]}, `;
    }
    console.log(`${fullCart}and ${cartList[l-1]}.`)
  }
}

function total() {
  var totalCart = 0
  for(let i=0; i<cart.length; i++){
    var totalCart = totalCart + cart[i][Object.keys(cart[i])[0]];
  }
  return totalCart;
}

function removeFromCart(item) {
  var index = -1;
  for(let i=0; i<cart.length; i++){
    if(Object.keys(cart[i])[0] === item){
      index = i;
    }
  }
  if(index > 0){
    cart.splice(index, 1);
  }
  else{
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
    if(cardNumber == undefined){
      console.log( "Sorry, we don't have a credit card on file for you.");
    }
    else{
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.length = 0;
    }
  }
