var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  var emptyArray = []
  var intro = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
        var item = Object.keys(cart[i])

          emptyArray.push(item + ' at $' + cart[i][item]);

  } console.log(intro + emptyArray.join(", ") + ".")

}


function removeFromCart(item){
  var itemHere = false
  for(let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      itemHere = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if(!itemHere) {
    console.log( "That item is not in your cart.")
  }
  return cart

}

function placeOrder(cardNumber){


    if (cardNumber) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    } else {
      console.log("We don't have a credit card on file for you to place your order.")
    }

    cart.length = 0

  //  var message = []
    //var total = "Your total cost is "

  //  console.log(total + price )
}
