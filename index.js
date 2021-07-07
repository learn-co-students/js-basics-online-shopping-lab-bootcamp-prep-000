var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var objectCart = {itemName: item, itemPrice: price};
  cart.push(objectCart)
  return `${objectCart.itemName} has been added to your cart.`

}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
else if(cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
}
else if (cart.length === 2) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
}
else {
  var tempList = [];
  for(let i = 0; i < cart.length; i++){
    tempList.push(" "+ cart[i].itemName + " at $"+cart[i].itemPrice);
  }
  var lastItem = tempList.pop();
  return `In your cart, you have${tempList}, and${lastItem}.`;
}
}

function total() {
  var cartTotal = 0;
  for(let i = 0; i < cart.length; i++){
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal
}

function removeFromCart(item) {
  var thisCart = "That item is not in your cart.";
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1)
      return cart
    }
  }
  return thisCart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
