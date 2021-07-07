var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    var newItem = [];
    for(let i = 0; i < cart.length; i++) {
      newItem.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if(newItem.length === 1) {
      return `In your cart, you have ${newItem[0]}.`
    } else if(newItem.length === 2) {
      newItem.push();
      console.log(newItem.join());
      return `In your cart, you have ${newItem[0]}, and ${newItem[1]}.`
    } else if(newItem.length === 3) {
      newItem.push();
      return `In your cart, you have ${newItem[0]}, ${newItem[1]}, and ${newItem[2]}.`
    }
  }
}
function total() {
  let getTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    getTotal += cart[i].itemPrice;
  }
  return getTotal;
}

function removeFromCart(item) {
  //write your code here
  let i = [];
  for(i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
  cart.splice(i, 1);
    return cart;
    }
  }

    return 'That item is not in your cart.'

}
// function removeFromCart(item) {
//   //write your code here
//   let i = [];
//   for(i = 0; i < cart.length; i++) {
//   }
//   if(cart[i].itemName === item) {
//   cart.splice(i, 1);
//     return cart;
//   } else {
//     return 'That item is not in your cart.'
//   }
// }

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    var cart_total = total();
    for(let i = 0; i < cart.length; i++) {
      cart.pop();
    }
      return `Your total cost is $${cart_total}, which will be charged to the card ${cardNumber}.`
    } else {
      return "Sorry, we don't have a credit card on file for you.";
    }
  }
