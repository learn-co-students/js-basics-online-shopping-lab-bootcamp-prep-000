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
  var itemPrice = []
  var cartItem = {}
  
  itemPrice = Math.floor(Math.random()*100)
  cartItem[item] = itemPrice
  cart.push(cartItem)
  
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var text = "In your cart, you have"
  var listOfText = []
  var listOfName=[]
  var listOfPrice=[]
  
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  }
  
  else {
    for (var i =0; i<cart.length; i++) {
      listOfName[i]=Object.keys(cart[i])
      listOfPrice[i]=Object.values(cart[i])
    }
    
      if (cart.length===1) {
        listOfText.push(` ${listOfName} at $${listOfPrice}.`)
      }
      
      else if (cart.length===2) {
        listOfText.push(` ${listOfName[0]} at $${listOfPrice[0]} and ${listOfName[1]} at $${listOfPrice[1]}.`)
      }
      else {
            var listOfItem = []
            var itemAndPrice = []
            for (i =0; i<(cart.length-1); i++) {
              itemAndPrice[i] = `${listOfName[i]} at $${listOfPrice[i]}` 
              listOfItem = itemAndPrice.join(", ")
            }
        listOfText.push(` ${listOfItem}, and ${listOfName[cart.length-1]} at $${listOfPrice[cart.length-1]}.`)
      }
      
    console.log(text + listOfText)
  }
}

function total() {
  // write your code here
  var listOfPrice=[]
  var price = 0
  for (var i =0; i<cart.length; i++) {
    listOfPrice[i]=Object.values(cart[i])
    price = parseInt(price) + parseInt(listOfPrice[i])
  }
  return price
}

function removeFromCart(item) {
  // write your code here
  var trueOrFalse = false
  
  for (var i =0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)===false) {
       trueOrFalse = false
    }
    else {
      trueOrFalse = true
      var id = i
      break;
    }
  }
  
  if (trueOrFalse===false) {
       console.log("That item is not in your cart.")
  }
  else {
       cart.splice(id,1)
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else {
    var amount = total()
    console.log(`Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}