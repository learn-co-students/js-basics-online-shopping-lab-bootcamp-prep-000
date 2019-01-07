var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var itemPrice = Math.floor(Math.random()*100 + 1)
       var itemName = item
       item = {[itemName]: itemPrice};
       cart.push(item);
       console.log(`${itemName} has been added to your cart.`);
       return cart;
    // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return;
} else {
  var items = [];
    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0]
      items.push(`${itemName} at $${cart[i][itemName]}`)
    }
    if (items.length === 1) {
      console.log(`In your cart, you have ${items.join(" ")}.`);
    } else if (items.length === 2) {
      console.log(`In your cart, you have ${items.join(" and ")}.`);
    } else {
      // lst element of items is 'pizza at 24', how can we make the value 'and pizza at $24'
      // redefine the last element
      items[items.length - 1] = "and " + items[items.length - 1]
      console.log("In your cart, you have " + items.join(", ") + ".");
    }
  }
}
function total() {
  var theTotal = 0;
  for(var i = 0; i < cart.length; i++) {
    theTotal = theTotal + cart[i][Object.keys(cart[i])[0]]
  }
  return theTotal;
  }


function removeFromCart(item) { // removeFromCart('pizza')
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)// we need to remove the item from the array (hint: you want to remove from a given index value(i))
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
         if (!cardNumber) {
           console.log("Sorry, we don\'t have a credit card on file for you.")
      } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
    return cart = []// write your code here
}
