var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }
  var cartObject = {[item]: getRandomInt()}
    console.log(`${item} has been added to your cart.`)
      cart.push(cartObject)
        return cart;
}

function viewCart() {
  var readyToInsert = []
  function getStuff(){

      for (var i = 0; i < cart.length; i++) {
        var key = Object.keys(cart[i])[0];
        var price = cart[i][key];
        readyToInsert.push(`${key} at $${price}`)
      }
      return readyToInsert;
  }
  getStuff()
    if (cart.length===0){
      console.log("Your shopping cart is empty.");
    }
    else if (cart.length === 1){
      console.log( `In your cart, you have ${readyToInsert}.`)
    }else if (cart.length === 2){
      console.log(`In your cart, you have ${readyToInsert[0]} and ${readyToInsert[1]}.`)
    }else {
// we need to change last value of readyToInsert to include an and at beginning of its value.
      readyToInsert[readyToInsert.length-1] = `and ${readyToInsert[readyToInsert.length-1]}`

        console.log(`In your cart, you have ${readyToInsert.join(', ')}.`)
      }
    }

function total() {
var subTotal = 0
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    var price = cart[i][key];
    subTotal = subTotal +price;
  }
  return subTotal;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item)=== true ){
        cart.splice(i,1)
return cart
      }
  }
      console.log("That item is not in your cart.");
      return cart
      }


function placeOrder(cardNumber) {
  if (Number.isInteger(cardNumber)===true){
    var totalCost = total()
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
cart = []
  }else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
