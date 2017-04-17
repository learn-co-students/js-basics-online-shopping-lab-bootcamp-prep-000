//original

var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  //var newItem = item[Math.floor(Math.random() * 100)]};
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price})
  //cart = [...cart, newItem];
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  var array = [];
   for (var i = 0; i < cart.length; i++) {
     for (var item in cart[i]) {
       array.push(`${item} at $${cart[i][item]}`);
     }
   }
   if (cart.length < 1) {
     console.log('Your shopping cart is empty.');
   } else {
     console.log(`In your cart, you have ${array.join(", ")}.`)
   }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}


  // if (cart.hasOwnProperty(item)){
  //   delete cart[item];
  //   return cart;
  // }
  // else {
  //   console.log("That item is not in your cart.")
  // }


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  }
  else {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  cart = [];
  cart.length = 0;
}
