var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * (100 - 1) + 1);
  var product = {[item]: itemPrice};
  var cart = getCart();
  cart.push(product);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(getCart().length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cart = getCart();
    var p = "In your cart, you have";
    var arr = [];
    var xyz = [];
    for(var key in cart) {
      if (cart.hasOwnProperty(key)) {
        xyz.push(Object.keys(cart[key])[0]);
      }
    }
    for (var i = 0; i < cart.length; i++) {
      arr.push(Object.keys(cart[i])[0] + " " + "at" + " " +"$"+ (cart[i][xyz[i]]) );
    }
    if (cart.length == 1) {
      console.log(`${p} ${arr}.`);
    } else if (cart.length == 2) {
      console.log(`${p} ${arr.join(" and ")}.`);
    } else if (cart.length >= 3) {
      var lastProduct = arr.pop();
      var output = arr.join(', ') + ',' + ' and ' + lastProduct;
      console.log(`${p} ${output}.`);
      }
    }
}

function total() {
  var cart = getCart();
  var arr = [];
  var xyz = [];
  for(var key in cart) {
    if (cart.hasOwnProperty(key)) {
      xyz.push(Object.keys(cart[key])[0]);
    }
  }
  for (var i = 0; i < cart.length; i++) {
    arr.push(cart[i][xyz[i]] );
  }
  var total = 0;
  for(var i in arr) {
    total += arr[i];
  } return (total);
}

function removeFromCart(item) {
  var cart = getCart();
  for (var key in cart) {
  var subCart = cart[key];
  for (var subKey in subCart) {
	  if (subCart.hasOwnProperty(subKey) && item === subKey){
	 	   cart.splice(key, 1);
 		    console.log (cart);
        getCart();
		}
  }
  } if(item !== subKey){
        console.log ("That item is not in your cart.");
    }
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber === undefined) {
    console.log ("Sorry, we don't have a credit card on file for you.");
  }
  if (cardNumber !== undefined && cardNumber === cardNumber) {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
  cart.length = 0;
}
