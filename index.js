var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 var newObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(newObj);
 return `${item} has been added to your cart.`
}


function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }

  const itemsAndPrices = []

  for (let i = 0; i < cart.length; i++) {
    itemsAndPrices.push(`${i === cart.length - 1 && cart.length !== 1 ? "and " : "" }${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  return `In your cart, you have ${itemsAndPrices.join(', ')}.`
}


function total() {
  var total = 0;

  for(let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
    for (var i=0; i<cart.length; i++) {
      if (cart[i].itemName===item) {
         cart.splice(i, 1)
         return cart
      }
    }
    return `That item is not in your cart.`

  }

  function placeOrder(cardNumber) {
  var result = "";

  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }

  result += `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`

  cart = [];

  return result;
}
