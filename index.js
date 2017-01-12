var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart(){
  var cartString = "In your cart, you have "
  if (cart.length){
    for (var i = 0, l = cart.length - 1; i < l; i++){
      cartString += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `
    }
      cartString += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`
      console.log(cartString)
      return
  } else {
    console.log("Your shopping cart is empty.")
    return
  }
}

function removeFromCart(item){
  if (cart.length){
    for (var i = 0, l = cart.length; i < l; i++){
      if (cart[i].hasOwnProperty(item)){
        cart.splice(i, 1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  console.log("We don't have a credit card on file for you to place your order.")
  cart.splice(0)
}

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
