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
 var price = Math.random() * 100;
 cart.push({"itemName": item, "itemPrice": price});
 return [`${item} has been added to your cart.`];
}

function viewCart() {
  // write your code here
  var i;
  var cartLength = Object.keys(cart).length;
  var cartContents = "In your cart, you have ";
  if (cartLength === 0) {
    return "Your shopping cart is empty.";
  } else {
    for (i=0; i < cartLength; i++) {
      if (i === cartLength - 1) {  
      cartContents = [`${cartContents} and ${cart[i].item} at ${cart[i].price},`];
      } else if (i === 0) {
        cartContents = [`${cartContents} ${cart[i].item} at ${cart[i].price}`];
      } else {
        cartContents = [`${cartContents} ${cart[i].item} at ${cart[i].price},`];
      }
    }
    return [`${cartContents}.`]  
  }
  // for (i=0; cartLength > i; i++) {
  //   // console.log(cartContents)
  //   cartContents = [`${cartContents} ${cart.item[i]} at ${cart.price[i]},`];
  //   if (cartLength > i) {
  //     cartContents = [`${cartContents} and `];
  //   } else { cartContents =[`${cartContents}. `]; 
  //     }
  // }
  // if (cartLength > 0) {
  //   return cartContents
  // } else {
  //   return "Your shopping cart is empty."
  // }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
bkjbll