/*Cart variable that points at an empty array.
1. addToCart() function accepts parameter name item, whose argument will be string.  Use that passed-in string to create a new object representing the item. The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price: { itemName: itemPrice }.
2. viewCart() function should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
3. The total() function iterates through the cart array, and returns the current total value of the items in the cart.
4. The removeFromCart() function accepts one argument, the name of the item that should be removed.
5. The placeOrder() function accepts one argument, a credit card number. If no argument is received, the function should print out Sorry, we don't have a credit card on file for you. If a card number is received, the function should print out Your total cost is $71, which will be charged to the card 83296759. Then, it should empty the cart array.
*/

let cart = [];

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    let itemsAndPrices = [];
    for (let i in cart) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];
      itemsAndPrices.push(`${item} at \$${price}`);
    }
    
    if (itemsAndPrices.length===1) {
    }
    else if (itemsAndPrices.length===2) {
      itemsAndPrices = itemsAndPrices.join(" and ");
    }
    else {
      itemsAndPrices[itemsAndPrices.length-1] = "and ".concat(itemsAndPrices[itemsAndPrices.length-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
    }
    console.log(`In your cart, you have ${itemsAndPrices}.`);
  }
}

function total() {
  let sum=0;
  for (let i in cart) {
    for (let item in cart[i]) {
    sum+= cart[i][item];
    }
  }
  return sum;
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCardNumber){
  if (!creditCardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
  cart = [];
}
