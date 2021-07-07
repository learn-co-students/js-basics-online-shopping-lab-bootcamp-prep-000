var cart = [
  { itemName: "eggs", price: 6 },
  { itemName: "butter", price: 3 },
  { itemName: "avocado", price: 1 },
  { itemName: "tomato", price: 4},
]
function removeFromCart(item) {
  for(var i = 0; i < cart.length + 1; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(cart[i], 1)
      return cart;
    } else if(item !== cart[i][Object.keys(cart[0])[0]]) {
      return "That item is not in your cart."
    }
  }
}
console.log(removeFromCart("eggs"))
console.log(cart)
console.log(removeFromCart("tomato"))
console.log(cart)
console.log(removeFromCart("butter"))
console.log(cart)
