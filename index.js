var cart = [];
var cartarr = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message = 'In your cart, you have'
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    for (let i = 0; i < cart.length; i++){
      var item_name= Object.keys(cart[i])
      /*message += ` ${item_name} at $${Object.values(cart[i])}`
      *can't use object.values yet because this module can't do it yet */
      message += ` ${item_name} at $${cart[i][item_name]}`
      if ((i+1) < cart.length){
        if (cart.length ===2) {
          message += ' and'
        }
        else if ( i === (cart.length-2)) {
          message += ', and'
        }
        else {
          message += ','
        }
      }
      else{
        message += '.'
      }
    }
    console.log(message)
  }
  }

function total() {
  var total = 0
  for(let i = 0; i<cart.length ; i++){
    var item_name = Object.keys(cart[i])
    var price = parseInt(cart[i][item_name])
    total += price
  }
  return total
}

function removeFromCart(item) {
  for (let i = 0; i< cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
            return cart;
    }
    }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return cart = []
  }
}
