var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100)
 cart.push({[item]: price})
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  var cart=getCart()
  var keys=Object.keys(cart)
  if (cart.length < 1){
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    for (var item in cart[0]){
      if (cart[0].hasOwnProperty(item)){
        console.log("In your cart, you have " + item + " at $"+ cart[0][item] + ".")
      }
    }
  } else if (cart.length === 2){
    var str
    for (var item in cart[0]){
      if (cart[0].hasOwnProperty(item)){
        str="In your cart, you have " + item + " at $"+ cart[0][item]
      }
    }
    for (var item in cart[1]){
      if (cart[1].hasOwnProperty(item)){
        str += " and " + item + " at $" + cart[1][item] +"."
      }
    }
    console.log(str)
  } else {
    var str="In your cart, you have "
    for (var i=0; i<cart.length-1;i++){
      for (var item in cart[i]){
        if (cart[i].hasOwnProperty(item)){
          str+= item + " at $" + cart[i][item] + ", "
        }
      }
    }
    for (var item in cart[cart.length-1]){
      if (cart[cart.length-1].hasOwnProperty(item)){
        str+= "and " + item + " at $" + cart[cart.length-1][item] + "."
      }
    }
    console.log(str)

  }


}

function total() {
  let sum=0
  for (var i=0; i<cart.length;i++){
    for (var item in cart[i]){
      if (cart[i].hasOwnProperty(item)){
        sum+=parseInt(cart[i][item])
      }
    }
  }
  return sum
}

function removeFromCart(item) {
  var cart=getCart()
  for (var i=0; i<cart.length;i++){

      if (cart[i].hasOwnProperty(item)){
        var newCart = cart.splice(i,1)
          return newCart
      }

  }
  console.log("That item is not in your cart.");
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    var totalCost = total()
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  }
  setCart([])
}
