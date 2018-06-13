var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * (100 - 1)) + 1;
 cart.push({'itemName': item, 'itemPrice': price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let contents = 'In your cart, you have ';
  if(cart.length < 1) {
    return 'Your shopping cart is empty.';
  }
  for(let i = 0; i < cart.length; i++) {
    contents += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if(cart.length == 1 || i == cart.length -1) {
      break;
    }
    if(cart.length == 2 && i !== cart.length -1) {
      contents += `, and `;
    }
    
    if (cart.length >= 3) {
       if (i == cart.length - 2) {
        contents += `, and `;
      }
      else {
        contents += `, `;
        continue; 
      }
    }
    
  }
  contents += `.`;
  return contents;
}

function total() {
  let total = 0;
  for(let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}


function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
   if(cart[i].itemName === item) {
     cart.splice(i, 1);
     return cart;
   }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
  const cartTotal = total();
  cart = [];
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
