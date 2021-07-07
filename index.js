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
  var randomNumber = (Math.floor(Math.random() * (100 - 1) + 1));
  cart.push({[item]: randomNumber});
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
var inTheCartNow;

  if(cart.length) {
    inTheCartNow = `In your cart, you have `;

    for(var i = 0; i < cart.length; i++) {
      var anItemObject = cart[i];

      for(var item in anItemObject) {
        if(cart.length === 1) {
          inTheCartNow += `${item} at $${anItemObject[item]}.`;
        } else if(cart.length === 2) {
          if(i === 0) {
            inTheCartNow += `${item} at $${anItemObject[item]}`;
          } else if (i === 1) {
            inTheCartNow += ` and ${item} at $${anItemObject[item]}.`;
          }
        } else {
          if (i === cart.length - 1) {
            inTheCartNow += `and ${item} at $${anItemObject[item]}.`;
          } else {
            inTheCartNow += `${item} at $${anItemObject[item]}, `;
          }
        }
      }
    }
  } else {
    inTheCartNow = `Your shopping cart is empty.`;
  }

  console.log(inTheCartNow);
}

function total() {
  // write your code here
  var total = 0;

  for(var i = 0; i < cart.length; i++) {
    var anItemObject = cart[i];

    for(var item in anItemObject) {
      total += anItemObject[item];
    }
  }

  return total;
}

function removeFromCart(item) {
  // write your code here
  var itemFlag = false;

  for(var i = 0; i < cart.length; i++) {
    var anItemObject = cart[i];

    if(anItemObject.hasOwnProperty(item)) {
      cart.splice(i,1);
      itemFlag = true;
    }
  }

  if(itemFlag) {
    return cart;
  } else {
    console.log(`That item is not in your cart.`);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
