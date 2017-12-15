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
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price;
  cart.push(item_object);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if(i === cart.length - 1 && cart.length != 1){
        items.push("and " + item + " at $" + cart[i][item]);
      }
      else{
        items.push(item + " at $" + cart[i][item]);
      }
    }
  }
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${items}.`);
  }
  else if (cart.length === 2){
    console.log(`In your cart, you have ${items[0]} ${items[1]}.`);
  }
  else {
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function total() {
  // write your code here
  let total = 0;
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false;
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var creditCard = cardNumber;
  if (!creditCard){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
