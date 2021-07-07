var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100);
  var newObject = {[item] : itemPrice};
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length == 0){
    console.log('Your shopping cart is empty.');
  }
  else{
    var newString = 'In your cart, you have ';
    for (let i=0; i<cart.length-1; i++){
      newString = newString + Object.keys(cart[i])[0] + ' at $' + cart[i][Object.keys(cart[i])[0]];
      if (cart.length>2){
        newString = newString + ', ';
      }
    }
  if (!(cart.length==1)){
    if (cart.length==2){newString = newString + ' '}
    newString = newString + 'and ';
  }
  newString = newString + Object.keys(cart[cart.length-1])[0] + ' at $' + cart[cart.length-1][Object.keys(cart[cart.length-1])[0]] + '.';
  console.log(newString);
  }
}

function total() {
  var totalPrice = 0;
  for (let i=0; i<cart.length; i++){
    totalPrice += cart[i][Object.keys(cart[i])[0]];
    // Object.keys(x[i])[0]       --> to access object property
    // x[i][Object.keys(x[i])[0]] --> to access the value
  }
  return totalPrice;
}

function removeFromCart(item) {
  let bool = false;
  for (let i=1; i<cart.length; i++){
    if ((Object.keys(cart[i])[0])==item){
      bool = true;
      cart.splice(i,1); // use this to COMPLETELY remove object from array (*delete is only for objects, not arrays)
    }
  }
  if (bool == false){
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  else{
    let newPrice = total();
    let newString = 'Your total cost is $' + newPrice + ', which will be charged to the card ' + cardNumber + '.';
    cart = []; // empty the array
    console.log(newString);
  }
}
