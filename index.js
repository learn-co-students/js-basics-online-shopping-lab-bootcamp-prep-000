var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var newItem = new Object( { itemName: (item) ,  itemPrice: (Math.floor(Math.random() * 100) + 1 ) } );
    cart.push(newItem);
    return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0 ) {
      return `Your shopping cart is empty.`;
  }
  if (cart.length === 1) {
    return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    
  } else {
    var newItem = []
    for (let i = 0; cart.length >0; i++) {
    newItem.push( `${ cart[i].itemName } at $${ cart[i].itemPrice } and ${ cart[i = cart.length-1].itemName} at $${cart[i = cart.length-1].itemPrice}.`)
    }
    return `In your cart, you have ${ newItem.join('') }`;
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