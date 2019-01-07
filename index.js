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
 var object = {};
 object[item] = Math.floor(Math.random() * 100);
 cart.push(object);
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var printOut = "In your cart, you have"

  if (cart.length > 0 ) {
    for (var i = 0;i < cart.length;i++)
    {
      var myitemListing = cart[i]
      var itemName = Object.keys(cart[i])[0]
      var price = myitemListing[itemName]
      if (i===0){
        printOut += ` ${itemName} at $${price}`
      }
      else
      {
        if (cart.length===2) {
          printOut += ` and ${itemName} at $${price}`
        }
        else {
          if (i===cart.length - 1) {
            printOut += `, and ${itemName} at $${price}`
          }
          else
          {
            printOut += `, ${itemName} at $${price}`
          }
        }
      }
    }
    printOut += "."
    console.log(printOut)
  }
  else
  {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0;i < cart.length;i++) {
      var myitemListing = cart[i]
      var itemName = Object.keys(cart[i])[0]
      var price = myitemListing[itemName]
      totalPrice += parseInt(price)
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var boolFound = 0
  var postion = 0
  for (var i = 0;i < cart.length;i++) {
      if (cart[i].hasOwnProperty(item)) {
        boolFound = 1
        postion = i
      }
  }
  if (boolFound===0){
    console.log("That item is not in your cart.")
  }
  else
  {
    cart.splice(postion,1)
  }
  return cart
  
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")  
  }
  else
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
