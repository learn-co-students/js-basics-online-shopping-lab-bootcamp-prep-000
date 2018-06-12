var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
if (!cart.length){
  return "The cart is empty."
}
const nameAndPrice =[]

for (let i = 0, name = cart.length; i < 1; i++){
  nameAndPrice.push(`${i + 1}. ${cart[i]}`)
}
return 'The cart is currently: ${nameAndPrice.join(',')}'
};

[{itemName: "bananas", itemPrice: 17},
{itemName: "pancake", itemPrice: 5},
{itemName: "eggs", itemPrice: 49}]

if(addToCart){ itemName < 1, i++ 1;
return "Your cart is empty.";
}else{
var addToCart =  ["bananas", "pancake", "eggs"];
  return addToCart
}
}

function viewCart() {
console.log(itemName.string);
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
