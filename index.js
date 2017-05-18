var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart(){
return cart
}

function addToCart(item){
var price = Math.floor(Math.random() * 100);
var obj = {[item]:price};
cart.push(obj);
console.log([item] + ' has been added to your cart.');
return cart
}

function viewCart() {
var haveAt = '';
if (cart.length > 0) {
for (var k = 0; k < cart.length-1 ; k++) {
//itemPairs += Object.keys(cart[k])[item] + ' at $'+cart[k][Object.keys(cart[k])[item]]+',';
//}
//var message = 'In your cart, you have '+ itemPairs.slice(0,itemPairs.length-1)+'.'
//itemPairs += Object.keys(cart[k])[item] + ' at $'+cart[k][Object.keys(cart[k])[item]]+',';
var haveAt = haveAt + Object.keys(cart[k])[0] + ' at $' + cart[k][Object.keys(cart[k])[0]] + ', ';
}
//var k = k + 1
var haveAt = haveAt + Object.keys(cart[k])[0] + ' at $' + cart[k][Object.keys(cart[k])[0]]
var message = 'In your cart, you have ' + haveAt + '.'
}
else {
var message = 'Your shopping cart is empty.'
}
return console.log(message)
}

function removeFromCart (item) {
for (var i=0; i < cart.length ; i++)
  if (cart[i].hasOwnProperty(item) === true){
     {
        cart.splice (i,1)
      }
    }
console.log("That item is not in your cart.")
return cart
}

function placeOrder(cardNumber){
  if (cardNumber === undefined) {
    var message = "We don't have a credit card on file for you to place your order."
  }
    else {
      var message = "Your total cost is $" + [total()] + ", which will be charged to the card " + [cardNumber]+ "."
//var message = ["Your total cost is $${total()}, which will be charged to the card ${cardNumber}."]
    }
    while(cart.length > 0) {
      cart.pop();
    }
  return console.log(message)
}
