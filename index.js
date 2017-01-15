var cart = [];

function getCart() {
  return cart;
}

function addToCart(item){
  var price = Math.random() * 100
  var roundedPrice = Math.floor(price)
  cart.push({[item]: roundedPrice})
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {

    var itemsAndPrices = [];

    for (var i in cart){
      var itemAndPrice = cart[i];
      for (var key in itemAndPrice){
        itemsAndPrices.push(key + " at $" + itemAndPrice[key])
      }
    }
    var cartItems = itemsAndPrices.join(", ");
    console.log("In your cart, you have " + cartItems + ".")
  }
}

function removeFromCart(itemNam)



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
