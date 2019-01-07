var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push(new Object({[item]: Math.floor(Math.random()*100+1)}));
 console.log(`${item} has been added to your cart.`);
 return cart;
 }

 function viewCart() {
   if (cart.length > 0) {
     var statement = [];
     for (var i = 0; i < cart.length; i++) {
       statement.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
     }
   }else {
       console.log("Your shopping cart is empty.");
       return
     }
   if (statement.length === 1) {
        console.log(`In your cart, you have ${statement}.`);
      }else if (statement.length === 2){
         statement[statement.length - 1] = `and ${statement[statement.length - 1]}`;
         console.log(`In your cart, you have ${statement.join(" ")}.`);
       }else {
         statement[statement.length - 1] = `and ${statement[statement.length - 1]}`;
         console.log(`In your cart, you have ${statement.join(", ")}.`);
       }
         return
       }

function total() {
   var cost = 0;
  for(var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i]);
    cost = cost + cart[i][key];
  }
  return cost;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
    return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.splice(0);
  }else {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
  return cart;
}
