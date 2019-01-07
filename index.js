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
 var cost = Math.floor(Math.random() * (100 - 1)) + 1;
 cart.push({[item]: cost})
 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  var len = cart.length
  var str = ""

  if (len <= 0)
  {
    str = "Your shopping cart is empty.";
  }
  else {
    str = "In your cart, you have "

    for (var i = 0; i < len; i++)
    {
      var key = Object.keys(cart[i])[0];

      if (i > 0 && i == len-1)
      {
        if (i == 1) str += ' and '
        else str += ', and '
      }
      else if (i > 0)
      {
        str += ', '
      }
      str += `${key} at $${cart[i][key]}`
    }
    str += "."
  }

  console.log(str);
  // write your code here
}

function total() {
  // write your code here
  var len = cart.length
  var total = 0
  for (var i = 0; i < len; i++)
  {
    total += cart[i][Object.keys(cart[i])[0]]
  }
  return total
}

function removeFromCart(item) {
  var found = false;
  var newCart = [];

  for (var i = 0, len = cart.length; i < len && !found; i++)
  {
    var keyz = Object.keys(cart[i])[0];
    if (keyz === item)
    {
      cart.splice(i, 1);
      found = true;
    }
  }
  if (!found)
  {
    console.log("That item is not in your cart.");
  }

  //console.log(cart);

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === null || cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
