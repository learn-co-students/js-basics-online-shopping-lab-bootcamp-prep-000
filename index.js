var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100+1);
    cart.push({ [item]: price});
    console.log(`${item} has been added to your cart.`)
    return cart
}



function viewCart() {
  var itemsandprices = [];
  var intro = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var itemx = Object.keys(cart[i]);
    var pricex = cart[i][itemx];
    itemsandprices.push(itemx +' at $'+ pricex)  }
  if (cart.length === 0){console.log('Your shopping cart is empty.')}
  else if (cart.length === 1){console.log(`${intro} ${itemsandprices}.`)}

  else if (cart.length === 2){
    var dositems = itemsandprices.join(' and ')
    console.log(`${intro} ${dositems}.`)}
  else if (cart.length > 2){
    var beginning = itemsandprices.slice(0, -1).join(', ')
    var end = itemsandprices.slice(-1).join();
    console.log(`${intro} ${beginning}, and ${end}.`)}
}

function total() {
  var totalprice = 0
  for (var i = 0; i < cart.length; i++){
    var itemi = Object.keys(cart[i]);
    var pricei = cart[i][itemi];
    totalprice = totalprice + pricei }
  return totalprice
}

function removeFromCart(item) {
  var present = false
  if (cart.length > 0){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1)
      console.log(cart)
      present = true}}}
  if (present === false){console.log('That item is not in your cart.')}
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.")
   }
  else {console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
   cart = []
 }
