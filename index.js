var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var product = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
 }

 cart.push(product);
 return `${item} has been added to your cart.`
}

function viewCart() {

  if(cart.length > 0){
      if(cart.length === 1){
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      } else if(cart.length === 2){
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      } else if(cart.length > 2){
          var str = `In your cart, you have `;

          for(var i = 0; i < cart.length; i++){
            if(i !== cart.length - 1){
              str += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
            } else {
              str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
            }
        }
        return str;
      }
  } else {
    return `Your shopping cart is empty.`;
  }
}

function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum
  console.log(sum);
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      return cart.splice(i,1);
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return `Sorry, we don\'t have a credit card on file for you.`;
  };
}
