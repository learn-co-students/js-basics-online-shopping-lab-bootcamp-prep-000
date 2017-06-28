var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  console.log(`${name} has been added to your cart.`);
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemName = {[name]: itemPrice};
  cart.push(itemName);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  } else {
    var string = "In your cart, you have";
    for(var i=0; i < cart.length; i++) {
      var item  = cart[i];
      var name  = Object.keys(item)[0];
      var price = item[name];
      if (i+1 == cart.length){
        string += ` ${name} at $${price}.`;
      } else if (i+2 == cart.length) {
        string += ` ${name} at $${price} and`;
      } else {
        string += ` ${name} at $${price}, `;
      }
    }
    return console.log(string);
  }
}

function total() {
  var item  = cart[i];
  var name  = Object.keys(item)[0];
  var price = item[name];
  for(var i=0; i < cart.length; i++) {
    var totalPrice = price;
    price ++;
  }
  return totalPrice;
}

function removeFromCart(item) {
console.log(`That item is not in your cart.`)

}

function placeOrder(cardNumber) {
  // write your code here
}
