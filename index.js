var cart;

var cart = []; // i added
var item; // i added
var price = Math.floor(Math.random()*100); // i added

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

//provided already above this line; below i added

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({item:price});
  console.log(`${[item]} has been added to your cart.`);
  return cart;
}

//`${cart[i]} at $${price}`


//adding if statement:

// function viewCart() {
//   var purchase = [];
//     for (var key in cart) {
//       purchase.push(` ` + cart[key] + ` at $` + key);
//     } if (cart.length === 0) {
//       console.log(`Your shopping cart is empty.`);
//     } else
//     console.log(`In your cart, you have` + purchase + `.`)
// }

//what some other dude has:::

// function viewCart() {
//   if (cart === []) {
//     console.log(`Your shopping cart is empty.`);
//   } else {
//     for (var cartItem in cart) {
//       console.log(`In your cart, you have ${cartItem} at $${cart[cartItem]}`);
//     }
//   }
// }

// new way, with object literals::

function viewCart() {
  var purchase = [];
    for (var index in cart) {
      var itemObject = cart[index];
      var itemKey = Object.keys(itemObject)[0];
      var itemValue = itemObject[itemKey];
      purchase.push(`${itemKey} at \$${itemValue}`);
    }
    console.log(`In your cart, you have ${purchase.join(', ')}.`)
}

//new way

// function viewCart() {
//   var purchase = [];
//     for (var index in cart) {
//       var itemObject = cart[index];
//       var itemKey = Object.keys(itemObject)[0];
//       var itemValue = itemObject[itemKey];
//       purchase.push(` ` + itemKey + ` at $` + itemValue);
//     } console.log(`In your cart, you have ` + purchase.join(', ') + `.`)
// }


//
//best so far: <<<<<<<---------

// function viewCart() {
//   var purchase = [];
//   //var itemsInCart = Object.keys(cart[index]);
//
//     for (var index in cart) {
//       purchase.push(` ` + cart[index] + ` at $` + price);
//     } console.log(`In your cart, you have` + purchase + `.`)
// }
// viewCart(); // delete this




//
// function viewCart() {
//   var purchase = [];
//   for (var i = 0; i < cart.length; i++) {
//     for (var key in cart[i]) {
//       purchase.push(` ` + cart[i] + ` at $` + key);
//     }
//   } console.log(`In your cart, you have` + purchase + `.`)
// }
//
