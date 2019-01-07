var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  // cart.push( Object.assign({},  { [item]: price }) );
  cart.push({[item]: price});
  // cart.push(Object.assign({}, cart, {[item]: price}));
  console.log(`${item} has been added to your cart.`); // Object.keys(cart[cart.length-1])[0]
  return cart;
}

function viewCart() {
  // In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  let str = "In your cart, you have "
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length < 2) {
      for (let i in cart[0]) {
        str += i + " at $" + cart[0][i] + ".";
      }
      console.log(`${str}`)
  } else if (cart.length < 3) {
      for (let i = 0, j = cart.length; i < j; i++) {
        for (let k in cart[i]) {
          if (i < j-1) {
            str += `${k} at $${cart[i][k]} `;
          }
          else {
            str += `and ${k} at $${cart[i][k]}.`;
          }
        }
      }
      console.log(`${str}`);
  } else {
      for (let i = 0, j = cart.length; i < j; i++) {
        for (let k in cart[i]) {
          if (i < j-1) {
            str += `${k} at $${cart[i][k]}, `;
          }
          else {
            str += `and ${k} at $${cart[i][k]}.`;
          }
        }
      }
      console.log(`${str}`);
  }
}

function total() {
  // total value of items returned
  let total = 0;
  for (let i = 0, j = cart.length; i < j; i++) {
    for (let k in cart[i]) {
      total += cart[i][k];
    }
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0, j = cart.length; i < j; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
   }
   console.log("That item is not in your cart.");
   return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || !cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    let totalVal = total();
    console.log(`Your total cost is $${totalVal}, which will be charged to the card ${cardNumber}.`);
    //cart.length = 0;
    cart = [];
  }
}
