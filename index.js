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

function getCart () {
  return cart;
};

function addToCart (item) {
  var price = Math.floor(Math.random()*10)

  var cartObj = {}; //Must create object first
  cartObj[item] = price; //and set key:value using brackets
                        //doing {item:price} in push will make the key "item"
                        //dunno why though...
  cart.push(cartObj)

  console.log(item + " has been added to your cart.")

  return cart;
};

function viewCart() {
  var initialString = "In your cart, you have"
  if (cart.length > 0){
    // each item string should start with a space and end with a comma
    for (var i in cart) { //iterates over objects in array
      for (var j in cart[i]){ //iterates over each key of an object
        var addString = ` ${j} at $${cart[i][j]},` //TA was asking about interpolation, and it sounds like i can fix this on my own. FIGURE THIS OUT!
        initialString += addString
      }
    };
  } else {
    console.log("Your shopping cart is empty.")
    return "Your shopping cart is empty."
  };

  var noComma = initialString.slice(0,initialString.length-1)
  console.log(noComma + ".")
  return noComma + ".";
};

function removeFromCart (item) {
  for (var i in cart){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    };
  }
  console.log("That item is not in your cart.");
};

function placeOrder (cardNumber = false) {
  if (! cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
};
