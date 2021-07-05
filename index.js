var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var currentCart = {itemName: item, itemPrice: Math.floor(Math.random()*100)};
 cart.push(currentCart);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
    var itemAndPrice = []
    for (let i = 0; i<cart.length;i++) {
    if (i+1 != cart.length || i ===0){
    itemAndPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    } else { itemAndPrice.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
        }
return`In your cart, you have ${itemAndPrice.join(", ")}.`
}

function total() {
  var cartTotal = [];
  for (let i = 0; i<cart.length;i++){
    cartTotal.push(cart[i].itemPrice);
  }
//  function add(a,b){return a+b}
  //var sum = cartTotal.reduce(add,0);
  
 var sum = cartTotal.reduce(function(a, b) {
  return a + b})
  
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i<cart.length;i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
 }
 if (cart.indexOf(item) === -1) {
   return "That item is not in your cart.";
    }
 }

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  if (cardNumber !== undefined) {
  var sum = total()
  cart = []
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;  
}
}
