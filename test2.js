function viewCart() {
  if(cart.length > 0) {
    var statement = `In your cart, you have `
    var array = []
    for (let i = 0; i < cart.length; i++){
      var itemName = Object.keys(cart[i])[0]
      var cost = cart[i][itemName]
      array[i] = itemName + " at $" + cost
      if(cart.length === 1) {
        console.log(`${statement}${array[0]}.`)
      }
      if(cart.length === 2) {
        console.log(`${statement}${array[0]} and ${array[1]}.`)
      }

    }
  } else {
    console.log("Your shopping cart is empty.")
  }
}
