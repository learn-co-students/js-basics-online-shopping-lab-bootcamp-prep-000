var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random()*100)
  var itemObject = new Object();
  itemObject[item] = randomPrice

  getCart().push(itemObject)

  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart(){
  if (getCart().length === 0){
    console.log("Your shopping cart is empty.")
    return}
  else if (getCart().length === 1){
    var itemOne = getCart()[0]
    var keyOne = Object.keys(itemOne)[0]
    var priceOne = itemOne[keyOne]
    return console.log(`In your cart, you have ${keyOne} at $${priceOne}.`)

  }
  else if (getCart().length === 2){
    var itemOne = getCart()[0]
    var keyOne = Object.keys(itemOne)[0]
    var priceOne = itemOne[keyOne]
    var itemTwo = getCart()[1]
    var keyTwo = Object.keys(itemTwo)[0]
    var priceTwo = itemTwo[keyTwo]
    return console.log(`In your cart, you have ${keyOne} at $${priceOne} and ${keyTwo} at $${priceTwo}.`)
  }
  var returnString = `In your cart, you have `
  for (let i = 0; i < getCart().length; i++){
    var currentItem = getCart()[i]
    var currentKey = Object.keys(currentItem)[0]
    var currentPrice = currentItem[currentKey]
    if (i === cart.length - 1){
      returnString += `and ${currentKey} at $${currentPrice}.`
    }
    else {
      returnString += `${currentKey} at $${currentPrice}, `
    }
  }
  return console.log(returnString)
}

function total() {
  var totalCounter = 0
  for (let i = 0; i < cart.length; i++){
    var entireItem = getCart()[i]
    var itemName = Object.keys(entireItem)[0]
    var itemPrice = entireItem[itemName]
    totalCounter += parseInt(itemPrice)
  }
  return totalCounter
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    var currentItem = cart[i]
    var itemName = Object.keys(currentItem)[0]
    if (itemName === item){
      cart.splice(i,1)
      return getCart()
    }
  }
  console.log("That item is not in your cart.")
  return getCart()

}

function placeOrder(cardNumber) {
  if (Number.isInteger(cardNumber)){
    var cartTotal = total()
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    setCart([])
    return
  }
  console.log('Sorry, we don\'t have a credit card on file for you.')
  return
}
