var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {
  itemName: item,
  itemPrice: Math.floor(Math.random() * 100),
};
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
 
 let first = 'In your cart, you have';
 
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  else if (cart.length === 1) {
    return `${first} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  else if (cart.length === 2) {
    return `${first} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
 
 else {
    return `${first} ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
 }
}

function total() {
  let totalAmount = 0;
  for(let i=0; i<cart.length; i++) {
    totalAmount += cart[i].itemPrice;
  }
  return totalAmount;
}

function removeFromCart(item) {
  let check = cart.forEach(i => {
    if(i.itemName === item) {
      cart.splice(cart.indexOf(i), 1);
      return cart;
    }
  });
  
  if (!check) {
    return "That item is not in your cart.";
  }
  
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    let place =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return place;
    }
}
