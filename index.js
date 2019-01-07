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
 cart.push(Object.assign({},{[item]: Math.floor(Math.random() * 99 + 1)}))
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var size = cart.length
  var items = []
  var i = 0
  var count = 0
  var price = []
  var temp = []

  if(size == 0){
    console.log("Your shopping cart is empty.")
  }else{
    for(i;i < size; ++i){
      items.push(Object.keys(cart[i])[0])
      price.push(cart[i][Object.keys(cart[i])[0]])
      temp.push(`${items[i]} at $${price[i]}`)
      ++count
    }
  }
  switch(count){
    case 1:
      return console.log(`In your cart, you have ${temp[0]}.`)
      break;
    case 2:
      return console.log(`In your cart, you have ${temp[0]} and ${temp[1]}.`)
      break;
    default:
      return console.log(`In your cart, you have ${temp.slice(0,-1).join(', ')}, and ${temp.slice(-1)}.`)

  }
}

function total() {
  // write your code here
  var ans = 0
  var i   = 0
  var temp= new Object();

  for(i; i < cart.length; ++i){
    temp = cart[i]
    ans += temp[Object.keys(temp)[0]]
  }
  console.log(ans)
  return ans
}

function removeFromCart(item) {
  // write your code here
  var i = 0
  var size = cart.length
  for(i = 0; i < size; ++i){
    if (cart[i].hasOwnProperty(item)){
      return cart.splice(i,1)
    }
  }
  return console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  var temp = total()
  if(typeof cardNumber !== 'undefined'){
    console.log(`Your total cost is $${temp}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
