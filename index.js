var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += parseInt(cart[i][item]);
    }
  }

  return t;
}
function getCart() {
  return cart;
}
function addToCart(item) {
  const price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart() {
  if (cart.length===0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var string = "In your cart, you have ";
    for (var i=0, l=cart.length; i<l; i++){
      var item = Object.keys(cart[i])[0];
      if (i<l-1) {
        string = string + item + " at $" + cart[i][item] + ", ";
      }
      else {
        string = string + item + " at $" + cart[i][item] + ".";
      }
    }
    console.log(string);
  }
}
function removeFromCart(item) {
  var ch;
  for (var i=0, l=cart.length; i<l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      ch=1;
      break;
    }
    else {
      ch=0;
    }
  }
  if (ch===1) {
    cart.splice(i,1);
    return cart;
  }
  else {
    console.log("That item is not in your cart.");
  }
}
function placeOrder(num) {
  if(num) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
    cart=[];
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
