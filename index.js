var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {
   [item]: Math.floor(Math.random() * 100) + 1
 }
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
 if(cart.length === 0){
   console.log('Your shopping cart is empty.') 
 } else if (cart.length === 1){
   for(let i = 0; i<cart.length; i++){
    let object = cart[i]
    let value = Object.values(object)
    let trueValue = value[0]
    let key = Object.keys(object)
    let trueKey = key[0]
   console.log(`In your cart, you have ${trueKey} at $${trueValue}.`)
 }
} else if(cart.length === 2){
  let valueArray =[]
  let keyArray =[]
    for(let i = 0; i<cart.length; i++){
   let object = cart[i]
    let value = Object.values(object)
    let trueValue = value[0]
    let key = Object.keys(object)
    let trueKey = key[0]
    valueArray.push(trueValue)
    keyArray.push(trueKey)
  } let item1 = keyArray[0]
  let item2 = keyArray[1]
  let price1 = valueArray[0]
  let price2 = valueArray[1]
  console.log(`In your cart, you have ${item1} at $${price1} and ${item2} at $${price2}.`)
} else if(cart.length ===3){
  let valueArray =[]
  let keyArray =[]
    for(let i = 0; i<cart.length; i++){
   let object = cart[i]
    let value = Object.values(object)
    let trueValue = value[0]
    let key = Object.keys(object)
    let trueKey = key[0]
    valueArray.push(trueValue)
    keyArray.push(trueKey)
  } let item1 = keyArray[0]
  let item2 = keyArray[1]
  let item3 = keyArray[2]
  let price1 = valueArray[0]
  let price2 = valueArray[1]
  let price3 = valueArray[2]
  console.log(`In your cart, you have ${item1} at $${price1}, ${item2} at $${price2}, and ${item3} at $${price3}.`)
} else if(cart.length ===4){
  let valueArray =[]
  let keyArray =[]
    for(let i = 0; i<cart.length; i++){
   let object = cart[i]
    let value = Object.values(object)
    let trueValue = value[0]
    let key = Object.keys(object)
    let trueKey = key[0]
    valueArray.push(trueValue)
    keyArray.push(trueKey)
  } let item1 = keyArray[0]
  let item2 = keyArray[1]
  let item3 = keyArray[2]
  let item4 = keyArray[3]
  let price1 = valueArray[0]
  let price2 = valueArray[1]
  let price3 = valueArray[2]
  let price4 = valueArray[3]
  console.log(`In your cart, you have ${item1} at $${price1}, ${item2} at $${price2}, ${item3} at $${price3}, and ${item4} at $${price4}.`)
} 
}

function total() {
  let total = 0;
for(let i = 0; i<cart.length; i++){
    let object = cart[i]
    let value = Object.values(object)
    let totalString = parseInt(value)
    total = total + totalString
} return total
}

function removeFromCart(item) {
  let total = 0
  for(let i = 0; i<cart.length; i++){
    let object = cart[i]
    if(object.hasOwnProperty(item)){
      cart.splice(i, 1)
    } else {
      total = total ++
    } 
} if(total === cart.length){
  console.log(`That item is not in your cart.`)
} else {
  return cart;
}
}

function placeOrder(cardNumber) {
  let numberPresent = cardNumber
  let totalPrice = total()
  if(!numberPresent){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${numberPresent}.`)
    cart = []
  }
}
