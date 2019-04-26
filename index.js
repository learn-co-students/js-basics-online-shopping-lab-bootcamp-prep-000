var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // Create our object
 let obj = Object.assign({}, {itemName: [item], itemPrice: Math.floor((Math.random() * 100) + 1) })
 // return our object
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let msg;
  // If the cart is empty.
  if (cart.length === 0) {
    msg = "Your shopping cart is empty."
    return msg;
  }
  
  // First part of the message
  msg = "In your cart, you have";
  
  // Conditional concatenation on message based on item index.
  cart.forEach(grocery => {
    msg += `${cart.indexOf(grocery) + 1 === cart.length && cart.length !== 1 ? ' and ' : ' '}${grocery.itemName} at $${grocery.itemPrice}${cart.indexOf(grocery) + 1 === cart.length ? '.' : ','}`
  });
  
  // Return our message.
  return msg;
}

function total() {
  // initialize total.
  let total = 0;
  
  // increment total by the price of each item.
 cart.forEach(grocery => total += parseInt(grocery.itemPrice));
  
  // return total.
  return total
}


// function removeFromCart(item) {
//   console.log(cart);
//   let groceryIndex = cart.findIndex(i => i.itemName === item)
//   if(!groceryIndex) {
//     return "That item is not in your cart."
//   }
  
//   cart.splice(cart[groceryIndex], 1);
//   // cart.forEach(grocery => grocery.itemName === item ? cart.splice(cart.indexOf(grocery.itemName), 1) : `That item is not in your cart.`);
//   return cart;
// }

function removeFromCart(item) {
  // rule out an absent item, first.
  if(!cart.find(name => cart.name === item)) {
    return "That item is not in your cart."
  } 
  
  // Grocery item to be deleted will be stored here:
  let tbd = cart.find(name => cart.name === item);
  
  // index of grocery item:
  let idx = cart.indexOf(tbd);
  
  // Delete the item.
  let newCart = cart.splice(tbd, 1);

  cart = newCart;
  
  return cart;
}


function placeOrder(cardNumber) {
  // if we don't have a card Number
  if (!cardNumber || 
  isNaN(cardNumber) || 
  cardNumber === null) {
    return "Sorry, we don't have a credit card on file for you."
  }
  // our message
  let msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  
  // clear the cart
  cart = [];
  
  // return message.
  return msg;
}
