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

function getCart(){
  return cart
}

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var cartLen = cart.length
  var inven = "In your cart, you have "
  if (cartLen === 0){
     console.log("Your shopping cart is empty.")
  }else{
    for (var i = 0; i < cartLen; i++){
      for (var price in cart[i]){
        if (i < cartLen - 1){
          inven += `${price} at $${cart[i][price]}, `
        }else{
          inven += `${price} at $${cart[i][price]}.`
        }
      }
    }
  }
  console.log(inven)
}

 function removeFromCart(item){
    for(var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,1)
        return cart
      }
    }
     console.log("That item is not in your cart.");
     return cart
  }

function placeOrder(number){
  if (!number){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    cart.length = 0
  }
}
