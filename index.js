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
 var value = (Math.floor(Math.random() * 100 + 1));
 var assigningObjectToCart = {[item]:value};
 cart.push(assigningObjectToCart);
 console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var creatingItemsString = "";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 2 && i === 1) {
        creatingItemsString = creatingItemsString + " and";
      } else if (cart.length > 2 && i > 0) {
        creatingItemsString = creatingItemsString + ",";
        if ((cart.length - 1) === i) {
          creatingItemsString = creatingItemsString + " and";
        }
      }
      creatingItemsString = creatingItemsString + ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
    }
    console.log(`In your cart, you have${creatingItemsString}.`);
  }
}

function total() {
  // write your code here
  var totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i][Object.keys(cart[i])];
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item === String(Object.keys(cart[i]))) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var finalCost = total();
    cart.splice(0,cart.length);
    console.log(`Your total cost is $${finalCost}, which will be charged to the card ${cardNumber}.`);
  }
}
