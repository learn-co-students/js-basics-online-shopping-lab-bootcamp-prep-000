var cart;

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
  var price = Math.random()
  price = price * 100
  price = Math.floor(price)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var itemList = 'In your cart, you have'
    for (var i = 0; i < cart.length; i++){
      for (var item in cart[i]){
        itemList += ` ${item} at $${cart[i][item]},`
      }
    }
    itemList = itemList.slice(0, -1)
    itemList += '.'
    console.log(itemList)
  }
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    for(var key in cart[i]){
      if(key === item){
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(card){
  if (card === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    cart = []
  }
}
