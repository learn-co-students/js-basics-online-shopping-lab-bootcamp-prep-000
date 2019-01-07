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
 var itemPrice = Math.random() * 100;
 itemPrice = Math.floor(itemPrice);
 var itemName = item;
 var itemObject = {[itemName] : itemPrice};
 cart.push(itemObject);
 console.log(`${itemName} has been added to your cart.`);
 return cart
}

function viewCart() {
  // write your code here
  var cartLength = cart.length;
  var inYourCart = "In your cart, you have ";
  // For empty carts
  if (cartLength === 0) {
    return console.log("Your shopping cart is empty.")
  // For one-item carts
  } else if (cartLength === 1) {
    for (let i = 0; i < cartLength; i++) {
      var cartObject = cart[i]
      for (var key in cartObject) {
        var itemName = key;
        var itemPrice = cartObject[key];
        inYourCart = inYourCart + `${itemName} at $${itemPrice}.`;
      }
    } return console.log(`${inYourCart}`)
  // For two-item carts
  } else if (cartLength === 2) {
      for (let i = 0; i < cartLength; i++) {
        var cartObject = cart[i]
        for (var key in cartObject) {
          var itemName = key;
          var itemPrice = cartObject[key];
          var lastIndex = cartLength - 1;
          inYourCart = inYourCart + `${itemName} at $${itemPrice}`;
          if (i < lastIndex) {
            inYourCart = inYourCart + " and "
          } else {
            inYourCart = inYourCart + "."
          }
        }
      } return console.log(`${inYourCart}`)
  // For carts with 3 or more items}
} else if (cartLength >= 3) {
    for (let i = 0; i < cartLength; i++) {
      var cartObject = cart[i];
      for (var key in cartObject) {
        var itemName = key;
        var itemPrice = cartObject[key];
        var lastIndex = cartLength - 1;
        var secondLastIndex = cartLength - 2;
        inYourCart = inYourCart + `${itemName} at $${itemPrice}`;
        if (i < secondLastIndex) {
          inYourCart = inYourCart + ", ";
        } else if (i === secondLastIndex) {
          inYourCart = inYourCart + ", and ";
        } else if (i === lastIndex) {
          inYourCart = inYourCart + "."
        }
      }
    } return console.log(`${inYourCart}`)
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  var cartLength = cart.length;
  for (let i = 0; i < cartLength; i++) {
    var cartObject = cart[i];
    for (var key in cartObject) {
      var itemName = key;
      var itemPrice = cartObject[key];
      totalPrice = totalPrice + itemPrice;
    }
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var cartLength = cart.length;
  if (cartLength === 0) {
    console.log("That item is not in your cart.");
  }
  for (let i = cartLength - 1; i >= 0; i--) {
    var cartItem = cart[i];
    if (cartItem.hasOwnProperty(item)) {
      cart.splice(i, 1);
    } else {
      console.log("That item is not in your cart.");
    }
  } return cart
}

function placeOrder(cardNumber) {
  // write your code here
  var totalPrice = total();
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
  } cart = [];
  return cart;
}
