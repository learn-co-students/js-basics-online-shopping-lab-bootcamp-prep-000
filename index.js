var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.ceil(Math.random() * 100)
  });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (0 === cart.length){
    return "Your shopping cart is empty.";
  }
  else {
    let cartDescription = "In your cart, you have "
    let item;
    for (let i = 0; i < cart.length; i++){
      item = cart[i];
      cartDescription += `${item['itemName']} at $${item['itemPrice']}`
      if (i == cart.length - 1){
        cartDescription += "."
      }
      else if (i == cart.length - 2){
        cartDescription += ", and "
      }
      else {
        cartDescription += ", "
      }
    }
    return cartDescription;
  }
}

function total() {
  const totaler = (accumulator, currentValue) => accumulator + currentValue['itemPrice']
  return cart.reduce(totaler, 0)
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
