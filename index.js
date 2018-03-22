var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price= Math.floor(Math.random() * (100 - 1))
  
  cart.push(new Object({itemName: item , itemPrice: price}));
  console.log(`${item} has been added to your cart.`);
  
  return cart;
}

function viewCart() {
  
  var sentence = "In your cart, you have";
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(` ${sentence} ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}.`);
  } else if (cart.length === 2) {
    console.log(` ${sentence} ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}, and ${Object.values(cart[1])[0]} at $${Object.values(cart[1])[1]}.`);
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      sentence += ` ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]},`
    }
    sentence += ` and ${Object.values(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[1]}.`
    
    console.log(sentence);
  }
}

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    for (let price in cart[i]) {
      total += cart[i][price]
    }
  }
  return total
}

function removeFromCart(item) {
  
  for (let i = 0; i < cart.length; i++) {
    for (let x in cart[i]) {
      if (item === x) {
        cart.splice(i, l)
      } else {
        console.log("That item is not in your cart.")
      }
    }
  }
  
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === null) {
    console.log("Sorry, we don't have a credit card on file for you")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  return cart
}
