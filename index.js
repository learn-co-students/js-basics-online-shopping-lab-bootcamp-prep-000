var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // var Item = {
  //   name: item,
  //   price: function getRandomInt() {
  //     return Math.floor(Math.random() * Math.floor(100));
  //   }
  // }
  cart.push({[item]: Math.floor(Math.random() * 100)
  });
  console.log(item + ' has been added to your cart.');
  return cart;
};

 // write your code here


 function viewCart() {
   switch(cart.length) {
     case 0:
       length < 1;
       console.log('Your shopping cart is empty.');
       break;
     case 1:
       length === 1;
       console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $' + Object.values(cart[0]) + '.');
       break;


     case 2:
       length === 2;
       console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $' + Object.values(cart[0]) + ' and ' + Object.keys(cart[1]) + ' at $' + Object.values(cart[1]) + '.');
       break;


     default:
       length > 2;
       var list = 'In your cart, you have ';
       var cartSize = cart.length - 1;
       for (var i = 0; i < cart.length - 1; i++) {
         list += Object.keys(cart[i]) + ' at $' + Object.values(cart[i]) + ', ';
       }
       console.log(list + 'and ' + Object.keys(cart[cartSize]) + ' at $' + Object.values(cart[cartSize]) + '.');
       break;

   }
 }

 function total() {
   var sum = 0;
   for (var i = 0; i < cart.length; i++) {
     sum += Number(Object.values(cart[i]));
   }
   console.log('Total = $' + sum)
   return sum;
 }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      console.log(cart);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber.isNaN) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    // console.log('Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber);
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
