var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let randomPrice = Math.floor((Math.random() * 100) + 1);
  var nameAndPrice = { 
    itemName: item,  
    itemPrice: randomPrice
  };
    cart.push(nameAndPrice);
  return `${nameAndPrice.itemName} has been added to your cart.`;
}

function viewCart() {
  var cartSummary = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
    } if (cart.length === 1) {
       cartSummary.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}`);
    } else {
      for (var i = 0; i < cart.length; i++) {
        if (i < cart.length -1) {
          cartSummary.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
        } else {
          cartSummary.push(`and ${getCart()[cart.length -1].itemName} at $${getCart()[cart.length -1].itemPrice}`);
        }
      }
    }
    return `In your cart, you have ${cartSummary.join(', ')}.`;
}


function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal += getCart()[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
    cart.splice(i, 1);
    }
  }
   return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
  return "Sorry, we don't have a credit card on file for you.";
  } else {
         var checkOut = total();
         cart = [];
    return `Your total cost is $${checkOut}, which will be charged to the card ${cardNumber}.`;
  }
}

