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
  let cartSize = cart.length;
  let list = "";
  if(cartSize === 0) {
    list += `Your shopping cart is empty`;
  } else {
    for(let i = 0;i < cartSize;i++) {
      if (cart.length > 0 && i === 0) {
        list += `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else if (i < cart.length - 1){
        list += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else {
        list += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      } 
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
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
