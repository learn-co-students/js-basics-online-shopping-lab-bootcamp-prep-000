var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      } if (cart.length === 2) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      } else {
        var statement = [`In your cart, you have`]
        for (let i = 0; i < cart.length - 1; i++) {
          statement.push(`${cart[i].itemName} at $${cart[i].itemPrice},`)
        }
        statement.push(`and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`);
        return statement.join(' ');
      }
      }
    }
  }



function total() {
  // 3. The `total()` function accepts no arguments, iterates through the `cart` array, and returns the current total value of the items in the cart.
  var totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
    } else {
      return 'That item is not in your cart.';
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  /*  The `placeOrder()` function accepts one argument, a credit card number.
    + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
    + If a card number is received, the function should
      + empty the `cart` array
      + return `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`)
      */
      if (cardNumber === undefined) {
        return `Sorry, we don't have a credit card on file for you.`;
      } else {
        return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
      }
      setCart(emptyArray);
}
