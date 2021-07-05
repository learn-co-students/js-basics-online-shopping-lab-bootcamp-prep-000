
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemtoadd = {'itemName': item, 'itemPrice': Math.floor(Math.random()*100) + 1};
  cart.push(itemtoadd);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var string = "In your cart, you have ";
  var itemstolist = [];
  if (cart[0]===undefined) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length===1)
    {
      string+=`${cart[0].itemName} at $${cart[0].itemPrice}.`;
      return string;
    }
    else if (cart.length===2) {
      string+=`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      return string; 
    }
    else {
      for (let i=0; i<cart.length-2; i++) {
        itemstolist.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      return `${string}${itemstolist}, ${cart[cart.length-2].itemName} at $${cart[cart.length-2].itemPrice}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    }
}

function total() {
  var total = 0;
  for (let i=0; i<cart.length; i++) {
    total+=cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  let cart = getCart();
for (let i=0; i<cart.length; i++) {
  if (cart[i].itemName === item ) {
    cart.splice(i, 1);
    return cart;
  }
 }
 return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
 if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you.";
 }
 else {
   var totalprice = total();
   cart =[];
   return `Your total cost is $${totalprice}, which will be charged to the card ${cardNumber}.`;
 }
 }
