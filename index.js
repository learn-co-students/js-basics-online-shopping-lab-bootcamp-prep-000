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
    cart.push({[item]: Math.floor(Math.random()*100)})
    console.log(item + " has been added to your cart.")
    return cart
 }

function viewCart() {
  // write your code here
    var cartlist = ""
    if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length ===1) {
        let itemName = Object.keys(getCart()[cart.length-1])[0]
        let itemPrice = getCart()[cart.length-1][itemName]
        cartlist = cartlist + " " + itemName + " at $" + itemPrice + "."
  } else if (cart.length ===2) {
        let itemName = Object.keys(getCart()[cart.length-2])[0]
        let itemPrice = getCart()[cart.length-2][itemName]
        cartlist = cartlist + " " + itemName + " at $" + itemPrice + " and"
        let itemName1 = Object.keys(getCart()[cart.length-1])[0]
        let itemPrice1 = getCart()[cart.length-1][itemName1]
        cartlist = cartlist + " " + itemName1 + " at $" + itemPrice1 + "."
  } else {
      for (var i=0; i<cart.length-2; i++) {
      let itemName = Object.keys(getCart()[i])[0]
      let itemPrice = getCart()[i][itemName]
      cartlist = cartlist + " " + itemName + " at $" + itemPrice + ","
      }
      let itemName = Object.keys(getCart()[cart.length-2])[0]
      let itemPrice = getCart()[cart.length-2][itemName]
      cartlist = cartlist + " " + itemName + " at $" + itemPrice + ", and"
      let itemName1 = Object.keys(getCart()[cart.length-1])[0]
      let itemPrice1 = getCart()[cart.length-1][itemName1]
      cartlist = cartlist + " " + itemName1 + " at $" + itemPrice1 + "."
  }
    console.log("In your cart, you have" + cartlist)
}

function total() {
  // write your code here
  var count = 0;
  for (var i=0; i<cart.length; i++) {
    let itemName = Object.keys(getCart()[i])[0]
    let itemPrice = getCart()[i][itemName]
    count = count + itemPrice
      }
  return count
}

function removeFromCart(item) {
  // write your code here
  var check = ""
  for (var i=0; i<cart.length; i++) {
    let itemName = Object.keys(getCart()[i])[0]
      if (itemName === item) {
        check = "Yes"
        cart.splice(i,1)
        console.log(cart)
        }
    }
    if (check != "Yes") {
      console.log("That item is not in your cart.")
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber==null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
    cart = []
    return cart
  }
}
