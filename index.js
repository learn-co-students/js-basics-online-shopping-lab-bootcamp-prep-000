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
 var itemObject = {}
 itemObject[item] = price
 cart.push(itemObject)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var message = ``

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else if(cart.length === 1){
    var itemName = Object.keys(cart[0]);
    let itemPrice = cart[0][itemName];
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  }
  else if (cart.length === 2){
    var itemName1 = Object.keys(cart[0]);
    let itemPrice1 = cart[0][itemName1];

    var itemName2 = Object.keys(cart[1]);
    let itemPrice2 = cart[1][itemName2];
    console.log(`In your cart, you have ${itemName1} at $${itemPrice1} and ${itemName2} at $${itemPrice2}.`)
  }
  else {
    for (let i = 0; i < cart.length; i++) {

      let itemName = Object.keys(cart[i]);
      let itemPrice = cart[i][itemName];
      if (i === 0){ //first item
        message = `In your cart, you have ${itemName} at $${itemPrice}, `
      }
      else if (i === cart.length - 1 ) { //last item
        message += `and ${itemName} at $${itemPrice}.`
      }
      else { //middle item
        message += `${itemName} at $${itemPrice}, `
      }
    }
  }
  console.log(message)
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    let itemName = Object.keys(cart[i]);
    let itemPrice = cart[i][itemName];
    total += itemPrice;
  }
  console.log(total)
  return total;
}

function removeFromCart(item) {
  // write your code here
  var exists = 0;
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      exists = 1;
      cart.splice(i, 1);
    }
  }
    if (exists === 0) {
      console.log(`That item is not in your cart.`);
    }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}
