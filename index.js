var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {};
  var price = Math.floor(Math.random() * 100);
  itemObj["itemName"] = item
  itemObj["itemPrice"] = price
  cart.push(itemObj);
  return `${item} has been added to your cart.`
}

function viewCart() {
 if (cart.length === 0) {
   return `Your shopping cart is empty.`
 } else if (cart.length === 1) {
   return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
 } else if (cart.length === 2) {
   return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.`
 } else {
   var array = []
   for (let i = 0; cart.length > i; i++) {
      array.push(` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
   }
   var listTwo = array.slice(array.length - 1)
   var listOne = array.slice(0, array.length - 1)
   return `In your cart, you have${listOne}, and${listTwo}.`
 }
}

function total() {
  var sum = 0
  for (let i = 0; cart.length > i; i++) {
    sum = sum + parseInt(cart[i]["itemPrice"])
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; cart.length > i; i++) {
    if (cart[i]["itemName"] === item) {
      cart.splice(i, 1);
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    //console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
    const yourTotal = total()
    cart = []
    return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`
  }
}
