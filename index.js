
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {
    itemName: `${item}`,
    itemPrice: (Math.random()).toFixed(2)*100
  };
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  let currentCart=""; 
  if (cart.length===0) {
   return 'Your shopping cart is empty.';
  } else if (cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length>1) {
     for (let i=0; i<cart.length-1;i++) {
     currentCart+=(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
     }
  } return `In your cart, you have ${currentCart}and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
}

function total() {
  let total = 0;
  for (let i=0;i<cart.length;i++) {
    total+=cart[i].itemPrice;
  } return total;
}

function removeFromCart(item) {
  let removed=""
  for(let i=0; i<cart.length;i++) {
    if (item===cart[i].itemName) {
      removed = cart.splice(i,1);
    } 
    }if (removed!==item) {
      return "That item is not in your cart.";
    }
    
}
/*5. The `placeOrder()` function accepts one argument, a credit card number.
    + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
    + If a card number is received, the function should
      + empty the `cart` array
      + return `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`)
      */

function placeOrder(cardNumber) {
  let totalPrice = total();
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else{
    cart=[];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
}
}