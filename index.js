var cart = [];

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
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');
   return cart;
  }

function setCart(newCart) {
  cart = newCart;
}

function viewCart() {
  var cartView = [];

 if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
   } else {
   for (var i = 0; i < cart.length; i++) {
     for(var j in cart[i]) {
       cartView.push(`${j}`, 'at', `$${cart[i][j]}` + ',');
      }
     }
   }
   console.log('In your cart, you have ' + cartView.join(' ').replace(/,\s*$/, '.'));
 }

 function removeFromCart(itemToBeRemoved) {
    for(var i = 0; i < cart.length; i++) {
   for(var j in cart[i]) {
     if(cart[i].hasOwnProperty(itemToBeRemoved)) {
              cart.splice(i,1);
       return cart;
      }
    }
  }
  console.log('That item is not in your cart.');
 }

 function placeOrder(CCNumber) {
   if(CCNumber === undefined) {
     console.log('We don\'t have a credit card on file for you to place your order.');
   } else {
     console.log('Your total cost is $' + total() + ', which will be charged to the card ' + CCNumber + '.');
  }
  for(var i = 0; i < cart.length; i++) {
    cart.splice(i);
  }
 }
