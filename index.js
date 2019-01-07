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
 var newItem = {[item]: Math.floor(Math.random()*100 + 1)};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
  }
   else if (cart.length === 2) {
     console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`);
   } else if (cart.length > 2) {
     var cartList = [];
     cartList.unshift(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`);
     for (let i = 1; i < cart.length - 1; i++) {
       cartList.push(` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`);
     }
     cartList.push(` and ${Object.keys(cart[cart.length -1])[0]} at $${cart[cart.length -1][Object.keys(cart[cart.length - 1])[0]]}.`);
     console.log(cartList.toString());
   }
  
    
    
  }


function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      delete cart[i];
      return cart;
    } else {
      console.log("That item is not in your cart.");
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
