var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 10) +1);
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
var  myCart = getCart();
var cartString = [];
for (var i = 0; i < myCart.length; i++){
  var objVal = Object.values(myCart[i]);
  var singleItem = `${''} ${objVal[0]} at $${objVal[1]}`;
  var finalItem = `${''} and ${objVal[0]} at $${objVal[1]}`;
  if (i === myCart.length - 1 && i !== 0){
    cartString.push(`${finalItem}`);
  } else {
  cartString.push(`${singleItem}`);
  }
}
if (myCart.length === 0){
  return "Your shopping cart is empty.";
} else {
  return `In your cart, you have${cartString}.`;
  }
}

function total() {
  var totalCost = 0;
  for (var i=0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
     var itemIsInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      itemIsInCart = true;
      return cart;
    }
  }
    if (itemIsInCart === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(creditCard) {
   if (creditCard === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalOrder = `Your total cost is $${total()}, which will be charged to the card ${creditCard}.`;
    cart.length = 0;
    return totalOrder;
  }
}

