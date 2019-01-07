var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]:~~(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  if(!cart.length) return console.log("Your shopping cart is empty.");
  var a = "In your cart, you have ";
  var strs = []
  for(var i in cart){
    var item = Object.keys(cart[i])[0];
    var cost = cart[i][item]
    strs.push(`${item} at $${cost}`)
  }
  var final = ""
  if(strs.length == 1) final = strs[0];
  else if(strs.length == 2) final = strs.join(" and ");
  else {
    strs[strs.length - 1] = "and " + strs[strs.length - 1];
    final = strs.join(", ")
  }

  var retValue = a + final + ".";
  console.log(retValue);
  return retValue;

}

function total() {
  var total = 0
  for(var i in cart){
    var sub = Object.values(cart[i])[0]
    total = total + parseInt(sub);
  }
  return total
  // write your code here
}

function removeFromCart(item) {
  console.log(cart);
  for(var i in cart){
    if(cart[i][item]) {
      console.log(i);
      cart.splice(i,1); return;
      }
  }
  console.log('That item is not in your cart.')
  // write your code here

  console.log(cart);
}

function placeOrder(cardNumber) {
if(!cardNumber) return console.log('Sorry, we don\'t have a credit card on file for you.');

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  // write your code here
}
//addToCart('poop')
//addToCart('grass')
//addToCart('emily')
//removeFromCart('grass')
//console.log(cart)
