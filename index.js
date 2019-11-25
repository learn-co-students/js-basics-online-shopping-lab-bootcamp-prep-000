var cart = [];

function setCart(newCart) {
  cart = newCart;
 -15,3 +15,36  function total() {

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push(`${item}: ${price}`)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  }else {
    var new_cart = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
       new_cart += `${item} at $${cart[i][item]}`

      if (i === cart.length -1){
        new_cart += ".";
      }else {
        new_cart += ", ";
      }
    }
  }
  console.log(new_cart)

}