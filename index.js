var cart = [];

function getCart() {
 return cart;
}

function log(description, message) {
  console.log(description+" => "+message);
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myobj={};
  var itemName="itemName";
  var itemPrice="itemPrice";
  myobj[itemName]=item;
  myobj[itemPrice]=Math.floor(Math.random()*100);
  cart.push(myobj);
  return myobj[itemName] + " has been added to your cart."; 
}

function viewCart() {
  var result="In your cart, you have ";
  if (cart.length<1) {
    result="Your shopping cart is empty.";
  } else {
    for (var i=0; i<cart.length; i++) {
      result = result + cart[i].itemName + " at $"+cart[i].itemPrice;
      if (i===(cart.length-1)) {
        result = result + ".";
      } else {
        result = result +", ";
      }
      if (i === (cart.length-2)) {
        result = result + "and ";
      }
    }
  }
  return result;
}

function total() {
  var result=0;
  for (var i=0; i<cart.length; i++) {
    result+=cart[i].itemPrice;
  }
  return result;
}

function removeFromCart(item) {
    var result=false;
    var num=0;
    for (var i=0; i<cart.length; i++) {
      if (item === cart[i].itemName) {
        result=true;
        num=i;
      }
    }
    if (result) {
      cart.splice(num, 1);
      return cart;
    } else {
      return "That item is not in your cart.";
    }
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined || cardNumber === null || cardNumber === 0) {
      return "Sorry, we don't have a credit card on file for you.";
    } else {
      var t=total();
      for (var i=0; i<cart.length; i++) {
        cart.pop();
      }
      return "Your total cost is $"+t+", which will be charged to the card "+cardNumber+".";
    }
}

function test() {
log("empty cart",viewCart());
addToCart("pumpkin");
log("cart with 1",viewCart());
addToCart("apples");
log("cart with 2",viewCart());
addToCart("staples");
log("cart with 3",viewCart());
removeFromCart("pumpkin");
log("cart after removing",viewCart());
}
test();