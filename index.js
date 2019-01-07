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
}

function viewCart() {
  // write your code here
}

function getCart(){
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

//need to remember to wrap key in brackets
  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart(){
  const l = cart.length

  if(!l){
    return console.log("Your shopping cart is empty.")
  }

  var itemsAndPrices = []

  for(let i=0;i<l;i++){
    let itemObj = cart[i]
    let item = Object.keys(itemObj)[0]
    //remember price is value while itemName is key item:price
    let price = itemObj[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(itemName){
  let itemInCart = false

  for(let i=0,l=cart.length;i<l;i++){
    if(cart[i].hasOwnProperty(itemName)){
      itemInCart = true
      //slice up to where i is, then skip i and join rest of cart
      cart = cart.slice(0,i).concat(cart.slice(i+1))
    }
  }

  if(!itemInCart){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber){
  if(!cardNumber){
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
