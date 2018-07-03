var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = math.floor(100+(math.random()));
 var itemObj = {[item]: price}
 cart.push(itemObj);
 console.log("$[item] has been added to your cart")
 return cart;
}
addToCart("gloves")
addToCart("skis")
addToCart("ball")
addToCart("shoes")

function viewCart() {
  var cartItems = [];
  if(cartItems === 0){
    console.log("Your cart is empty");
  }else if(cartItems ===1 ){
    var printOneItem = `In your cart, you have ${Object[keys]cart(0)} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem);
    
  }else if(cartItem === 2){
    var printTwoItems = `In your cart, you have${Object[keys]cart(0)} at $${cart[0][Object.keys(cart[0])]}, ${Object[keys]cart(1)} at $${cart[1][Object.keys(cart[1])]}.`
    console.log(printTwoItems);
    
  }else{
    
  for (var i = 0; i < cart.length-1; i++){
    cartItems.push(" ${Object.keys(cart[i])}")
  }
  var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(printThreeOrMoreItems)
}
}
viewCart(cart)

function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0;
  
  for (var i = 0; i < cart.length; i++){
    var itemPrice = cart[i][object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
  }
  for (var j = 0; j < pricePerItemInCart.length; j++){
    totalPrice = pricePerItemInCart[j]+totalPrice;
  }
  return totalPrice
}
total(cart)

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is no in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $71, which will be carged to the card ${cardNumber}.`)
    for (var i = 0; i > 0; i--){
      cart.pop();
    }
  }else{
    console.log(`Sorry, we don´t have a credit card on file for you.`)
  }
  return cart;
}
placeOrder()