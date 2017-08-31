var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//ADD ITEMS TO CART - done 
function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var newItem = {[item]: price};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart
}

//VIEW CART CONTENTS - done
function viewCart() {
  var insert = [];

  for (var i = 0; i < cart.length; i++) {
      var cartObj = cart[i];
      var item = Object.keys(cartObj);
      var price = cartObj[item];
      var group = `${item} at $${price}`
      insert.push(group);
  }

  if (cart.length === 0) {
     console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
     console.log(`In your cart, you have ${insert[0]}.`);
  } else if (cart.length === 2) {
     console.log(`In your cart, you have ${insert[0]} and ${insert[1]}.`);
  } else {
     var last = insert.pop();
     console.log(`In your cart, you have ${insert.join(', ')}, and ${last}.`);
  }
}

//CART TOTAL - done
function total() {
  var getTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var cartObj = cart[i];
    var item = Object.keys(cartObj);
    getTotal += cartObj[item];
  }
  return getTotal;
}

//REMOVE ITEM FROM CART - bug: spy was never called
function removeFromCart(item) {
  var matchedItem = false;
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
      matchedItem = true;
    }
    if (!matchedItem) {
      console.log('That item is not in your cart.');
    }
    else {
      return cart;
    }
  }
}

//PLACE ORDER - bug: spy was never called
function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to card ${cardNumber}.`);
  }
  cart = [];
}




