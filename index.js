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
 cart.push({[item]:Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (!cart.length){
    console.log("Your shopping cart is empty.")
    return
  }
  var str = "In your cart, you have"
  if (cart.length==1) {
    console.log(`${str} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
    //${Object.values(cart[0])}.`
  }
  else if (cart.length==2) {
      console.log(`${str} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
      //${Object.values(cart)[1]}.`
  } else {
      var str2=""
      for (var i=0;i<cart.length-1;i++){
        //str2+=
        //str2=`${str2}
        str2 += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
      }
      //str2=str2+
      //str2=`${str2}
      str2 += `and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
      console.log(`${str} ${str2}`)
  }

}

function total() {
  // write your code here
  var sum=0
  for (var i=0;i<cart.length;i++){
    sum+=cart[i][Object.keys(cart[i])]
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (var i=0;i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
  }
}
