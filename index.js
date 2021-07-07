var cart = [];

function getCart(nameOfAnItem) {
 
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemAdded = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 }
 cart.push(itemAdded);
 return `${item} has been added to your cart.`;
 
}

console.log(addToCart('Banana')) // returns "Banana has been added to your cart."

console.log(cart) // shows key pair in cart [ { itemName: 'Banana', itemPrice: 62 } ]


function viewCart() {
  
  var itemsInCart = [];
  
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length > 0) {
   for (let i = 0; i < cart.length - 1; i++) { 
     itemsInCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
    return `In your cart, you have ${itemsInCart.join(", ")}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
  } else {
    return `Your shopping cart is empty.`;
  }
}


function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
   cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

// pick up here
function searchForItemToRemove(item) {
    for (let i = 0; i < cart.length; i++) {
      if (item === cart[i].itemName) {
        cart.splice(i, 1);
        break;
        } 
      }
  }

function removeFromCart(item) {
  return (searchForItemToRemove(item) ? cart : 'That item is not in your cart.');
    }


function emptyYourCart() {
  cart = [];
  return cart;
}
function searchForCardNumber(cardNumber) {
  var charged = 0;
  charged += total();
  emptyYourCart();
  return `Your total cost is $${charged}, which will be charged to the card ${cardNumber}.`;
}

function placeOrder(cardNumber) {
  return (cardNumber ? searchForCardNumber(cardNumber) :
  `Sorry, we don't have a credit card on file for you.`);
}
  