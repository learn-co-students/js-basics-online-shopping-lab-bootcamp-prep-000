var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var myObject = {};
 myObject[item] = Math.floor(Math.random() * Math.floor(101));
 cart.push(myObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  let message = 'In your cart, you have ';
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    message += `${cart[0].itemName}`
  }
  
  // for(let i=0; i < cart.length; i++){
  //   if(i != (cart.length - 1)) {
  //     message += `${cart[i].itemName} at $ ${cart[i].itemPrice},`;
  //   } else {
  //     message += ` and ${cart[i].itemName} at $ ${cart[i].itemPrice}.`;
  //   }
  // }
  
  console.log(message);
}

function total() {
  // write your code here
  let somme = 0;
  for(let i = 0; i < cart.length; i++) {
    somme += cart[i].itemPrice;
  }
  return somme;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
