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
  var price = (Math.floor(Math.random() * 100) + 1)
  var cart = getCart()
  var itemObj = {};
  console.log("The price was set to " + price);
  itemObj[item] = price
  console.log(itemObj[item])
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`);
  setCart(cart)
  return cart
}

function viewCart(){
  var cart = getCart()
  var outString = 'In your cart, you have '
  if (cart.length > 0) {
      for(var i = 0; i < cart.length; i++){
        for ( var itemName in cart[i]){
            var j = i + 1
            if (cart[j] === undefined){
              outString  += `${itemName} at $${cart[i][itemName]}.`
            } else {
              outString += `${itemName} at $${cart[i][itemName]}, `
            } //end inner if
        } // end inner for
      } // end outer for
      console.log(outString);
    } else {
              console.log("Your shopping cart is empty.");
            } //end outer if
} //end viewCart

function removeFromCart(item){
  var isInCart = false;
  for (var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item)){
        var isInCart = true;
        cart.splice(i, 1)
        //delete cart[i][item];
      }
  }
  if (isInCart){
    return cart
  } else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(ccNumber){
  if (ccNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart = [];
  }
}
