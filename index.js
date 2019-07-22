var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName : item,
   itemPrice : Math.floor(Math.random() * 100)
 });
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  var retString = "In your cart, you have ";
  for (var x=0;x < cart.length;x++) {
    var item=cart[x];
    if (x === cart.length-1) {
      retString+=(cart.length > 1) ? `and ${item.itemName} at $${item.itemPrice}.` : 
        `${item.itemName} at $${item.itemPrice}.`;
    } else {
      retString+=`${item.itemName} at $${item.itemPrice}, `;
    }
  }
  return retString;
}

function total() {
  // write your code here
  var total=0;
  for (var x=0;x < cart.length;x++) {
    total+=cart[x].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var exist=false;
  for (var x=0;x < cart.length;x++) {
    var itemO=cart[x];
    if (itemO.itemName == item) {
      exist=true;
      cart.splice(x,1);
    }
  }
  return (!exist) ? "That item is not in your cart." : cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var total=0;
    for (var x=0;x < cart.length;x++) {
      total+=cart[x].itemPrice;
    }
    cart.length=0;
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
  }
}
