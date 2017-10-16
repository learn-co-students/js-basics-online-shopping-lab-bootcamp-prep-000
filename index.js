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
  cart.push({ [item]: price});

  console.log(`${item} has been added to your cart.`);

  return cart;
}


 function viewCart() {

   if (cart.length === 0) {
     return console.log("Your shopping cart is empty.");
   } else {
     var itemsAndPrices = [];

     for (var i = 0; i < cart.length; i++) {
       var itemAndPrice = cart[i]
       var item = Object.keys(itemAndPrice)[0]
       var price = itemAndPrice[item]

       itemsAndPrices.push(`${item} at \$${price}`)

     } if (cart.length === 1) {
        console.log(`In your cart, you have ${itemsAndPrices}.`);
     } else if (cart.length === 2) {
        console.log(`In your cart, you have ${itemsAndPrices.join(' and ')}.`);
        // 'In your cart, you have mango at $80andnuts at $45.'
     } else {
        itemsAndPrices[cart.length - 1] = `and ${itemsAndPrices[cart.length - 1]}`
        console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
        // 'In your cart, you have orange at $67, pear at $22, quince at $74.'
     }

   }

}

function total() {
  let t = 0

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t;
}

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
