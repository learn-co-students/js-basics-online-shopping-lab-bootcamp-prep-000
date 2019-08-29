var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObject = {itemName:item,itemPrice:price };
  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`;
}

  function viewCart() {
 // write your code here
  if (cart.length === 0){
    return`Your shopping cart is empty.`
  } else if (cart.length === 1){
    var oneItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return oneItem;
  } else if (cart.length === 2){
    var twoItems = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
   return twoItems;
  } else {
    var cartData = []
    for (var i = 0; i < cart.length-1; i++){
      cartData.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
}
    var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  return threePlusItems;
}



function total() {
  // write your code here
  var t=0;
  for(var i = 0; i < cart.length; i++){
       t+= cart[i].itemPrice;
  }
     return t;
}

function removeFromCart(item) {
  // write your code here
     for (var i = 0; i <cart.length; i++) {
    if (cart[i].itemName===item) {
      cart.splice(i, 1);
          return cart;
    }  
  }
     return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber) {
  
   for (var i = cart.length; i>= 0; i--) {
     var newCart;
     newCart= `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
       cart.pop();
       return newCart;
    }
}
    else if (!cardNumber){
      return  `Sorry, we don\'t have a credit card on file for you.`
    }

}

