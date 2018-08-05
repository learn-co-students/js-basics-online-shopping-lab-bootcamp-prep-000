var cart = [

];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor((Math.random() * 100) + 1);
  cart.push({['itemName']: item, ['itemPrice']: price});
  return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
      return 'Your shopping cart is empty.';
  }
let newArray = [];
  for(let i = 0; i < cart.length; i++) {
    let item2 = cart[i].itemName;
    let price2 = cart[i].itemPrice;
    newArray.push(`${item2} at $${price2}`);
  }
      let announce = 'In your cart, you have ';
      if(cart.length === 1) {
        return `${announce}${newArray}.`;
      }else if(cart.length === 2) {
        return `${announce}${newArray[0]}, and ${newArray[1]}.`;
      }else if(cart.length > 2) {
        return `${announce}${newArray.slice(0, -1).join(', ')}, and ${newArray.slice(-1)}.`;
      }
}
viewCart();

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
