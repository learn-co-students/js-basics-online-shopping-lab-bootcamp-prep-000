var cart = [
  { item: "eggs", price: 6 },
  { item: "butter", price: 3 },
  { item: "avocado", price: 1 }
]

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(item === cart[i][Object.keys(cart[0])[0]]) {
      cart.splice(cart[i], 1)
      return cart;
    } else if(item !== cart[i][Object.keys(cart[0])[0]]) {
      return "That item is not in your cart."
    }
  }
}
 console.log(removeFromCart("eggs"))
