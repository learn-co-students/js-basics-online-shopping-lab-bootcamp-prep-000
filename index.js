var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
  
function addToCart(name){
  var dict={"itemName": name, "itemPrice": Math.random()*100};
  cart.push(dict);
  return (name+" has been added to your cart.")
}

function total() {
  var Value = 0;
  for (var i = 0; i<cart.length; i++){
    Value = Value + cart[i].itemPrice}
  return Value
}
function removeFromCart(item) {
  var identifier = false
  for(var i=0; i<cart.length; i++){
    if(item==cart[i].itemName){
      identifier = true;
      cart.splice(i,1)
      return cart}
    else{
      continue;}}
  if(identifier===false){
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  var a = parseFloat(total());
  if(!cardNumber){
    return ("Sorry, we don't have a credit card on file for you.")}
  else{
    cart.length=0;
    return`Your total cost is $` + a + `, which will be charged to the card `+ cardNumber +"."
  }
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty."
  }else if(cart.length==1){
    var myString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    return myString+`.`;
  }else if(cart.length==2){
    var myString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    return myString+`, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }else{
    var myString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    for(var i = 1; i<cart.length - 1; i++){
      myString = myString + `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      //return breaking out
    }
    return myString + ", and " + cart[cart.length-1].itemName + " at $" +cart[cart.length-1].itemPrice+"."
  }  
}