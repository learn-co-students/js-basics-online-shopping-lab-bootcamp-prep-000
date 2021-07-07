var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var object = {};
 object[item] = price;
 console.log(`${item} has been added to your cart.`);
 cart.push(object);
 return cart;
}

function viewCart() {
  if(cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else if(cart.length===1) {
      var itemObj = cart[0];
      var itemName = Object.keys(itemObj);
      var itemPrice = itemObj[itemName];
      console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  } else if(cart.length===2) {
    var itemOne = Object.keys(cart[0]);
    var priceOne = cart[0][itemOne];
    var itemTwo = Object.keys(cart[1]);
    var priceTwo = cart[1][itemTwo];
    console.log(`In your cart, you have ${itemOne} at $${priceOne} and ${itemTwo} at $${priceTwo}.`)
  } else {
    var string = "In your cart, you have ";
    for(var i=0;i<cart.length;i++) {
      var item = Object.keys(cart[i]);
      var price = cart[i][item];
      if(i != cart.length-1) {
        string = `${string}${item} at $${price}, `
      }
      else {
        string = `${string}and ${item} at $${price}.`
      }
    }
    console.log(string);
  }
}


function total() {
  var totalPrice = 0;
  for(var i=0;i<cart.length;i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    totalPrice += price;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var startLength = cart.length;
  for(var i=0;i<cart.length;i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
    }
  }
  if(cart.length===startLength) {
    console.log("That item is not in your cart.")
  }
  else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  var cost = total();
  if(cardNumber) {
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  cart = [];
}
