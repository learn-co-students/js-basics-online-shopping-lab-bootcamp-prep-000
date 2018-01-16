var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice =  Math.floor(Math.random() * 100) + 1;
cart.push({ [itemName]: itemPrice });
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
  }
switch(items.length) {
  case 1:
    break;
  case 2:
    items = items.join(" and ");
    break;
  default:
    items[cart.length - 1] = "and ".concat(items[cart.length - 1])
    items = items.join(", ");
}
    console.log(`In your cart, you have ${items}.`)
}

function total() {
  var sum = 0
  for(let i = 0; i < cart.length; i++) {
for(let name in cart[i]) {

    sum += parseInt(cart[i][name]);
}
  }
  return sum;
}

function removeFromCart(item) {
  var product = false;
 for(let i = 0; i < cart.length; i++) {
  let len = cart.length
  let nameAndPrice = cart[i]
  if(nameAndPrice.hasOwnProperty(item)) {
    product = true;
    cart = cart.slice(0, i).concat(cart.slice(i + 1))
    len--
  } 
  }
  if (product === false) {
    console.log("That item is not in your cart.");
  }
return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;

}
