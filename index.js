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
  let newOject = {};
  let value = Math.floor(Math.random() * 101);
  newOject[item] = value;
  cart.push(newOject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  let itemAndPrice = [];
  for (let index = 0; index < cart.length - 1; index++) {
    for (const x in cart[index]) {  //bananas at $17
      itemAndPrice.push(`${x} at $${cart[index].x}`);
    }
  }
  if(itemAndPrice.length ==1){
    console.log(`In your cart, you have ${itemAndPrice[0]}.`);
  } else if (itemAndPrice.length == 2){
    console.log(`In your cart, you have ${itemAndPrice[0]} and ${itemNamendPrice[1]}.`)
  } else {
    let stringer = "";
    for (let newIndex = 0; newIndex < itemAndPrice.length-1; newIndex++){
      stringer =  stringer + itemAndPrice[newIndex] + ", "
    }
    console.log(`In your cart, you have ${stringer}and ${itemAndPrice[itemAndPrice.length-1]}.`);
  }
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
