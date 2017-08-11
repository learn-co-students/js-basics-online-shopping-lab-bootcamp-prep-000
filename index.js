var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var currentItem = {[item]: Math.floor(Math.random() * (100 - 1) + 1)}
  cart.push(currentItem)
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  var currentCart =""
  var currentObject
  var currentItemName
  var currentItemPrice

  if(cart.length ===0)
  {
    currentCart = "Your shopping cart is empty."
  }
  else
  {
    currentCart = "In your cart, you have "
    for(var i = 0; i < cart.length; i++)
    {
      currentObject = cart[i]
      currentItemName = Object.keys(currentObject)[0]
      currentItemPrice = currentObject[currentItemName]

      if(cart.length === 1)
      {
        currentCart += `${currentItemName} at $${currentItemPrice}.`
      }
      else if (i === cart.length - 1)
      {
        currentCart += `and ${currentItemName} at $${currentItemPrice}.`
      }
      else
      {
        currentCart += `${currentItemName} at $${currentItemPrice}`
        if(cart.length !== 2)
        {
          currentCart += `, `
        }
        else {
          currentCart += ` `
        }
      }
    }
  }
  console.log(currentCart)
  return currentCart
}

function total() {
 var totalPrice = 0
 var currentObject
 var currentItemName
 var currentItemPrice
 for(var i = 0; i < cart.length; i++)
 {
   currentObject = cart[i]
   currentItemName = Object.keys(currentObject)[0]
   currentItemPrice = currentObject[currentItemName]
   totalPrice += currentItemPrice
 }

 return totalPrice
}

function removeFromCart(item) {

  var currentObject, currentItemName

  for(var i = 0; i < cart.length; i++)
  {
    currentObject = cart[i]
    currentItemName = Object.keys(currentObject)[0]
    if(item === currentItemName)
    {
      if( i === 0)
      {
        cart.shift()
        return cart
      }
      else if (i === cart.length - 1)
      {
        cart.pop()
        return cart
      }
      else
      {
        cart.splice(i,1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.");
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined)
  {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart =[]
  }
}

addToCart("bananas")
addToCart("cookies")


viewCart()

addToCart("chips")

viewCart()

removeFromCart("chips")

viewCart()
