var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(obj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var finalString = 'In your cart, you have ';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      finalString += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
      // finalString += `${(cart.length-1)? 'and ' : ''}${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
      if (cart.length - 1 !== 0) {
        finalString += 'and ';
      }
      finalString += `${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
  return finalString;
}


function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
    sum += cart[i]['itemPrice'];
  }
  return sum;
}

function removeFromCart(item) {
  // for (let i = 0; i < cart.length; i++) {
  //   if (cart[i].itemName === item) {
  //       cart.splice(i, 1);
  //   }
  // }
  // if (cart.length) {
  //   return cart;
  // }
  // return "That item is not in your cart.";
  const index = cart.findIndex(x => x.itemName === item);
    if (index === - 1) {
    return "That item is not in your cart.";
  }
  const temp = cart.splice(index, 1);

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var text = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart.length = 0;
  return text;
  // write your code here
}
