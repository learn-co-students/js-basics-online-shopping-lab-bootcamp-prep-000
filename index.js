var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var i = cart.length
 var pushcart = {};
 pushcart[item] = Math.floor(Math.random() * 100 + 1);
 cart[i] = pushcart;
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var i = cart.length;
  var ai = cart.length;
  var atKeys = [];
  var atValues= [];
  var atObject= {};
  for (; i > 0; --i) {
    atKeys.unshift (Object.keys (cart[i-1]));
    }
    console.log (atKeys);
  for (; ai > 0; --ai) {
    atObject = cart[ai-1];
    atValues.unshift (atObject[atKeys[ai-1]]);
    }
    console.log (atValues);
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length == 1) {
    console.log(`In your cart, you have ${atKeys[0]} at $${atValues[0]}.`);
  }
  else if (cart.length == 2) {
    var atStringArray = [];
    var bi = cart.length;
    for (; bi > 0; --bi) {
      atStringArray.unshift(`${atKeys[bi-1]} at $${atValues[bi-1]}`);
    }
    atStringArray = atStringArray.join(' and ');
    console.log(`In your cart, you have ${atStringArray}.`);
  }
  else if (cart.length >= 3) {
    var atStringArray2 = [];
    var ci = cart.length;
    for (; ci > 0; --ci) {
      atStringArray2.unshift(`${atKeys[ci-1]} at $${atValues[ci-1]}`);
    }
    var lastItem = atStringArray2.pop();
    atStringArray2= atStringArray2.join(", ")
    console.log(`In your cart, you have ${atStringArray2}, and ${lastItem}.`);

  }
}

function total() {
  var totalValue = 0;
  var i = cart.length;
  for (; i > 0; --i) {
    var itemPair = cart[i-1];
    for (var x in itemPair);
    var addPrice = itemPair[x];
    var totalCart = totalValue + addPrice;
      totalValue = totalCart;
    }
    return totalCart;
  }

  function removeFromCart(item) {
    var i = cart.length;
      for (; i > 0; --i) {
      var objItem = cart[i-1];
      var checkItem = Object.keys(objItem);
      if (checkItem[0] == item) {
        cart.splice(i-1, 1);
        return cart;
      }
    }
    if (i == 0) {
      console.log ("That item is not in your cart.");
    }
  }
function placeOrder(cardNumber) {
  if (cardNumber == null ) {
    console.log ("Sorry, we don't have a credit card on file for you.");
  }
  else {
    var totalCart = total();
    console.log (`Your total cost is $${totalCart}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
