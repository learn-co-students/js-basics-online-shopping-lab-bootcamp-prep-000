var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
  // console.log(itemObj);
  cart.push(itemObj);
  return itemObj.itemName + " has been added to your cart."

  }

function viewCart() {
  if (getCart().length === 0){
    // why can't i use console.log() here? when is it appropriate to use console.log?
    return "Your shopping cart is empty."
  } else if (getCart().length === 1) {
    return `In your cart, you have ${getCart()[0]["itemName"]} at $${getCart[0]["itemPrice"]}.` }
    else if (getCart().length === 2){
      return `In your cart, you have ${getCart[0]["itemName"]} at $${getCart[0]["itemPrice"]}, and
      ${getCart[1]["itemName"]} at $${getCart[1]["itemPrice"]}.`
    } else {
    var myString = "In your cart, you have "
    for (var i = 0; i < getCart().length - 1; i++) {
      myString = myString + `${getCart()[i]["itemName"]} at $${getCart()[i]["itemPrice"]}, `
    }
    return myString + `and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}.`
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < getCart().length - 1; i++) {
    total = getCart()[i].itemPrice + getcart()[i].itemPrice
  }
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
