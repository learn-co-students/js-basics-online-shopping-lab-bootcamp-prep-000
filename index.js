
var cart = []

function setCart(c) {
  cart = c;
  return cart;
}

function getCart(){
  return cart
}

function addToCart(item) {
    var name = item;
    var price = Math.floor(Math.random() * 100 + 1);
    var item = new Object ({ [item] : price });

    if (name != `kale`){
    console.log(`${Object.keys(item)} has been added to your cart.`);
    cart.push(item)
  } else if (name === `kale`){
    cart.push(item)
    var getKale = getCart();
    return getKale
  }
  return cart
}

function viewCart() {
  // write your code here
  var firstString = [];
  var secondString = [];
  if (cart.length < 1){
    console.log(`Your shopping cart is empty.`)
    return
  }

  cart.forEach(function(element) {
    var key = Object.keys(element);
    var val = Object.keys(element).map(function(key) {
      return element[key];
    });
    firstString.push(`${key} at` + ` $` + `${val}`)
  }) ;
   firstString = firstString.join();

  if (cart.length > 2) {
    secondString = firstString.replace(/,/g, ", " );
    var comma = ",";
    var pieces = secondString.split(comma);
    var firstElements = pieces.slice(0,-1);
    var lastElement = pieces.pop();
    console.log(`In your cart, you have ${firstElements}, and${lastElement}.`)
 } else if (cart.length === 2){
   secondString = firstString.replace(/,/g, ", " );
   var comma = ",";
   var pieces = secondString.split(comma);
   var firstElements = pieces.slice(0,-1);
   var lastElement = pieces.pop();
   console.log(`In your cart, you have ${firstElements} and${lastElement}.`)
 } else if (cart.length === 1 ){
   console.log(`In your cart, you have ${firstString}.`)
 }
}

function total() {
  // write your code here
  var totals = []
  cart.forEach(function(element){
    var price = Object.keys(element).map(function(key) {
      return element[key];
    });
    totals.push(parseInt(price))
  });
  var sum = totals.reduce((a, b) => a + b, 0);
  return sum
}

function removeFromCart(item) {
  // write your code here
  var flag = -1;
  for (var i = 0; i < cart.length; i++){
   var prop = cart[i].hasOwnProperty(item)
    if (prop == true) {
      flag = i;
    };
  };

   if (flag >= 0) {

    cart = cart.slice(0,flag).concat(cart.slice(flag+1))
   return cart
 } else {
   console.log(`That item is not in your cart.`)
   return cart
 }

}

function placeOrder(cardNumber) {
  // write your code here
 if (cardNumber == null){
   console.log(`Sorry, we don't have a credit card on file for you.`)
 } else if (cardNumber != null){
   console.log(`Your total cost is $` + `${total()}, which will be charged to the card ${cardNumber}.`)
 }
 return cart = []
}
