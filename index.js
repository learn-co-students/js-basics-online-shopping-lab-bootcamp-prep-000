var cart;

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

function getCart() {
  return cart
}


function addToCart(item) {
let itemPrice = Math.floor(Math.random() * 100);
var obj = {};
var key = item;
 obj[key] = itemPrice;
cart.push(obj)
 console.log(`${item}` + " has been added to your cart.")
return cart
}

function viewCart() {
var newCart = [];
if (cart.length === 0) {
 console.log("Your shopping cart is empty.");
}else{
      for (var x = 0, j = cart.length;  x < j; x++) {
          for (var item in cart[x]) {

      newCart.push(`${item} at $${cart[x][item]}`)
    }
  }
  console.log("In your cart, you have " + newCart.join(", ") + ".")
}
}

function removeFromCart(item) {
  var isEmpty;

if (cart.length == 0) {
			isEmpty = "true";
        }  

for (var x = 0, j = cart.length; x < j; x++) {
    for (var currentItem in cart[x]) {

        if (cart[x].hasOwnProperty(item) == true) {
          cart.splice(x, 1);
          isEmpty = "not empty";
        }
        }
    }

if (isEmpty == "true" || isEmpty !== "not empty") {
          console.log("That item is not in your cart.")
        }
	return cart;
  }

function placeOrder(number) {
  var cc = number;

    if (cc == null) {
      console.log("We don't have a credit card on file for you to place your order.")
    }else{
      console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
      cart = [];
    }
    }
