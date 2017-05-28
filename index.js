

/*for (var mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
}*/
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total(){
var t = 0;
for(var i = 0; i < cart.length; i++){
  var object = cart[i];
  var key = Object.keys(cart[i])[0]
  var price = object[key];
  t += price;
}
  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var cartItem = {[item]: Math.floor(Math.random()*100) }
  cart.push(cartItem)
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  let printItemsAndCost = 'In your cart, you have ';
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
  }else{
    for(var item in cart){
      for(var cost in cart[item]){
        printItemsAndCost += Object.keys(cart[item]) + ' at $' + cart[item][cost] + ', ';
    }
  }
}
  printItemsAndCost = printItemsAndCost.slice(0,printItemsAndCost.length-2).concat('.');
  console.log(printItemsAndCost);
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
