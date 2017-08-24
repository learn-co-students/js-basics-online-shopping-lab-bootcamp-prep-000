if(cart.length === 0){
  console.log("Your shopping cart is empty.")
} else {
    var statement ="In your cart, you have "
    if(cart.length === 1){
    var item = Object.keys(cart[0])[0]
    var price = cart[0][item]
    statement = statement + `${item} at $${price}.`

  } else if(cart.length ===2){
      statement = statement + `${item} at $${price} and `
        item = Object.keys(cart[1])[0]
        price = cart[1][item]
        statement = statement + `${item} at $${price}.`

  } else {
      for(let i = 0; i<cart.length-1; i++){
        var item = Object.keys(cart[i])[0]
        var price = cart[i][item]
        statement = statement + `${item} at $${price}, `
      }
      var item = Object.keys(cart[cart.length-1])[0]
      var price = cart[cart.length-1][item]
      statement = statement + `and ${item} at $${price}.`
    }
    console.log(response)
 }
