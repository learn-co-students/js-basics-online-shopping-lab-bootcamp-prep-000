var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item] : Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var cartItems = ["In your cart, you have "]

   if (cart.length === 0) {
     console.log("Your shopping cart is empty.")

    } else if (cart.length === 1) {
     cartItems.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)

    } else if (cart.length === 2) {
      cartItems.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} `+
      `and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)

    } else if (cart.length > 2) {
      for (var i = 0; i < cart.length-1; i++) {
        cartItems.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `);
      };
      cartItems.push(`and ${Object.keys(cart[cart.length-1])[0]} at ` +
    `$${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`);
    };

   console.log(cartItems.join(""));

return cartItems.join("");
}
function total() {
 var total = 0
 for(let i = 0; i < cart.length; i++) {
   var item_name = Object.keys(cart[i])
   var price = parseInt(cart[i][item_name])
   total += price
 }
 return total
}

function removeFromCart(item) {
 for (let i = 0; i < cart.length; i++) {
   if(cart[i].hasOwnProperty(item)){
     cart.splice(i,1);
     return cart;
   }
 }
 console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.splice(0);
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
return cart
}
