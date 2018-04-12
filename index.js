///Solution link: https://github.com/learn-co-students/js-basics-online-shopping-lab-bootcamp-prep-000/blob/solution/index.js

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //potentially convert this to a function
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var textMain = [];
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        textMain.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    } else if (i < cart.length - 1) {
        textMain.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    } else {
        textMain.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
    }
  }
  return `In your cart, you have ${textMain.join(', ')}.`;
}

function total() {
  var totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    //alternative: totalValue += cart[i].itemPrice;
    totalValue = totalValue + cart[i].itemPrice;
  }
  return totalValue;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var subTotal = total();
    cart = [];
    return `Your total cost is $${subTotal}, which will be charged to the card ${cardNumber}.`;
  }
}