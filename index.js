var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var c = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(c);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
     return "Your shopping cart is empty.";
   } else if (cart.length === 1) {
      let oneICart = [];
      cart.forEach(function(i) {
      oneICart.push( `In your cart, you have ${i.itemName} at $${i.itemPrice}.`)
      });
      return oneICart
   }
     const itemAndPrice = [];
     cart.forEach(function(i) {
      itemAndPrice.push(`${i.itemName} at $${i.itemPrice}`);
    });
    var lastE = itemAndPrice.pop();
    var iAndPString = itemAndPrice.join(', ') +', and '+ lastE;
 return `In your cart, you have ${iAndPString}.`;
}

function total() {
  var allPrices = [];
  cart.forEach(function(i) {
    allPrices.push(i.itemPrice);
    });
  return allPrices.reduce((a, b)=>a+b)
}

function removeFromCart(item) {
  for (let i = 0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      }
    }
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  let cartTotal = total();
  cart.length = 0;
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
