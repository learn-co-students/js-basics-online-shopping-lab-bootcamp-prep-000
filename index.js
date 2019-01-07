var cart = [];

  function randomInt() {
    return Math.floor(Math.random() * (100 + 1));
}


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 getCart().push({[item]: randomInt()});
 console.log(`${item} has been added to your cart.`);
 return getCart();
}

function viewCart() {
  if(cart.length === 0)
  {
     console.log("Your shopping cart is empty.");
     return ;
   }
  else {
    let arr = [];
    console.log("In your cart, you have ");
    for(let i = 0; i<cart.length-1; i++){
      arr[i] = `${cart[i]} at ${cart[i]}`;
    }
    console.log(`${arr.join(" and ")}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
