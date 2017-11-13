var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push(new Object({[itemName] : Math.floor(Math.random()*100)}))
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}

function viewCart() {
    var preface = "In your cart, you have"
    if(cart.length < 1){
      console.log(`Your shopping cart is empty.`)
    }else if(cart.length === 1){
      console.log(`${preface} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
    }else if(cart.length === 2){
      let listArray = [];
      for(let i=0; i < cart.length; i++){
        listArray.push(Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])])
      }
      console.log(`${preface} ${listArray[0]} and ${listArray[1]}.`)
    }else if(cart.length > 2){
      var listArray =[];
      for(let i = 0; i < cart.length - 1; i++){
        var itemName = Object.keys(cart[i])
        var itemPrice = cart[i][Object.keys(cart[i])]
        
        listArray.push(` ${itemName} at $${itemPrice}`)
      }
      let final = cart.length - 1;
      listArray.push(` and ${Object.keys(cart[final])} at $${cart[final][Object.keys(cart[final])]}.`)
      console.log(`${preface}${listArray}`)
    }
}

function total() {
  var costArray = [];
  for(let i=0; i < cart.length; i++){
    costArray.push(cart[i][Object.keys(cart[i])])
  }
  var sum = costArray.reduce((a, b) => a + b, 0)
  return sum
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
      }
  }
  console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}



