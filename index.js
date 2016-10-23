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

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

//function addToCart(item){
//var price = Math.floor(Math.random() * 100)
//var grocery = {};
//grocery[item] = price;
  //cart.push(grocery)
  //console.log(item + "has been added to your cart")
//return cart
//}
function viewCart(){
  if (cart.length === 0){
  console.log("Your shopping cart is empty.")
} else {
   var itemsandprices = []
  for (let i = 0; i < cart.length; i++){
var itemobject = cart[i]
    var key = Object.keys(itemobject)[0] //  {pizza: $49} ["pizza"][0] "pizza"
  var price = itemobject[key]
    itemsandprices.push(` ${key} at $${price}`) // [" pizza at $49"]
}
  console.log(`In your cart, you have${itemsandprices}.`)
}
}

function removeFromCart(item){
  var foundit = false
  for (let  i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0]
    if (key === item){
     foundit = true
    cart.splice(i)
    return cart
  }
}

  if (foundit === false) {
        console.log("That item is not in your cart.")
      }
    }

function placeOrder(cardNumber){
  if (cardNumber === undefined){
  console.log("We don't have a credit card on file for you to place your order.")
} else {
  debugger;

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`)
}
cart = []
return cart
}
