var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
addToCart("pizza");
function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100));
  var newItemObject = {"itemName" : `${item}`, "itemPrice" : price};
  cart.push(newItemObject);
  console.log(cart);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have";
  if (cart.length !== 0) {
    for (let i = 0; i < cart.length; i++){
      if (i === cart.length -1 && cart.length > 1){
        message += " and"
      }
     message += ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
     if (i < cart.length - 1){
       message += ","
     }else{
       message += ".";
     }
    }
  }else{
    message = "Your shopping cart is empty.";
  }
  return message;
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var isItemInCart = false;
  var itemIndex = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      isItemInCart = true;
      itemIndex = i;
    }
  }
  if (isItemInCart){
   cart.splice(itemIndex,1)
   return cart
  }else{
   return "That item is not in your cart." 
  }
}

function placeOrder(cardNumber) {
  if(cardNumber){
    let total = self.total()
    cart = []
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
