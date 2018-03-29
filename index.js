var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 function num(){return Math.floor(Math.random() * 100)}
 var newObject = {itemName:item, itemPrice: num()};
 cart.push(newObject);
 return `${item} has been added to your cart.`
}
addToCart("beer")
addToCart("wine")
addToCart("water")

function viewCart() {
  if(cart.length===0){
    return `Your shopping cart is empty.`
  }else if(cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if(cart.length===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else if(cart.length>2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  var tota = 0;
  for(let i = 0; i < cart.length;i++){
    tota += cart[i].itemPrice;
  }
  console.log(cart)
  console.log(parseInt(tota))
  return tota
}
total();

function removeFromCart(item) {
  for(let b = 0; b < cart.length;b++){
    if(cart[b].itemName.toString() == item.toString()){
      cart.splice(b,1);
      console.log(cart)
      return cart
    }else{
      console.log('not found')
    }
  }
  return "That item is not in your cart."
}
removeFromCart("water")

function placeOrder(cardNumber) {
  if(cardNumber == null){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var tot = total();
    cart= [];
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
