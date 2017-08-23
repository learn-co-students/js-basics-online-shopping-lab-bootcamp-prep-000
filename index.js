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
  const price = Math.floor(Math.random() * 100);
  cart.push({
    [item]: price
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  var arrItems = [];
  //if the cart is empty console.log
  if (!cart.length) {
    console.log('Your shopping cart is empty.');
    //else iterate throught cart
  } else {
    for (var i = 0; i < cart.length; i++) {
      //set the curent item
      var obj = cart[i];
      var item = Object.keys(obj)[0];
      var price = obj[item];
      //push in the array veery item with name and price
      arrItems.push(`${item} at $${price}`);
    }
  }

  //if the length of cart is 1 console.log
  if (cart.length === 1) {
    console.log(`In your cart, you have ${arrItems.join('')}.`);
    //if the length of cart is 2 console.log
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${arrItems.join(' and ')}.`);
    //if the length of cart is 3 pop the last item then push the last item changed
  } else if(cart.length >= 3){
    var last = 'and '.concat(arrItems[arrItems.length - 1]);
    arrItems.pop();
    arrItems.push(last);
    console.log(`In your cart, you have ${arrItems.join(', ')}.`);
  }

}

function total() {
  // write your code here
  var sum =0;
  for(var i=0;i<cart.length;i++) {
    for(var key in cart[i]){
      sum+=cart[i][key];
    }

  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false;
  for(var i=0;i<cart.length;i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      itemInCart = true;
    }
  }
  if(!itemInCart) {
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here

  if(cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
