var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = (Math.floor(Math.random() * 100) +1);
  var itemObject = {};
  itemObject["itemName"] = item
  itemObject["itemPrice"] = price
  cart.push(itemObject)
  return (`${item} has been added to your cart.`)
}

function viewCart () {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var newarray = []
    for (var i = 0; i < cart.length; i++) {
      var keys = Object.keys(cart[i])[0] 
      var values = Object.keys(cart[i])[1]
      newarray.push(cart[i][keys] + " at $" + cart[i][values])
    }
    var mystring = "In your cart, you have "
      if (newarray.length === 1) {
        mystring += newarray + ".";
      } else if (newarray.length === 2 ) {
        mystring += (newarray[0] + ", and " + newarray[1] + ".")
      } else if (newarray.length > 2) {
        var lastelement = newarray.pop()
        var other_item = newarray.join(", ")
        mystring += (other_item + ", and " + lastelement + ".")
      }
      return mystring
}

function total() {
  // write your code here
  var cartTotal = 0
  for (let i = 0; i < cart.length; i++) {
  cartTotal += cart[i][Object.keys(cart[i])[1]]
  }
  return cartTotal
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (Object.values(cart[i])[0]  === item) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    return ("That item is not in your cart.");
  }
  return cart
}


function placeOrder(cardNumber) {
  // write your code here
  let orderTotal = total()
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`
  }
  
}
