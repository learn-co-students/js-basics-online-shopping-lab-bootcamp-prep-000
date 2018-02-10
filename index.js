var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  
  var price = Math.floor(Math.random() * 100)
  var item = new Object({[itemName]: price})
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  var text = "In your cart, you have "
  if(cart.length > 0) {
    for(var i = 0; i < cart.length; i++) {
      if(cart.length > 1) {
        text += `${Object.keys(cart[i])[0]} at ${cart[i][Object.keys  (cart[i])[0]]}`
         
          if(i == cart.length -1) {
           text += "."
           break;
         }
       text += " and "
     }
    text += " and "
   }else {
     console.log("Your shopping cart is empty.")
    }
   console.log(text)
  }
 }


function total() {
  // write your code here
  var total = 0
  for(var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
   for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
        delete cart[i][item]
        cart.splice(i, 1)
        cart
        return cart
        break;
      } else if(i == cart.length -1) {
      console.log('That item is not in your cart.')
      return cart
    } 
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber != null) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}


function viewCart() {
  var text = "In your cart, you have "
  if(cart.length > 0) {
      for(var i = 0; i < cart.length; i++) {
        if(cart.length > 1) {
          text += `${Object.keys(cart[i])[0]} at ${cart[i][Object.keys  (cart[i])[0]]}`
          if(i == cart.length -1) {
           text += "."
           break;
         } 
         text += " and "
        } else{
          text += `${Object.keys(cart[i])[0]} at ${cart[i][Object.keys  (cart[i])[0]]}.`
          
        }
      }
    console.log(text)
  }else {
    console.log("Your shopping cart is empty.")
  }
 }


