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
 var itemPrice = Math.floor((Math.random()*100)+1)
 var itemNew = new Object ({[item]:itemPrice});
 cart.push(itemNew);
console.log(item + ' has been added to your cart.');
return cart;
}

function viewCart() {
  // write your code here
    if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
   }
   else if (cart.length === 1) {
     var item = cart[0];
     var itemKey = Object.keys(cart[0])[0];
     var itemPrice = item[itemKey];
     console.log('In your cart, you have ' + itemKey + ' at $' + itemPrice + '.');
   }
   else if (cart.length === 2) {
     var itemFirst = cart[0];
     var itemKeyFirst = Object.keys(cart[0])[0];
     var itemPriceFirst = itemFirst[itemKeyFirst];
     var itemSecond = cart[1];
     var itemKeySecond = Object.keys(cart[1])[0];
     var itemPriceSecond = itemSecond[itemKeySecond];
     console.log('In your cart, you have ' + itemKeyFirst + ' at $' + itemPriceFirst + ' and '+ itemKeySecond + ' at $' + itemPriceSecond + '.');
   }
   else {
     var itemOne = cart[0];
     var itemKeyOne = Object.keys(cart[0])[0];
     var itemPriceOne = itemOne[itemKeyOne];
     var cartList = 'In your cart, you have ' + itemKeyOne + ' at $' + itemPriceOne;
       for (var i = 1; i < cart.length - 1; i++) {
       var itemNext = cart[i];
       var itemKeyNext = Object.keys(cart[i])[0];
       var itemPriceNext = itemNext[itemKeyNext];
       cartList = cartList + ', ' + itemKeyNext + ' at $' + itemPriceNext;
     }
     var itemLast = cart[cart.length - 1];
     var itemKeyLast = Object.keys(itemLast)[0];
     var itemPriceLast = itemLast[itemKeyLast];
     console.log(cartList + ', and ' + itemKeyLast + ' at $' + itemPriceLast + '.');
     }
}


function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var nextItem = cart[i];
    var newItem = Object.keys(cart[i]);
    total = total + nextItem[newItem];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var i = 0;
  var itemInCart = 0;
    for (i = 0; i < cart.length; i++) {
    var nextItem = cart[i];
    var itemKey = Object.keys(cart[i])[0];
    if (itemKey === item) {
      cart.splice(i,1);
      itemInCart = 1;
    }
  }
  if (itemInCart === 1) {
    return cart;
  } else {
    console.log('That item is not in your cart.');
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return cart;
    }
  else {
    var totalCost = total();
    console.log('Your total cost is $' + totalCost + ', which will be charged to the card ' + cardNumber + '.');
    cart = [];
  }
}
