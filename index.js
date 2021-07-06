var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign({}, {[item]: Math.floor((Math.random() * 100) + 1)}))
  console.log(item + " has been added to your cart.")
  return cart
}


function viewCart() {
  if ( cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if(cart.length === 1) {
      console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + ".")
  } else if(cart.length === 2) {
      console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] +  ".")
  } else {
    var cartList = [];
    var a = parseInt(cart.length-1)
    for (let i = 0; i < cart.length-1; i++){
      cartList.push(" " + Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])])
    }
    //console.log(cartList)
    console.log("In your cart, you have" + cartList + ", and " + Object.keys(cart[a]) + " at $" + cart[a][Object.keys(cart[a])] + ".")

  }
}

function total() {
  var currentTotal  = 0;
  for (let i = 0; i < cart.length; i++) {
    currentTotal += parseInt(cart[i][Object.keys(cart[i])])
  }
  return currentTotal;
}

function removeFromCart(item) {
  for ( let i = 0; i < cart.length; i++) {
    if (String(Object.keys(cart[i])) === item) {
      cart.splice(i,1)
      return cart
    }
  }
    console.log("That item is not in your cart.")
    return cart
}


function placeOrder(cardNumber){
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    var cost = total();
    console.log("Your total cost is $" + cost + ", which will be charged to the card " + cardNumber + ".");
  }
  cart = [];
  return cart
}
