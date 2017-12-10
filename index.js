var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 100) + 1


 var newitem = { [itemName]: itemPrice}
 cart.push(newitem)
 console.log(`${itemName} has been added to your cart.`)

return cart
}

function viewCart() {
  var l = cart.length
  if (cart == "") {
    console.log("Your shopping cart is empty.")
  }
  var newArr = []
  for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var item =   Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item]
    newArr.push(`${item} at $${price}`)
  }

switch(newArr.length) {
  case 1:
   break
  case 2:
   newArr = newArr.join(" and ")
   break
  default:
   newArr[l-1] = "and ".concat(newArr[l-1])
   newArr = newArr.join(", ")

}
console.log(`In your cart, you have ${newArr}.`)
}


function total() {
  var total = 0;

  for (var i = 0; i< cart.length ; i++) {
    var itemAndPrice = cart[i];
    var item =   Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item]
    total += price
  }
return total
}


function removeFromCart(item) {
  var itemInCart = false
  for (var i = 0 ; i<cart.length ; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart.splice(i , 1)
  }


  }
  if (itemInCart === false) {
    console.log("That item is not in your cart.")
  }

  return cart

}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }

  cart = ""
}
