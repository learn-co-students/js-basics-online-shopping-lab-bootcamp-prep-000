var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {};
  itemObj[item] = Math.floor(Math.random() * 100);
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  var myStr = "";
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    myStr += `${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (cart.length === 2 && i !== 1) {
        myStr += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]} and `;
      } else if (cart.length === 2 && i === 1) {
         myStr += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}.`
      } else if (cart.length > 2 && i < cart.length - 1) {
        myStr += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, `;
      } else {
        myStr += `and ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}.`
      }
    }
  }
  console.log(`In your cart, you have ${myStr}`);
}

function total() {
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i++) {
   totalPrice += Object.values(cart[i])[0];
  }
  return totalPrice;
}

function removeFromCart(item) {
  var hasItem = false;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      hasItem = true;
      cart.splice(i, 1)
      console.log(cart)
    }
  }
  if(!hasItem) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
