var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  } else if(cart.length === 1){
    var product = Object.keys(cart[0])[0];
    console.log(`In your cart, you have ${product} at $${cart[0][product]}.`);
  } else if(cart.length === 2){
    var product1 = Object.keys(cart[0])[0];
    var product2 = Object.keys(cart[1])[0];
    console.log(`In your cart, you have ${product1} at $${cart[0][product1]} and ${product2} at $${cart[1][product2]}.`);
  } else {
    var count = 1;
    var product = Object.keys(cart[0])[0];
    var toReturn = `In your cart, you have ${product} at $${cart[0][product]}`;
    do {
      var product1 = Object.keys(cart[count])[0];
      toReturn += `, ${product1} at $${cart[count][product1]}`;
      count++;
    } while(count < cart.length-1);
    var product = Object.keys(cart[count])[0];
    toReturn += `, and ${product} at $${cart[count][product]}.`
    console.log(toReturn);
  }
}

function total() {
  var total = 0;
  for(let i=0;i<cart.length;i++){
    var product = Object.keys(cart[i])[0];
    var price = cart[i][product];
    total += Number(price);
  }
  return total;
}

function removeFromCart(item) {
  console.log('item: ', item);
  console.log('cart: ', cart);
  var removed = false;
  for(let i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      removed = true;
      cart = [...cart.splice(0,i),...cart.splice(1,cart.length)];
      console.log('updated: ', cart);
      break;
    }
  }
  if(!removed){
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  var toReturn = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  console.log(toReturn);
}
