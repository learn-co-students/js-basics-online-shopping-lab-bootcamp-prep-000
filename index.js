var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(itemName) {
    cart.push({itemName, itemPrice: (Math.floor(Math.random() * 100))});
    return `${itemName} has been added to your cart.`
 }

//


function viewCart() {
   if (!cart.length) return 'Your shopping cart is empty.';
  let whole = `In your cart, you have`
   if (cart.length === 1) return whole += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  cart.forEach((itemObject, index) => { 
    let {itemName, itemPrice} = itemObject;
    if (index === cart.length - 1) {
        whole += ` and ${itemName} at $${itemPrice}.`;
      } else if (index < cart.length - 2) {
        whole +=` ${itemName} at $${itemPrice},`
        } else {
        whole +=` ${itemName} at $${itemPrice},`;
      }
      });
      return whole;
  // write your code here
}

function total() {
  var i = 0;
  var prices = [];
  while (i < cart.length){
    prices.push(cart[i].itemPrice);
    i++;
  }
  let all = prices.reduce((a, b) => a + b);
  return all; 
  // write your code here
}

function removeFromCart(toBeRemoved) {     
   let newCart = cart.filter(item => item.itemName !== toBeRemoved);
    if (newCart.length === cart.length) {
    return 'That item is not in your cart.'; 
    }
    cart = newCart;
     return cart; 
     }

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don\'t have a credit card on file for you.";
  } else {
   let newTotal = total();
   cart = [];
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`;
}
}
