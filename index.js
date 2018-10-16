var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var obj = {'itemName':item, 'itemPrice':Math.floor(Math.random()*100)+1};
cart.push(obj);
return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartContents=[];
  switch (cart.length){
    case 0:
      return 'Your shopping cart is empty.';
    case 1:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    case 2:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    default:
        for (var i=0;i<cart.length-1;i++) {
        cartContents.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
        }
      return `In your cart, you have ${cartContents.join(', ')}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
}

function total() {
  var sum=0;
  for (var i = 0; i < cart.length; i++) {
  sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
   for (var i=0;i,cart.length;i++) {
     if (item===cart[i].itemName){
       cart.splice(i,1)
       return viewCart();
     }
   }
    return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===''){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
  cart=[];
}

//      return `In your cart, you have ${cartContents}.join(', ')`
