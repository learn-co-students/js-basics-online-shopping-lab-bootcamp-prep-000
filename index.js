var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor((Math.random() * 100) + 1);
  let cartObject = {itemName:item, itemPrice:price};
  cart.push(cartObject);
  return `${cartObject.itemName} has been added to your cart.`;
}