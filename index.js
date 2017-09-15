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
 var obj = {[item]:Math.floor(Math.random()*100)};
 cart.push(obj);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var desc
  if (cart.length ===0) {
    desc= "Your shopping cart is empty."
  }
  else {
   desc = "In your cart, you have";

    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      desc +=` ${item} at \$${cart[i][item]}`

      if (i<cart.length-1) {
        if (cart.length != 2) {
          desc+= ","
        }
        if(i=== cart.length-2){
          desc +=" and"
        }

      }
      }
    desc +="."


  }
  console.log(desc);
}


function total() {
  // write your code here
  var price = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    price += parseInt(cart[i][item]);
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0);
  }
}
