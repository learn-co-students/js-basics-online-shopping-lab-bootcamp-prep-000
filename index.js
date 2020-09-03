var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({'itemName': item, 'itemPrice': Math.ceil(Math.random()*100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  switch (cart.length) {
    case 0:
      return "Your shopping cart is empty.";
    case 1:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    case 2:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    default:
      let retStr = "In your cart, you have ";
      for (let i=0; i<(cart.length - 1); i++){
        retStr += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
      retStr += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
      return retStr;
  }
}

function total() {
  let acc = 0;
  for (let i=0; i<cart.length; i++){
    acc += cart[i].itemPrice;
  }
  return acc;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) return "Sorry, we don't have a credit card on file for you.";
  let tot = total();
  cart = [];
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
}
