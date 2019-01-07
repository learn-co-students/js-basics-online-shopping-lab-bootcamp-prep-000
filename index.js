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
 var itemPrice = Math.floor(Math.random() * 99) + 1;
 cart.push({[item]: itemPrice});
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if(cart.length === 1) {
    var itemAndPrice = cart[0];
    var item = Object.keys(itemAndPrice);
    var price = itemAndPrice[item];
    console.log(`In your cart, you have ${item} at $${price}.`)
  }
  var cartItems = [];
  for(var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice);
    var price = itemAndPrice[item];
    cartItems.push(`${item} at $${price}`);
  }

  switch(cartItems.length) {
    case 2:
      cartItems = cartItems.join(" and ");
      console.log(`In your cart, you have ${cartItems}.`)
      break;
    default:
      var threeAndMore = "";
      for(var i = 0; i < cartItems.length - 1; i++) {
        threeAndMore += cartItems.slice(i, i + 1);
        threeAndMore += ", ";
        console.log(threeAndMore);
      }
      threeAndMore += "and ";
      threeAndMore += cartItems[cartItems.length - 1];
      console.log(`In your cart, you have ${threeAndMore}.`)
  }
}

function total() {
  // write your code here
  var totalSum = 0;
  for(var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice);
    var price = itemAndPrice[item];
    totalSum += price;
  }
  return totalSum;
}

function removeFromCart(item) {
  // write your code here
  var numItems = 0;
  for(var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var cartItem = Object.keys(itemAndPrice);
    if(cartItem[0] === item) {
      cart.splice(i, 1);
    } else {
      numItems++;
    }
  }
  if(numItems === cart.length) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total();
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
