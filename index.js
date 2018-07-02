var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor (Math.random() * 100);
var newObject = { itemName: item, itemPrice: price };
cart.push(newObject);
     return item + " has been added to your cart.";
}

function viewCart() {
  var cartLength = cart.length;
  
  if (cartLength < 1) {
        return "Your shopping cart is empty.";
      } else if (cartLength === 1) {
        return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
      } else {
        var middleText = [];
        var i = 0;
        while (i != cartLength - 1) {
         middleText[i] = " " + cart[i].itemName + " at $" + cart[i].itemPrice;
          i++;
        }
        return "In your cart, you have" + middleText + ", and " + cart[cartLength-1].itemName + " at $" + cart[cartLength-1].itemPrice + ".";}
}
function total() {
  var totalValue = 0;
  var i = 0;
  while (i <= cart.length) {
      if (i < cart.length) {
        totalValue = totalValue + cart[i].itemPrice;
       i++;
      } else {
       return totalValue;
  }
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
}
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalValue = 0;
    var i = 0;
    while (i < cart.length) {
       
        totalValue = totalValue + cart[i].itemPrice;
       i++;
  }
  cart = [];
  
  return "Your total cost is $" + totalValue + ", which will be charged to the card " + cardNumber + ".";
}

}
