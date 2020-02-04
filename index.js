var cart = [];

function genPrice(max) {
  // generates a number between 1 and max, max inclusive.
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newObject = { itemName: item, itemPrice: genPrice(100) };
 cart.push(newObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  /* TEMPLATE
   *  In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
   *  "In your cart, you have "
   *  `${temp[itemName]} at ${temp[itemPrice]}, `
   *  `and ${temp[itemName]} at ${temp[itemPrice]}.`
   */

   var cartOverview = "In your cart, you have ";
   var tempItem;

   if (cart.length === 0) {
     return "Your shopping cart is empty.";
   }
   else if (cart.length === 1) {
     tempItem = cart[0];
     cartOverview += `${tempItem.itemName} at \$${tempItem.itemPrice}.`;
   }
   else {
     for (var i = 0; i < cart.length; i++) {
       tempItem = cart[i];
       if (i === cart.length - 1) {
         cartOverview += `and ${tempItem.itemName} at \$${tempItem.itemPrice}.`;
       }
       else {
         cartOverview += `${tempItem.itemName} at \$${tempItem.itemPrice}, `;
       }
     }
   }

   return cartOverview;
}

function total() {
  // write your code here
  var cost = 0;
  var tempItem;

  for (var i = 0; i < cart.length; i++) {
    tempItem = cart[i];
    cost += tempItem.itemPrice;
  }

  return cost;
}

function removeFromCart(item) {
  // write your code here
  for (var index = 0; index < cart.length; index++) {
    if (cart[index].itemName === item) {
      cart.splice(index, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you.";
  }

  var cost = total();
  cart = [];

  return `Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`;

}
