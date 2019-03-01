var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.")
  }
  
  var newArray = [];
    for (var i = 0; i < cart.length; i++) {
      var keys = Object.keys(cart[i])[0];
      newArray.push(keys + " at $" + cart[i][keys])
    }
    
    var myString = "In your cart you have ";
    if (newArray.length === 1) {
      myString += newArray + "."
    } else if (newArray.length === 2) {
      myString += (newArray[0] + " and " + newArray[1] + ".")
    } else if (newArray.length > 2) {
      var lastElement = newArray.pop()
      var otherItem = newArray.join(", ")
      myString += (otherItem + ", and " + lastElement + ".")
    }
    console.log(myString)
}

function total() {
  var initial = 0;
  for (var i = 0; i < cart.length; i++) {
    initial += cart[i] [Object.keys(cart[i])]
  }
  return initial;
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) === item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
    console.log ("That item is not in your cart.")
    return cart;
  }
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}