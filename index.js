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
 var newItem = {[item] : Math.floor(Math.random(1,100)*100+1)}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(!cart.length){
    console.log("Your shopping cart is empty.")
    return cart
  }
  
  var itemList = "In your cart, you have "
  
  for(let x = 0; x < cart.length; x++){
  itemList += (`${Object.keys(cart[x])} at \$${cart[x][Object.keys(cart[x])]}`)
 
  if(cart.length == 1 || x == cart.length - 1)
    itemList += "."
    else if(cart.length == 2)
     itemList += " and "
     else if (x == cart.length - 2)
     itemList += ", and "
      else itemList += ", "
  }
  console.log(itemList)
  
}

function total() {
  // write your code here
  var total = 0
  for (let x = 0 ; x < cart.length;x++){
   total += cart[x][Object.keys(cart[x])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for ( let x = 0 ; x < cart.length ; x++){
    if(cart[x].hasOwnProperty(item))
    {
      cart.splice(x,1)
      return cart
    }
  }
    console.log("That item is not in your cart.")
    return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
    console.log("Sorry, we don't have a credit card on file for you.")
  
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  
  do{
    cart.pop()
  }while(cart.length)
  console.log(cart)
}

