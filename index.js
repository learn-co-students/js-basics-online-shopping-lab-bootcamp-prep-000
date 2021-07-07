var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(itemName) {
 cart.push({itemName,  itemPrice: Math.floor(Math.random() * 100)});
 return `${itemName} has been added to your cart.`;
}



function viewCart() {
 let cartView = `In your cart, you have`
 for (var i = 0; i < cart.length; i++){
   if (cart.length === 0) {
    console.log(`Your cart is currently empty.`);
   } else if (cart.length === 1) {
   console.log(cartView += `${cart[i].itemName} at ${cart[i].itemPrice}`);
 } else {
   let lastIndex = cart.length - 1; 
   console.log(cartView += `${cart[i].itemName} at ${cart[i].itemPrice}, and ${cart[lastIndex].itemName} at ${cart[lastIndex].itemPrice}. `)
 }
 }
}

function total() {}

function removeFromCart(toBeRemoved) {}  
  
function placeOrder(cardNumber){}
 
