var cart = [];

function getCart()
{
 return cart;
}

function setCart(c)
{
  cart = c;
  return cart;
}

function addToCart(itemName)
{
  var itemPrice= Math.floor(Math.random() * 100 + 1)
  var itemForCart= {[itemName]:itemPrice}
  cart.push(itemForCart)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var answerArray = []
  for(let i= 0;i<cart.length;i++) {
    var itemAndPrice= cart[i]
    var name= Object.keys(itemAndPrice)
    var price= itemAndPrice[name]
    answerArray.push(`${name} at $${price}`)
  }

  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  } else if(cart.length=== 1) {
    console.log(`In your cart, you have ${answerArray[0]}.`)
  } else if(cart.length===2) {
    console.log(`In your cart, you have ${answerArray.join(' and ')}.`)
  } else {
    answerArray[answerArray.length-1]= `and ${answerArray[answerArray.length-1]}`
    console.log(`In your cart, you have ${answerArray.join(', ')}.`)
  }
}

function total() {
  var totalPrice= 0

  for(let i=0;i<cart.length;i++) {
    var itemAndPrice= cart[i]
    var name= Object.keys(itemAndPrice)
    var price= itemAndPrice[name]
    totalPrice+= price
  }
  return totalPrice
}

function removeFromCart(item) {
  for(let i= 0;i<cart.length;i++) {
    var itemAndPrice= cart[i]

    if(itemAndPrice.hasOwnProperty([item])) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var finalTotal= total()
  if(cardNumber>0) {
    console.log(`Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`)
    cart= []
  } else{
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
}
