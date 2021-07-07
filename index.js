var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
   var name = {itemName:item, itemPrice: (Math.floor(Math.random()* Math.floor(100)))}
   getCart().push(name)
   return `${name.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length < 1){
    return `Your shopping cart is empty.`;
  }
  var string = "In your cart, you have ";
    var formattedCart = []
    for (var i = 0; i < cart.length; i++){

    formattedCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 1){
    return (string + formattedCart.join(", ") + '.');
  } else if (cart.length === 2){
    var end = formattedCart.pop();
    return (`${string}${formattedCart}, and ${end}.`);
  } else {
    var end = formattedCart.pop();
    return (`${string}${formattedCart.join(", ")}, and ${end}.`)
  }
};

function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemPrice){
      sum = sum += cart[i].itemPrice ;
    }
  }

  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
      if (cart[i].itemName == item){
        cart.splice(i, 1);
      }
}
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
var cardString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  if (cardNumber > 0) {
       cart.length = 0;
        return cardString;
  } else {
      return "Sorry, we don't have a credit card on file for you.";
    }
}
