var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = { itemName: item, "itemPrice": Math.floor(Math.random() * 100) };
  cart.push(newObject);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var i = 0;
  var contents = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
      while (i < cart.length) {
        contents.push(cart[i].itemName + " at $" + cart[i].itemPrice);
        i++;
      }
  }
  if (contents.length === 1) {
    return `In your cart, you have ` + contents + ".";
  } else {
    return `In your cart, you have ` + contents.slice(0, contents.length -1).join(", ") + ", and " + contents.slice(-1).join("and ") + `.`; 
  }
}

function total() {
  var i = 0
  var totalCostList = []
  var totalCost = 0
  while (i < cart.length) {
    totalCostList.push(cart[i].itemPrice);
    i++;
  }
  for (i = 0; i < cart.length; i++) {
    totalCost += totalCostList[i]
  }
  return totalCost;
}

function removeFromCart(item) {
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

//  below, the "placeOrder()" function accepts one argument, a credit card number...Then, if no argument is received, the function prints out "Sorry, we don't have a credit card on file for you."...Then, if a card number is received, the function empties the "cart" array, and returns "Your total cost is $71, which will be charged to the card 83296759." (where "71" is the value returned by "total()" and "83296759" is the credit card number passed to "placeOrder()")

// ("1)  placeOrder() doesn't place the order if a credit card number is not provided: Error: Expected undefined to equal 'Sorry, we don\'t have a credit card onfile for you.'  AND  2)  placeOrder() places an order when a credit card number is provided: Error: Expected undefined to equal 'Your total cost is $27, which will be charged to the card 41351226.'  AND  3)  placeOrder() empties the cart: Error: Expected [ { itemName: 'apples', itemPrice: 9 } ] to equal []")

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    total();
    var fullCartValue = total();
    cart = []
    return `Your total cost is $${fullCartValue}, which will be charged to the card ${cardNumber}.`
  }
}
