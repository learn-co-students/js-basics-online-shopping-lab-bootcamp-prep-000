var cart = [];
var itemNames =Object.keys(cart)
  var l = cart.length

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

function getCart() {
  return cart
}
function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item] : price})
  console.log (item + ' has been added to your cart.')
  return cart
}

function viewCart(){
  var l = cart.length

  if (l>0){
    var tempArray = [] //an empty array to store data
    for (let i = 0; i< l; i++) {
        var passedObject= cart[i] //takes the "object" (key and value) from cart array
        var item =Object.keys(passedObject) //extracts key from object
        var price =passedObject[item] //extracts value from object
        tempArray.push(` ${item} at $${price}`)
}
  return console.log(`In your cart, you have${tempArray}.`)
  }
  else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item){
  var oldCart = 0
   var l = cart.length

  for(let i=0; i<l; i++){
  if (cart[i].hasOwnProperty(item)) {
    cart= cart.slice(0,i).concat(cart.slice(i+1))
    oldCart= 1
    return cart
    }
  }
    if(oldCart=== 0){
    return console.log("That item is not in your cart.");
  }

}

function placeOrder(card){
  var present = card
  var nuTotal = 0
  var total= 0
   var l = cart.length
  if(present===undefined){
  console.log("We don't have a credit card on file for you to place your order.")
}
else {
  for (let i = 0; i< l; i++) {
        var passedObject= cart[i] //takes the "object" (key and value) from cart array
        var item =Object.keys(passedObject) //extracts key from object
        var price =passedObject[item] //extracts value from object

        nuTotal = total+price
        total=nuTotal
}

  console.log(`Your total cost is $${total}, which will be charged to the card ${card}.`)
  cart = []
}
}
