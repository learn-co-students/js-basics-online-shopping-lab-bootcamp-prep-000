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
  return cart;
}

function addToCart(item){
   var itemPrice = Math.floor(Math.random() * 10);
   cart.push({[item]:itemPrice});
   console.log(`${item} has been added to your cart.`);
   return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log ("Your shopping cart is empty.")
  }
  else {
      var print = "In your cart, you have "
        for (var i = 0; i < cart.length; i++) {
          var itemName = Object.keys(getCart()[i])
          var price = getCart()[i][itemName]

            if (i === cart.length - 1) {
                 print += `${itemName} at $${price}.`
              } else {
                  print += `${itemName} at $${price}, `
              }
        }
        console.log(print)
    }
}

function removeFromCart(itemName){
  for (var i = 0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i,1);
      return cart;
    }
  }
    console.log("That item is not in your cart.");
}

function placeOrder(ccNumber){
  if (!ccNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart.splice(0,cart.length);
    return cart
  }
}