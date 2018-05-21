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
 let price = Math.floor(Math.random() * 100);
 let obj = { itemName:item, itemPrice:price }
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else 
  {
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
      newCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    
    if (newCart.length === 1) {
      return `In your cart, you have ${newCart[0]}.`
    } else {
      return `In your cart, you have ${(newCart.slice(0, cart.length - 1)).join(', ')}, and ${newCart[cart.length - 1]}.`
    }
  }
}

function total() {
  // write your code here
  return cart.reduce((total, item) => { return total + item.itemPrice}, 0);
  
}

function removeFromCart(item) {
  // write your code here
  let removeItem = cart.findIndex(remove => remove.itemName === item);
  cart.splice(removeItem, 1);
  if (cart.length === 0) {
    return `That item is not in your cart.`
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  let totalPrice = total();
  cart = [];
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}