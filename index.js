var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart(){
  var itemsAndPrices = [];
  var l = cart.length;
  if(l != 0) {
      for (var i = 0; i < l; i++) {
        for(var item in cart[i]){
          itemsAndPrices.push(item + " at $" + cart[i][item]);
        }
      }
      console.log("In your cart, you have " + itemsAndPrices.join(', ') + ".");
      return;
  } else {
    console.log("Your shopping cart is empty.");
    return;
  }
  }


function removeFromCart(item) {
  var l = cart.length;
  var itemInCart = false
  for (var i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
  if (l === 0) {
    console.log("That item is not in your cart.");
  }
}

  //If the item isn't in the cart, the function should print out `"That item is not in your cart."`. If the item is in your cart, it should remove the object from the `cart` array. Then return the cart. (**HINT**: Check each object's key to see if it matches the parameter, then remove it if it matches. You might find [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to be useful.)


function placeOrder(cardNumber) {
  if(!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
  return cart = [];
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
