var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice =  Math.floor(Math.random() * 100);
var obj = {};
Object.assign(obj, { [itemName]: itemPrice });
cart.push(obj);
console.log(`${itemName} has been added to your cart.`)
return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var items = []
  for(let i = 0; i < cart.length; i++) {
    let nameAndPrice = cart[i]
    var name = Object.keys(nameAndPrice);
    var price = nameAndPrice[name];
    items.push(`${name} at \$${price}`)
    console.log(`In your cart, you have ${items[i]}.`)
  }

}

function total() {
  for(let i = 0; i < cart.length; i++) {
    let nameAndPrice = cart[i]
    var name = Object.keys(nameAndPrice);
    var sum = 0
    sum += parseInt(nameAndPrice[name]);
  }
  console.log(`${sum}`);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
