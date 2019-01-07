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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*10);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0)
    console.log("Your shopping cart is empty.");
    else {
      var str = "In your cart, you have";
      for(let i=0,l=cart.length;i<l;i++) {
        for(var item in cart[i]) {
          str+=` ${item} at $${cart[i][item]}`;
          if(i<l-1)
            str+=",";
        }
      }
      str+=".";
      console.log(str);
    }
}

function removeFromCart(itemToBeRemoved) {
  var removed = false;
  for(let i=0,l=cart.length;i<l;i++) {
    for(var item in cart[i]) {
      if(item === itemToBeRemoved) {
        //delete cart[i];
        cart.splice(i,1);
        removed = true;
      }
    }
    if(!removed)
      console.log("That item is not in your cart.");
    return cart;
  }
}

function placeOrder(creditCardNumber) {
  if(arguments.length === 0)
    console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total}, which will be charged to the card ${creditCardNumber}`);
    cart.splice(0);
  }
}
