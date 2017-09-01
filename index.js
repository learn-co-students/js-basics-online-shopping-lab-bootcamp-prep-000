var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor( Math.random() * 101)
  var v = {[`${item}`]: parseInt(`${price}`, 10)}
  cart.push(v)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

 // viewCart should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.

function viewCart() {

  const cartlength = cart.length

  if(!cartlength) {
    return console.log('Your shopping cart is empty.');
  }

  let stuff = [];

  for (let i = 0; i < cartlength; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    stuff.push(`${item} at \$${price}`);
  }

  switch(stuff.length) {
      case 1:
        break;
      case 2:
        stuff = stuff.join(" and ");
        break;
      default:
        stuff[cartlength-1] = "and ".concat(stuff[cartlength-1]);
        stuff = stuff.join(", ");
  }

  console.log(`In your cart, you have ${stuff}.`)
}


function total() {
  let ans = 0
  for(let i = 0; i < cart.length; i++){
    for(let item in cart[i]){
      ans += cart[i][item];
    }
  }
  return ans
}

function removeFromCart(item) {
  var hasItem = false;

  for(let i = 0, l = cart.length; i < l; i++){
    if (cart[i].hasOwnProperty(item)) {
      hasItem = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--
    }
  }

  if (!hasItem) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {

  let totalCartPrice = total(cart)

  console.log(`Your total cost is $${totalCartPrice}, which will be charged to the card ${cardNumber}.`)

  cart = []
  }
}
