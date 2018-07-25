var cart = [];

function getCart() {
 return cart;
}
console.log(getCart())

function setCart(c) {
  cart = c;
  return cart;
}
console.log(setCart())

function addToCart(item) {
  var p = Math.floor(Math.random() * 100 + 1);
  cart.push({itemName: item, itemPrice: p});
  return `${item} has been added to your cart.`
}

function viewCart() {
  getCart();
  setCart();
  var arr = [];
  for (let i = 0; i < cart.length; i++) {
    arr.push(`${(cart[i].itemName)} at ${(cart[i].itemPrice)}`);
    return arr;
    }
    if (arr.length = 0) {
      return 'Your shopping cart is empty.';
    }  else if (arr.length = 1) {
        return `In your cart, you have ${(arr[0])}.`;
    }   else if (arr.length = 2) {
          return `In your cart, you have ${(arr[0])}, and ${(arr[1])}.`;
    }     else if (arr.length > 3) {
            return `In your cart, your have ${arr.slice(0, cart.length - 1)}, and ${arr.slice(-1)}.`
    }
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
