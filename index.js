var cart = new Array();

function getCart(){
  return cart;
}

function addToCart(item4Purchase){
  var randomPrice = Math.random() * 100;
  randomPrice = Math.floor(randomPrice);
  var newObject = new Object();
  newObject[item4Purchase] = randomPrice;
  cart.push(newObject);
  console.log(`${item4Purchase} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart[0] === undefined){
    return console.log("Your shopping cart is empty.")
  }
  else{
    var l = cart.length;
    var totalOutput = `In your cart, you have `
    for (var i = 0; i < l; i++){
      var keyVar = Object.keys(cart[i]);
      if (i != l - 1){
      totalOutput += `${keyVar} at \$${cart[i][keyVar]}, `;
      }
      else{
        totalOutput += `${keyVar} at \$${cart[i][keyVar]}.`;
      }
    }
  }
  return console.log(totalOutput);
}

function removeFromCart(item4Removal){
  var l = cart.length;
  for (var i = 0; i < l; i++){
    if (cart[i].hasOwnProperty(item4Removal)){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(ccNumber){
  if (ccNumber === undefined){
    return console.log("We don't have a credit card on file for you to place your order.");
  }
  var l = cart.length;
  var totalPrice = 0;
  for (var i = 0; i < l; i++){
    var keyVar = Object.keys(cart[i]);
    totalPrice += cart[i][keyVar];
  }
  console.log(`Your total cost is \$${totalPrice}, which will be charged to the card ${ccNumber}.`)
  // now we have to empty the cart array
  for (i = 0; i < l; i++){
    cart.shift();
  }
  return cart;
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
