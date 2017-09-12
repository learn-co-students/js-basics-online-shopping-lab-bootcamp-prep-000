var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: parseInt(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {     //This condition is for when there's nothing in the cart
    console.log(`Your shopping cart is empty.`);
  }

  let items = [];           //This array will be populated by the objects in the cart, depending on the below conditions

  if (cart.length < 3) {   //This condition works for anything less than three, since you only need to join list items with an 'and' and no commas
    for (let i in cart) {
      let item = Object.keys(cart[i]);
      let price = cart[i][item];
      items.push(`${item} at \$${price}`);
    }
    console.log(`In your cart, you have ${items.join(' and ')}.`);
  } else {       //If you have more than two items, you need to have all but the last joined with commas, and then the last item added to the list with an 'and'
    for (let i in cart) {
      let item = Object.keys(cart[i]);
      let price = cart[i][item];
      items.push(`${item} at \$${price}`);
    }
    console.log(`In your cart, you have ${items.splice(0, items.length -1 ).join(', ')}, and ${items[items.length -1]}.`)
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length ; i++) {
    for (let j in cart[i]) {
      total += cart[i][j]
    }
  } return total;
}

function removeFromCart(item) {
  for (let i = 0 ; i < cart.length ; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  } console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
