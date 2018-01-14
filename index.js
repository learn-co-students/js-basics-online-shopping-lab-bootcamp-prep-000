var cart = [{lemons: 40},{lemon: 41},{lemons: 42}];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {};
 obj[item] = Math.ceil(Math.random()*100);
 console.log(`${item} has been added to your cart.`);
 cart.push(obj);
 console.log(cart);
 return cart;
}

function viewCart() {
  console.log('start');
  console.log(cart.length)
  // write your code here
  var values = [];
  var keys = [];
  var print = 'In your cart, you have ';
  for (var i = 0; i < cart.length; i++){
    values[i] = Object.values(cart[i]);
    keys[i] = Object.keys(cart[i]);
  }
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  } else if (cart.length > 0) {
    for(var i = 0; i < cart.length; i++){
      if(i === (cart.length - 1)){
        print += `${keys[i]} at $${values[i][0]}.`;
      } else if (i === (cart.length - 2)){
        if (cart.length === 2){
          print += `${keys[i]} at $${values[i][0]} and `;
        } else {
        print += `${keys[i]} at $${values[i][0]}, and `;
        }
      } else if(i < (cart.length - 2)){
        print += `${keys[i]} at $${values[i][0]}, `;
      }
    }
    console.log(print);
  }
}

function total() {
  var values = [];
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    values[i] = Object.values(cart[i]);
    //console.log(values[i])
    total += parseInt(values[i]);
  }
  return total;
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  var keys = [];
  var isIt = 0;
  console.log('here');
  for (var i = 0; i < cart.length; i++){
    keys[i] = Object.keys(cart[i]);
    console.log(keys[i]);
    if (keys[i][0] === item){
      isIt = 1;
      console.log(keys[i][0]);
      console.log(cart[i]);
      cart.splice(i, 1);
    }
  }
  if (isIt === 0){
      console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total();
  if (isNaN(cardNumber)){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;
  }
}
addToCart('lemons');
viewCart();
removeFromCart('lemon');
