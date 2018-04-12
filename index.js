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
  for (let i = 0; i < cart.length; i++) {
    
  }
}
//return all contents as a single coherent statement
//"In your cart, you have itemName at itemPrice, itemName2 at itemPrice2, and itemName3 at itemPrice3."
//If the cart is empty, return "Your shopping cart is empty."

function total() {
  var totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
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