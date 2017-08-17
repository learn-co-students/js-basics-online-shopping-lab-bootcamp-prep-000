var cart = [];

function getCart() {
 return cart;
}


function setCart(c) {
  cart = c;
  return cart;
}

function rightI(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  cart.push({[item]: rightI(1, 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}




function viewCart() {
  var inYourCart = [];
    for(let i = 0; i < cart.length; i++) {
      inYourCart.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    if(cart.length === 0){
    console.log(`Your shopping cart is empty.`)}
      else if(cart.length === 1) {
          console.log(`In your cart, you have${inYourCart}.`);

        }  else if(cart.length === 2) {
          console.log(`In your cart, you have${inYourCart[0]} and${inYourCart[1]}.`);

        }  else if (cart.length > 2) {
          console.log(`In your cart, you have${inYourCart.slice(0, inYourCart.length - 1)}, and${inYourCart.slice(-1)}.`);


}
}

function total(){
var cartTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    cartTotal += cart[i][Object.keys(cart[i])];

  }
  return cartTotal;
}

function removeFromCart(item) {
for(var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
    return cart;
  }
}
console.log(`That item is not in your cart.`);

}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart=[];
  }
}
placeOrder()
viewCart()
console.log()
