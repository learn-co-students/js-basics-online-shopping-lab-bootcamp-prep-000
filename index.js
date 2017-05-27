

/*for (var mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
}*/
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

function getCart(){
  return cart
}

function addToCart(item){
  var cartItem = {}
  cartItem.itemName = item
  cartItem.itemPrice = Math.random
  cart.push({itemPrice})
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      console.log(`In your cart, you have ${cart.itemPrice[i]} at ${cart.itemPrice[i]}.`);
    }
    } else {
      console.log("Your shopping cart is empty.");
  }
}

function placeOrder(cardNumber){
  if (cardNumber === ""){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
