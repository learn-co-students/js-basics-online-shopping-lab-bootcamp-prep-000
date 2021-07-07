var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart (item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price})
console.log([item] + ' has been added to your cart.');
return cart
}

function viewCart() {
if(!cart.length){
  console.log(`Your shopping cart is empty.`)
}
else{
const thingAndPrice = [];
for(let i=0; i<cart.length; i++){
let itemobj = cart[i];
let thing = Object.keys(itemobj);
let price = itemobj[thing];
thingAndPrice.push(`${thing} at \$${price}`);}
console.log(`In your cart, you have ${thingAndPrice.join(`, `)}.`);}
}

function removeFromCart(item) {
  if (item in cart === false) {
    console.log("That item is not in your cart.")
    if (cart.hasOwnProperty(item)===true){ delete cart[item];
    }
    cart.pop();
    return cart;
  }
}

function placeOrder(credit) {
if (!credit) {
  console.log(`We don't have a credit card on file for you to place your order.`)
}
else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${credit}.`)};
cart.pop();

return cart
}
