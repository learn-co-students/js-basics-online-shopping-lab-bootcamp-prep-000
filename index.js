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
 var obj = {};
 obj[item]=Math.floor(Math.random() * 100) + 1;
 getCart().push(obj);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  var str = "";
  var oxford = " and "
  // write your code here
  if(getCart().length >= 3) {
    oxford = ", and "
  }
  if(getCart().length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    str = "In your cart, you have ";
    var count = getCart().length;
    for(let i = 0; i<getCart().length; i++) {
      var key = Object.keys(getCart()[i])
      if(count >= 3) {
        str+=`${key} at $${getCart()[i][key]}, `
      } else if (count === 2) {
        str+=`${key} at $${getCart()[i][key]}${oxford}`
      } else  {
        str+=`${key} at $${getCart()[i][key]}.`
      }
      count--;
    }
  }
  console.log(str);
}

function total() {
  // write your code here
  var total = 0;
  for(let i = 0; i < getCart().length; i++) {
    var key = Object.keys(getCart()[i])
    total += parseInt(getCart()[i][key]);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var flag = true;
  for(let i = 0; i<getCart().length;i++) {
    var key = Object.keys(getCart()[i])
    if(item == key) {
      getCart().splice(i,1);
      flag = false;
    }
  }
  if(flag === true) {
    console.log("That item is not in your cart.");
  }
  return getCart();
}

function placeOrder(cardNumber) {
  // write your code here
  if(typeof cardNumber === "number") {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    getCart().length = 0;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
