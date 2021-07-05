var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {
    itemName : item,
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {return 'Your shopping cart is empty.'}
  
  let cartItemsAndPrice = [];
  cart.forEach( item => {
    cartItemsAndPrice.push( `${item.itemName} at $${item.itemPrice}`); 
  }
  )
  
  let longString = cartItemsAndPrice.length === 1 ? cartItemsAndPrice[0] : `${cartItemsAndPrice.slice(0,-1).join(', ')}, and ${cartItemsAndPrice.slice(-1)}`;
  
  return `In your cart, you have ${longString}.`
}

function total() {
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.itemPrice;
  })
  return totalPrice;
}

function removeFromCart(item) {
  cart.forEach( (cartItem, i) => {
    if (item === cartItem.itemName) {
      cart.splice(i,1);
      return cart;
    } 
  })
  return "That item is not in your cart.";
  
  
}

function placeOrder(cardNumber) {
  if (!cardNumber) return "Sorry, we don't have a credit card on file for you."
  else {
    let finalPrice = total();
    cart = [];
    return `Your total cost is $${finalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
