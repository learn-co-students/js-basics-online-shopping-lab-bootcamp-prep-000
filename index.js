var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let output = "In your cart, you have";
  
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  //Use an else statement
  //Push into an empty array the itemName and itemPrice
  else{
    let array = [];
    for(let i = 0; i < cart.length; i++) {
      array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
    }
    if(cart.length === 1) {
      output += ` ${array[0]}.`;
    }
    if(cart.length === 2) {
        output += ` ${array[0]}, and ${array[1]}.`;
      }
    //I have to pop off the last element
    //I have to use the join() method
    //I have to combine the output
    //
    if(cart.length >= 3) {
      let end = array.pop();
      let middle = array.join(', ');
      output += ` ${middle}, and ${end}.`;
    }
    return output;
  }
}

function total() {
  let sum = 0;
  for(let i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(item === getCart()[i].itemName) {
      cart.splice(i, 1);
    }
  }
  let itemNotInCart = true;
  if(itemNotInCart) {
    return 'That item is not in your cart.';
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  if(arguments.length === 1) {
    let cartTotal = total();
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
