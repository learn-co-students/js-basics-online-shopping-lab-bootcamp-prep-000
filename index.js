var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let price = Math.floor(Math.random() * 100);
cart.push({
  itemName: `${item}`,
  itemPrice: price
  
});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let list = "Your shopping cart is empty";
    for(let i = 0;i < cart.length;i++) {
      if (cart.length > 0 && i === 0) {
        list = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else if (i < cart.length - 1){
        list += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else {
        list += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } 
    }
  list = list + '.';
  return list;
}

function total() {
  let total = 0;
  for(let i = 0;i < cart.length;i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  let result = "That item is not in your cart.";
  for(let i = 0;i < cart.length;i++) {
    if(cart[i].itemName === item) {
      result = cart.splice(i, 1);
    } 
  }
return result;
}

function placeOrder(cardNumber) {
  let result;
  if(!cardNumber) {
    result = "Sorry, we don't have a credit card on file for you.";
  } else {
    result = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
  }
  return result;
}
