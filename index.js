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
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }else{
    var str = [];
    for (var i = 0; i < cart.length; i++) {
        var itemObject = cart[i]
        var item = Object.keys(itemObject)[0]
        var price = itemObject[item]
        str.push(`${item} at $${price}`)
      }
      var new_str = str.join(", ");
      console.log(`In your cart, you have ${new_str}.`)
}
}

function removeFromCart(name){
  var foundIt = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
       cart.splice(i, 1)
       foundIt = true
    }
  }
    if (foundit === false){
    console.log("That item is not in your cart.");
  }
  return cart;
}
