let cart = [];
const number = 83296759;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const itemPrice = Math.floor(Math.random() * 100);
 cart.push(new Object({[item]: itemPrice}));
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  let string;
  let key;

  if (getCart().length === 0) {
    string = "Your shopping cart is empty.";
    console.log(string);
    return string;
  }

  if (getCart().length === 1) {
    for (let key in getCart()[0]) {
      string = `In your cart, you have ${key} at $${getCart()[0][key]}.`;
      console.log(string);
      return string;
    }
  }

  if (getCart().length === 2){
    for (key in getCart()[0]) {
      string = `In your cart, you have ${key} at $${getCart()[0][key]}`
    }
    for (key in getCart()[1]) {
    string += ` and ${key} at $${getCart()[1][key]}.`;

    }
    console.log(string);
    return string;
  }

  if (getCart().length >= 3)  {
    var holder = 1;
    for (key in getCart()[0]) {
      string = `In your cart, you have ${key} at $${getCart()[0][key]}`
    }
    for (let i = 1; i < getCart().length - 1; i++) {
      for (key in getCart()[i]) {
        string += ", ";
        string += `${key} at $${getCart()[i][key]}`;
        holder++;
      }
    }
    //Gets last item to correctly put the last string.
    for (key in getCart()[holder]) {
      string += `, and ${key} at $${getCart()[holder][key]}.`;

    }
    console.log(string);
    return string;
  }
}

function total() {
  // write your code here
  let total = 0;
  let key;
  for (let i = 0; i < cart.length; i++) {
    for (key in cart[i]) {
      total += cart[i][key];
    }

  }
  console.log(total);
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    for (let key in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        var index = cart.indexOf(i);
        cart.splice(index-1, 1);
        return cart;
      }
  }

}
  console.log("That item is not in your cart.")
  return cart;

}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments.length === 0) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (let i = 0; i <= cart.length; i++) {
      cart.pop();
    }
  }
}

//Test Cases
addToCart('Bananas');
addToCart('Oranges')
addToCart('Juice')
addToCart('Jam')
viewCart();
console.log(cart);
placeOrder(number);
