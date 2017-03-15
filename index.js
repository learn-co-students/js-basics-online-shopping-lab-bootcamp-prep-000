var cart = [ ];

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
  //var min = Math.ceil(0);
  //var max = Math.floor(100);
  //var price = Math.floor(Math.random() * (max - min + 1)) + min;
  var price = Math.floor(Math.random() * 100);

    cart.push({[item]: price});
    //console.log("cart", cart);

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  //console.log('in the function');
  var pairs = []

  if (cart.length > 0) {
    //console.log("In the if statement");
    for (var i = 0; i < cart.length; i++) {
      var cartObject = cart[i];

      for (var item in cartObject) {

        var item = item
        var price = cartObject[item]
        pairs.push(' '+item+' at $'+price);
      }

    }
    console.log(`In your cart, you have${pairs}.`);
  }
    else {
      //console.log("in the else statement")
      console.log("Your shopping cart is empty.");
    }

}

function removeFromCart(discardedItem) {

if (cart.length > 0) {
  for (var i = 0; i < cart.length; i++) {
    var cartObject = cart[i];

    for (var item in cartObject) {

      if (cartObject.hasOwnProperty(discardedItem)) {
        //console.log('has property', discardedItem)
        cart.splice(i,1);
        //delete cartObject.item;
      }
      else {
      console.log('That item is not in your cart.');
      }
    }
  }
}
else {console.log('That item is not in your cart.')} //would write 'cart is empty' instead
  return cart;

}

function placeOrder(cardNumber) {
  //var number = cardNumber.toString().length

  if (cardNumber === undefined) {
    //for (var i = 0; i < cart.length; i++)
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    var orderTotal = total();
    cart.length = 0
//}
    console.log(`Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`)
  }

  return cart
}
