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
 const price = (Math.floor(Math.random() * 100)+ 1);
 var itemName = ({[item]: price});
 // item in square brackets is a variable. it is literally calling the value of the item. what is the item here?
cart.push(itemName);
// pushing var itemName is end of array
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  // write your code here
  const l = cart.length
  // l equals length of the array
  if (!l){
    return console.log("Your shopping cart is empty.");
  }
  let groceries = [];
  // new array
  for (let i = 0; i < l; i++){
    let grocery = cart[i];
    /* this is saying that groceries is equal to whatever index the cart is at. remember, that
    only key-value pairs are being added to this array*/
    let item = Object.keys(grocery)[0];
    //object.keys outputs the key name (not value of key) in the array groceries. the [0] outputs index 1.
    let price = grocery[item];
    //accessing the value of the key called "item"
    groceries.push(`${item} at \$${price}`);
}
switch (groceries.length){
  case 1:
  break;
  case 2:
  groceries = groceries.join(" and ");
  break;
  default:
  groceries[l-1] = "and ".concat(groceries[l-1])
  groceries = groceries.join(", ");
}


console.log(`In your cart, you have ${groceries}.`);
  }


function total() {
  let total = 0;

  for (let i = 0, l = cart.length; l > i; i++){
    for(let item in cart[i]){
    total = total + cart[i][item];
  }
    // for/in loop loops through an object
  }
  return total
}

function removeFromCart(item) {
let itemInCart = false;

for (let i = 0, l = cart.length; i < l; i++){
  if (cart[i].hasOwnProperty(item)){
    itemInCart = true;
    cart = cart.slice(0, i).concat(cart.slice(i + 1));
    //remember, slice creates new array. also parameters are where to slice, and how many, respectively
    l--;
  }
}
if (!itemInCart){
    return console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.");
    return false;

  }
  else {console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
}
cart = [];
}
