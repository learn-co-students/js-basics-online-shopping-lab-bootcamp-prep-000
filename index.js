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
  const price = Math.floor(Math.random() * 100)
  var tempcart = new Object({[item] : price})
  cart.push(tempcart)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  var returnTxt = "";
  if(cart.length < 1){
    returnTxt = "Your shopping cart is empty."
  }
  else{
    let itemName = Object.keys(cart[0])[0];
    let itemPrice = cart[0][itemName];
    returnTxt = `In your cart, you have` // ${itemName} at $${itemPrice}`

    for(let i=0; i<cart.length; i++){
      if(i >= 1 && cart.length > 2){
        returnTxt += ","
      }
      if(i == cart.length-1 && cart.length > 1){
        returnTxt += " and"
      }
      itemName = Object.keys(cart[i]);
      itemPrice = cart[i][itemName];
      returnTxt += ` ${itemName} at $${itemPrice}`
    }
    returnTxt = returnTxt + "."
  }
  console.log(returnTxt)
}

function total() {
  // write your code here
  var tempTot = 0
  if(cart.length > 0){
    for(let i=0; i< cart.length; i++){
      let itemName = Object.keys(cart[i]);
      let itemPrice = cart[i][itemName];
      tempTot += itemPrice
    }
  }
  console.log(tempTot)
  return tempTot
}

function removeFromCart(item) {
  // write your code here
  var tempTxt = ""
  var i = 0
  var founded = false
  tempTxt = "That item is not in your cart."
  while(i < cart.length && founded == false){
    let itemName = Object.keys(cart[i])
    console.log(`${itemName} - ${item}`)
    if(itemName == item){
      founded = true
      delete cart[i][item];
      cart.splice(i, 1);
      tempTxt = `${item} is removed.`
    }
    i = i + 1;
  }
  console.log(tempTxt);
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.")
    return "doesn't place the order if a credit card number is not provided"
  }
  else{
    const cartTotal = total();
    cart = [];
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
}
/*placeOrder()
placeOrder("123")

addToCart("a")
addToCart("b")
addToCart("c")
viewCart()
total()
removeFromCart("b")
console.log(cart)
removeFromCart("d")
console.log(cart)*/
