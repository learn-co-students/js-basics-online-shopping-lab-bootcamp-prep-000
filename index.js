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
 var i = {[item]:Math.floor(Math.random() * 100 + 1)};
 cart.push(i);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var s;
  if (cart.length>0){
    s = 'In your cart, you have ';
    var item = Object.keys(cart[0])[0];
    for (var i = 0;i<cart.length-1;i++){
      var item = Object.keys(cart[i])[0];
      if (cart.length === 2){
        var finisher = ` and `;   //just put and
      }
      else if (i === cart.length-2){   //second to last item gets an 'and'
        finisher += 'and ';
      }
      else {
        var finisher = ', ';      // list all with comma
      }
      s += `${item} at $${cart[i][item]}${finisher}`;
    }
    var item = Object.keys(cart[i])[0];
    s += `${item} at $${cart[i][item]}.`;   //very last item with '.'
  }
  else{
    s = 'Your shopping cart is empty.';
  }
  console.log(s);
}

function total() {
  // write your code here
var total = 0;
  for (var i = 0; i<cart.length;i++){
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var i = 0;
  while (i<cart.length){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
    i++;
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined'){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];    //empty the cart
  }
}
