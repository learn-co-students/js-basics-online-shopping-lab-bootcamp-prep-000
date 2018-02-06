var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const clength = cart.length;
  var view = "In your cart, you have ";
  
  if (!clength) {
    return console.log("Your shopping cart is empty.");
  } else if (clength === 1) {
    view += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`;
  } else if (clength === 2) {
    view += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`; 
  } else {
      for (var i = 0; i < clength; i++) {
        var index = cart[i];
        var item = Object.keys(index)[0];
        var price = Object.values(index)[0];
        
        if (i === clength - 1) {
          view += `and ${item} at $${price}.`;
        } else {
          view += `${item} at $${price}, `;
        }
      }
  }
  console.log(view);
}


function total() {
 var sum = 0; 
 
 for (var i = 0; i < cart.length; i++) {
   var index = cart[i];
   var price = Object.values(index)[0];
   sum += price;
 }
 
 return sum;
}

function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    var index = cart[i];
    var item = Object.keys(index)[0];
    
    if (index.hasOwnProperty(name)) {
      cart = cart.slice(0, i).concat(cart.slice(i+1));
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}



