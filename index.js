var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)+1});//pushes item and random gen price (1-100) as object to cart array
  console.log(`${item} has been added to your cart.`);//log "<item> has been added to your cart"
  return cart;
} // [{pizza: 24}, {socks: 40}]

function viewCart() {
  var cartList = [];//create empty array to hold <key> at <value> list
  if(cart.length > 0){
    for (let i = 0; i < cart.length; i++){
      for (var cartItem in cart[i]){ // use (cartItem in cart[i]) to get key at element i
        cartList.push(` ${cartItem} at $${cart[i][cartItem]}`);//create <key> at <value> list
      }
    }
     console.log(`In your cart, you have${cartList}.`);//Return 'In your cart, you have cart[0]key at cart[0] value, cart[1] key at cart [1] value, etc.'
  }
  else {
     console.log("Your shopping cart is empty.");//return if cart array is empty
    }
}

function removeFromCart(item){
for(let i = 0; i < cart.length; i++){//Go through each element of array
  if(cart[i].hasOwnProperty(item)){
     cart.splice(i, 1);//remove object at element i
     return cart;
     }
    }
   console.log('That item is not in your cart.');//only runs once for loop in completed
  }

  function placeOrder(cardNumber) {

    if(typeof(cardNumber) === "undefined" || null){
      console.log("We don't have a credit card on file for you to place your order.");
    }
    else if(typeof(cardNumber) === "string" || "integer"){
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart = [];
    }

  }
