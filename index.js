var cart = [];

function randomInt() {
  return Math.floor(Math.random()*(100)+1);
}

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: randomInt()})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var food = []
  for(let k=0; k<cart.length; k++){
    food.push(Object.keys(cart[k]))
  }
  var price = []
  for(let j=0; j<cart.length;j++){
    price.push(cart[j][food[j]])
  }
  if(cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length == 1){
    console.log(`In your cart, you have ${food[0]} at $${price[0]}.`)
    }
  else if (cart.length == 2){
    console.log(`In your cart, you have ${food[0]} at $${price[0]} and ${food[1]} at $${price[1]}.`)
    }
  else {
    var answer = "In your cart, you have "
    for(let i=0;i<cart.length;i++){
      if (i<=cart.length-2){
        answer+=`${food[i]} at $${price[i]}, `
      }
      else{
        answer+=`and ${food[i]} at $${price[i]}.`
      }
    }
    console.log(answer)
  }
}

function total() {
  var total= 0
  for(let i=0; i<cart.length; i++){
    total+= cart[i][Object.keys(cart[i])]
  }
return total
}

function removeFromCart(item) {
  for(let i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      var removed = cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  }

function placeOrder(cardNumber) {
  if (cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

  }
