var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const itemPrice = Math.floor(Math.random() * 100 + 1);
  cart.push({ [item]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  getCart();
  var arr = [];
  console.log(arr);
  var keyArr = [];
  if(Object.keys(getCart()).length > 0){
  for(var c = 0; c < Object.keys(getCart()).length; c++){
    arr.push(Object.keys(getCart())[c]);
  }
}
  for(var a = 0; a < arr.length; a++){
    keyArr.push(Object.keys(getCart()[a]))
  }
  if(keyArr.length < 1){
    console.log("Your shopping cart is empty.");
  }
  if(keyArr.length === 1){
    console.log(`In your cart, you have ${keyArr[0]} at $${getCart()[0][keyArr[0]]}.`)
  }
  if(keyArr.length === 2){
      var contents2 = "In your cart, you have";
        for(var p = 0; p < keyArr.length - 1; p++){
          contents2 += ` ${keyArr[p]} at $${getCart()[p][keyArr[p]]}`;
        } for(var q = keyArr.length-1; q < keyArr.length; q++){
            contents2 += ` and ${keyArr[q]} at $${getCart()[p][keyArr[q]]}.`;
            console.log(contents2);
        }
      }
  if(keyArr.length > 2){
      var contents = "In your cart, you have";
        for(var i = 0; i < keyArr.length - 1; i++){
          contents += ` ${keyArr[i]} at $${getCart()[i][keyArr[i]]},`;
        } for(var j = keyArr.length-1; j < keyArr.length; j++){
            contents += ` and ${keyArr[j]} at $${getCart()[i][keyArr[j]]}.`;
        }
        console.log(contents);
  }
}

function total() {
  var totalprice = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemi = Object.keys(cart[i]);
    var itemPricei = cart[i][itemi];
    totalprice = totalprice + itemPricei
  }
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
    return console.log("Sorry, we don't have a credit card on file for you.")   }
   else {console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
    cart = [];
}
