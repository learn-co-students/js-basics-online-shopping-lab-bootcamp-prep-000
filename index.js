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
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({ [item]: price });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
 // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  var itemsArr = [];
  for (let i = 0; i < cart.length; i++){
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];
    itemsArr.push(`${item} at $${price}`);
  }
  switch(itemsArr.length){
    case 1:
      break;
    case 2:
      itemsArr = itemsArr.join(" and ");
      break;
    default:
      itemsArr[cart.length-1] = "and ".concat(itemsArr[cart.length-1]);
      itemsArr = itemsArr.join(", ");
  }
  console.log(`In your cart, you have ${itemsArr}.`);
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for ( let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log (`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
    return false;
    }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
