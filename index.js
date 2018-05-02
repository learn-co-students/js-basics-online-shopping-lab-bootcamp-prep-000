var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

function addToCart(item) {
let price = getPrice(1, 100);
var objectInCart = {itemName:item, itemPrice:price};
cart.push(objectInCart);
return `${item} has been added to your cart.`;
}

function viewCart() {
  var totalItems = cart.length;
  
  if (totalItems < 1) {
    return "Your shopping cart is empty."
  } else if (totalItems === 1) {
    var oneItem = cart[0];
    var thisName = Object.getOwnPropertyDescriptor(oneItem, 'itemName');
    var thisPrice = Object.getOwnPropertyDescriptor(oneItem, 'itemPrice');
    return `In your cart, you have ${thisName.value} at $${thisPrice.value}.`
  } else if (totalItems > 1) {
    var inCartPrint = [];
    var lastItem = cart[totalItems - 1];
    var lastName = Object.getOwnPropertyDescriptor(lastItem, 'itemName');
    var lastPrice = Object.getOwnPropertyDescriptor(lastItem, 'itemPrice')
    inCartPrint.unshift(` and ${lastName.value} at $${lastPrice.value}.`)
    for (let t = totalItems - 1, i = totalItems - 2; t > 0; i--, t--) {
      var nextItem = cart[i];
      var nextName = Object.getOwnPropertyDescriptor(nextItem, 'itemName');
      var nextPrice = Object.getOwnPropertyDescriptor(nextItem,'itemPrice');
      inCartPrint.unshift(` ${nextName.value} at $${nextPrice.value}`);
    }
    var allItems = inCartPrint.toString()
    return `In your cart, you have${allItems}`
  }
}

function total() {
  var allPrices = [];
  for (let i = 0; i < cart.length; i++){
    var findPrices = [...cart];
    var nextItem = findPrices[i];
    const nextPrice = Object.getOwnPropertyDescriptor(nextItem, 'itemPrice');
    allPrices.push(nextPrice.value);
  }
  
  var runningTotal = 0;
 for (let i = 0; i < allPrices.length; i++) {
   runningTotal = allPrices[i] + runningTotal;
  }
  return runningTotal;
}

function removeFromCart(item) {
  var cartCopy = [];
  
  cart.forEach(function(next){
    var checkName = Object.getOwnPropertyDescriptor(next, 'itemName');
    cartCopy.push(checkName.value);
  });
  
  if (cartCopy.includes(item)) {
    do {
      var i = cartCopy.indexOf(item);
      cart.splice(i, 1);
      cartCopy.splice(i, 1);
      return cart;
    } while (cartCopy.includes(item));
  } else {
    return `That item is not in your cart.`;
  }

}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var totalCost = total();
    for (let i = cart.length; i > 0; i--) {
      cart.shift();
    }
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}