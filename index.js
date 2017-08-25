var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// 1. DONE
function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 101)
  var newItem = {[itemName] : itemPrice}
  cart.push(newItem)
  console.log(itemName + " has been added to your cart.")
  return cart
}
//Quest 2:  ViewCart
function viewCart() {
  if (cart.length === 0) {  //this is when the cart is empty
    console.log("Your shopping cart is empty.")
  }
  if (cart.length === 1) { // this is when the cart has one item. example cart = [{lemons: 5}]
  var cartObject = cart[0]  //the item object I'm working with
  var cartKey = Object.keys(cartObject)[0]//the key of that item object.  lemons
  var keyValue = cartObject[cartKey]//the value of that item object.  price
  console.log("In your cart, you have " +  cartKey  + " at $" + keyValue + ".") //in your cart you have lemons at $5.
}
if (cart.length === 2 ) {  //this is when the cart has two items
  var cartObject = cart[0]  //the item object I'm working with
  var cartKey = Object.keys(cartObject)[0]//the key of that item object.  lemons
  var keyValue = cartObject[cartKey]//the value of that item object.  price
  var cartObject1 = cart[1]  //the item object I'm working with
  var cartKey1 = Object.keys(cartObject1)[0]//the key of that item object.  lemons
  var keyValue1 = cartObject1[cartKey1]//the value of that item object.  price
  console.log("In your cart, you have " +  cartKey  + " at $" + keyValue + " and " + cartKey1 + " at $" + keyValue1 + ".")
}

var array = []
if (cart.length >=3) {  //what it needs to say at the end 3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  for (var i = 0; i < cart.length; i++) {
    var cartKey2 = Object.keys(cart[i])[0]
    var keyValue2 = cart[i][cartKey2]
    array.push(cartKey2 + " at $" + keyValue2)
  }
  array[array.length - 1] = "and " + array[array.length - 1]
  console.log("In your cart, you have " + array.join(", ") + ".")
}
}
//Done getting total
function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var cartKey = Object.keys(item)[0] //fruits
    total += item[cartKey]
  }
  return total;
}

//removeFromCart done
function removeFromCart(name) {
  var itemFound = false
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var cartKey = Object.keys(item)[0] //fruits
    if (name === cartKey) {  //if the name of the fruit equals the cartkey
      cart.splice(i,1) //splice to remove the found item.
      return cart;
    }
  }
  console.log("That item is not in your cart.") //has to be out of the loop
  return cart; //has to be out of the loop
}

//note whether to put code inside or outside the loop
function placeOrder(cardNumber) {
  if (cardNumber == null) {
  console.log("Sorry, we don't have a credit card on file for you.")
}
 console.log("Your total cost is " + "$" + total()  + ", which will be charged to the card " + cardNumber + ".")
 cart.length = 0
}
