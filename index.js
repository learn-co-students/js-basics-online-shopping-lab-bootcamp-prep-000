var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsAndPrices = [];
    for (let i = 0; i < cart.length; i++){
    itemsAndPrices.push(`${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`);
  }
  var finalItemsAndPrices = itemsAndPrices.slice(itemsAndPrices.length - 1);
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${itemsAndPrices}.`);
  } else if (cart.length === 2) {
      for (let i = 0; i < cart.length; i++){
      console.log(`In your cart, you have ${itemsAndPrices[i]} and ${itemsAndPrices[i + 1]}.`);
    }
  } else {
      itemsAndPrices.pop();
      var allButTheLastInTheBunch = [];
      allButTheLastInTheBunch = itemsAndPrices.join(', ');
      console.log(`In your cart, you have ${allButTheLastInTheBunch}, and ${finalItemsAndPrices[0]}.`)}
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
    var itemPrices = Object.values(cart[i])[0];
    sum += itemPrices}
    return sum;
}
   
function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true) {
     cart.splice(i, 1);
     return cart;
    }
  }   
  console.log("That item is not in your cart.");
   return cart;
}
  
function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
    }
}