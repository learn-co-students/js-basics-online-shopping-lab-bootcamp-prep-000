var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 var item_object = {};
 item_object[item] = price
 cart.push(item_object)
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
   var cartKeys = [];
   var cartPrice = [];
   for (let i = 0; i < cart.length; i++) {
   cartKeys.push(Object.keys(cart[i])[0]);
   }

   for (let i = 0; i < cart.length; i++) {
   cartPrice.push(cart[i][cartKeys[i]]);
  }

  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
}

  if (cart.length === 1) {
     console.log(`In your cart, you have ${cartKeys[0]} at $${cartPrice[0]}.`);
}

  if (cart.length === 2) {
      console.log(`In your cart, you have ${cartKeys[0]} at $${cartPrice[0]} and ${cartKeys[1]} at $${cartPrice[1]}.`);
}

if (cart.length >= 3) {
     var twoOrMore = `In your cart, you have`;
     for (let i = 0; i < cart.length; i++) {
     twoOrMore += ` ${cartKeys[i]} at $${cartPrice[i]},`;
     }
     var threeOrMore = twoOrMore.slice(0,twoOrMore.length - 1);
     threeOrMore = threeOrMore.replace(/,([^,]*)$/,"\, and$1");
     threeOrMore += '.';
     console.log(`${threeOrMore}`);
     }
 }


function total() {
  var totalItems = 0;
  var cartKeys = [];
  var cartPrice = [];
for (var i = 0; i < cart.length; i++) {
  cartKeys.push(Object.keys(cart[i])[0]);
}
for (let i = 0; i < cart.length; i++) {
  cartPrice.push(cart[i][cartKeys[i]]);
}
for (var i = 0; i < cart.length; i++) {
  totalItems += cartPrice[i];
}
return totalItems;
}

function removeFromCart(item) {
  var itemInCart = false
    for(var i = 0; i < cart.length; i++){
     if (cart[i].hasOwnProperty(item)) {
        itemInCart = true;
     cart.splice(i, 1);
}
   }
   if (!itemInCart) {
      console.log("That item is not in your cart.");
   }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var totalOrder = total();
    console.log(`Your total cost is $${totalOrder}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
