var cart = []

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
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var keyArray = []
  var valueArray = []
  var KeyValueArray = []
  if (getCart().length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    for (var i = 0; i < getCart().length; i++) {
      for (var key in getCart()[i]) {
        keyArray.push(Object.keys(getCart()[i]).join())
        valueArray.push(getCart()[i][keyArray[i]])
      }
    }
    for (var i = 0; i < keyArray.length; i++) {
      KeyValueArray.push(`${keyArray[i]} at $${valueArray[i]}`)
    }
  var KeyValueString = KeyValueArray.join(", ")
  console.log(`In your cart, you have ${KeyValueString}.`)
  }
}