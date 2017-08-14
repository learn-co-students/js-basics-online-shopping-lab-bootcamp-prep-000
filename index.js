var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {//use item as parameter
 var price = Math.floor(Math.random() * 100) + 1 //set my price to equal a randomy generated number and push that to item
 var itemObject = {}// create my new object that will consist
 itemObject[item] = price //assign price
 cart.push(itemObject) //push to cart
 console.log(`${item} has been added to your cart.`) //print the needed statement using console.log
 return cart //return cart
}

function viewCart() {
  if (cart.length === 0){
  console.log('Your shopping cart is empty.')
  } else {
    var itemsAndPrices = []
    for(let i = 0; i < cart.length; i++){
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)
      var price = itemAndPrice[item]
      itemsAndPrices.push(`${item} at $${price}`)
    } if (cart.length === 1){
      console.log (`In your cart, you have ${itemsAndPrices}.`)
    }  else if(cart.length === 2){
      console.log(`In your cart, you have ${itemsAndPrices.join(" and ")}.`)
    } else if(cart.length > 2){
      console.log(`In your cart, you have ${itemsAndPrices.slice(0, -1).join(", ") + ", and " + itemsAndPrices.slice(-1)}.`)
      }
  }
}


function removeFromCart(item) {
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart.splice(i, 1)
    }
  }
  if (!itemInCart){
    console.log("That item is not in your cart.")
  }
  return cart
}

function total() {
  let t = 0
  for(var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      t += cart[i][item]
    }
  }
  return t
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
   console.log("Sorry, we don't have a credit card on file for you.");
 } else {
   console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
   cart = [];  // write your code here
 }
}
