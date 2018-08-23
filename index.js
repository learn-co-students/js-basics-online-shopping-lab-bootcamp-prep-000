var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 var List = [];
 List.push(item);
 
 for (var i = 0; i < List.length; i++) {
   item = { itemName: item, itemPrice: price };
   
   cart.push(item);
   
   return `${item.itemName} has been added to your cart.`
  }
}

function viewCart() {
  if (cart.length === 0) { 
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var lastitem = cart.slice(-1)
    var itemlist = []
    for (var i = 0; i < cart.length - 1; i++) {
      itemlist.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
   return `In your cart, you have${itemlist}, and ${lastitem[0].itemName} at $${lastitem[0].itemPrice}.`
  }
}

function total() {
  var ShoppingCartTotal = []
  var TotalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    ShoppingCartTotal.push(cart[i].itemPrice);
    TotalPrice += ShoppingCartTotal[i]
  }
  return parseInt(`${TotalPrice}`)
}

function removeFromCart(name) {

for (var i = 0; i < cart.length; i++) {
   
 if (cart[i].itemName === name) {
   cart.splice(i, 1);
   return cart
  }
 }
  return `That item is not in your cart.`
}  

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
} else {
  var buy = total()
  cart.splice(0, cart.length);
  return `Your total cost is $${buy}, which will be charged to the card ${cardNumber}.`
  }
}