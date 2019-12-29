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
    return `In your cart, you have ${getCart()[0]["itemName"]} at $${getCart()[0]["itemPrice"]}.` }
    else if (getCart().length === 2){
      return `In your cart, you have ${getCart()[0]["itemName"]} at $${getCart()[0]["itemPrice"]}, and ${getCart()[1]["itemName"]} at $${getCart()[1]["itemPrice"]}.`
    } else {
    var myString = "In your cart, you have "
    for (let i = 0; i < getCart().length - 1; i++) {
      myString = myString + `${getCart()[i]["itemName"]} at $${getCart()[i]["itemPrice"]}, `;
      // In your cart, you have itemName x at itemPrice y, +
    }
    return myString + `and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}.`
  }
}

function total() {
  // iterate over the array, add up the price values and return the sum
  let total = 0;
  for (let i = 0; i < getCart().length; i++) {
  total += getCart()[i].itemPrice;
   }
  return total;
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < getCart().length; i++){
    if (getCart()[i].itemName === item){
      getCart().splice (i, 1)
      return getCart()
  }
}
   return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (typeof cardNumber == `undefined`) {
    return `Sorry, we don't have a credit card on file for you.`}
  else {
    let totalTwo = total();
    cart = [ ];
    return (`Your total cost is $${totalTwo}, which will be charged to the card ${cardNumber}.`)
  }

  // write your code here
}
