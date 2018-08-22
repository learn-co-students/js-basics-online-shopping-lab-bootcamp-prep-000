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
  for (var i = 0; i < cart.length; i++) {
    ShoppingCartTotal.push(cart[i].itemPrice);
    ShoppingCartTotal[P];
    P =+ 1
  }
  return `${TotalPrice}`
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
