var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {[item]: Math.floor(Math.random() * 100)}
  cart.push(newObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var message = "";
  if(cart.length === 0 ) {
    message = "Your shopping cart is empty.";
  } else {
    message = "In your cart, you have ";
    if(cart.length === 1) {
      var key = Object.keys(cart[0])[0];
      message += `${key} at $${cart[0][key]}.`
    } else if(cart.length === 2) {
      for(let i = 0; i <cart.length; i++) {
        var key = Object.keys(cart[i]);
        if(i === cart.length - 1) {
          message += `and ${key} at $${cart[i][key]}.`;
        } else message +=`${key} at $${cart[i][key]} `;
      }
    } else if(cart.length > 2) {
      for(let i = 0; i <cart.length; i++) {
        var key = Object.keys(cart[i]);
        if(i === cart.length - 1) {
          message += `and ${key} at $${cart[i][key]}.`;
        } else message +=`${key} at $${cart[i][key]}, `;
      }
    }
  }
  console.log(message);
}

function viewCart() {
  var message = ""
  if(cart.length === 0) {
    message += "Your shopping cart is empty";
  } else {
    message += "In your cart, you have ";
    var itemList = [];
    cart.forEach(function(item) {
      var itemName = Object.keys(item)[0];
      itemList.push(`${itemName} at $${item[itemName]}`);
    })
    if(cart.length === 1) {
      message += itemList.join('');
    } else if (cart.length === 2) {
      message += itemList.join(' and ');
    } else {
      itemList[itemList.length -1] = `and ${itemList[itemList.length -1]}`;
      message += itemList.join(', ');
    }
  }
  message += '.';
  console.log(message);
}

function total() {
  var total = 0;
  for(let i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i]);
    total += cart[i][key];
  }
  console.log(total);
  return total;
}

function removeFromCart(item) {
  var exists = false
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      exists = true;
      cart.splice(i, 1);
    }
  }
  if(!exists) console.log("That item is not in your cart.")
  return cart;
}

function placeOrder(cardNumber) {
  if(typeof cardNumber === 'undefined') {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    // var total = total();
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];

  }
}
