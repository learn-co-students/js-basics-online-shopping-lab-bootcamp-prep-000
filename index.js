var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var item = item
  var x = ({[item]: price})
  cart.push(x)
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  if (cart.length===0) {
    console.log('Your shopping cart is empty.');
  } else {
    var currentString = "In your cart, you have ";
    for(var i=0;i<cart.length;i++){

          var currentItem = Object.getOwnPropertyNames(cart[i]);
          var currentPrice = cart[i][currentItem];
          if(i === cart.length-1 && cart.length === 1){
            currentString += (`${currentItem} at $${currentPrice}.`)
          }else if(i<cart.length-1 && cart.length == 2){
          currentString += (`${currentItem} at $${currentPrice} `)
          }else if(i<cart.length-1 && cart.length != 1){
            currentString += (`${currentItem} at $${currentPrice}, `)
          }else{
            currentString += (`and ${currentItem} at $${currentPrice}.`)
        }
      }
        console.log(currentString)
      }
}

function total() {
  var total = 0
  for (var i=0;i<cart.length;i++) {
    var currentItem = Object.getOwnPropertyNames(cart[i]);
    var currentPrice = cart[i][currentItem];
    total += currentPrice
  }
  return total
}

function removeFromCart(item) {
  var itemExists = false;
for (var i = 0; i<cart.length;i++) {
  var currentItem = Object.getOwnPropertyNames(cart[i]);
  var currentPrice = cart[i][currentItem];
if (currentItem == item) {
  cart.splice(i, 1)
  itemExists = true;
}
}
if (itemExists == false){
console.log('That item is not in your cart.');
return cart
}
}



function placeOrder(cardNumber) {
  if (cardNumber===undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    var cost = total()
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
