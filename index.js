var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(Object.assign({}, { itemName : item, itemPrice : Math.floor(Math.random() * 100)}));
  return `${item} has been added to your cart.`;
}

const item = "bananas";
// console.log(addToCart(item));
// console.log(cart);

const item2 = "pancake batter";
// console.log(addToCart(item2));
// console.log(cart);




function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let str = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        str += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
        return str;
      } else if (i === cart.length - 1) {
        str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        return str;
      } else { 
        str += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
  }
}
// addToCart(item);
// addToCart(item2);
// console.log(viewCart());




function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

// addToCart(item);
// addToCart(item2);
// console.log(viewCart());
// console.log(total());



function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}
// addToCart(item);
// addToCart(item2);
// console.log(removeFromCart(item));
// console.log(removeFromCart(item2));
// console.log(removeFromCart("potato"));

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    const str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return str;
  }
}
addToCart(item);
addToCart(item2);
console.log(placeOrder("3433"));

