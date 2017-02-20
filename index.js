var cart = [];

//sets cart to array newCart
function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(purchaseItem) {
  //sets random price between 0 and 100
  var itemPrice = Math.floor(100*Math.random());

  //adds {item: price} to cart array
  cart.push({[purchaseItem]: itemPrice});
  console.log(`${purchaseItem} has been added to your cart.`);

  return cart;
}

//prints the carts individual contents and prices
function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var cartContents = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      var cartItem = cart[i];
      for (var contents in cartItem) {
        if (i < cart.length-1) {
          cartContents = cartContents + `${contents} at $${cartItem[contents]}, `;
        }
        else {
          cartContents = cartContents + `${contents} at $${cartItem[contents]}.`;
        }
      }
    }
    console.log(cartContents);
  }
}

//removes an item from the cart
function removeFromCart(itemName) {
  //cycles through the items in array
  var itemExists = false;
  for (var i = 0; i < cart.length; i++) {
    var cartItem = cart[i];
    if (cartItem.hasOwnProperty([itemName])) {
      itemExists = true;
      cart.splice(i, 1);
    }
  }
  if (itemExists === false) {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  cart = [];
}

//returns the cart total
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
