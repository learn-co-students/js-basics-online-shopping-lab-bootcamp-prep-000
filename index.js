var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor((Math.random() * 100) + 1)});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
    let i = 0;
    
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    
      
    } else if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`);
    
      
    } else if(cart.length === 2) {
      console.log(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]} and ${Object.keys(cart[i + 1])} at $${cart[i + 1][Object.keys(cart[i + 1])]}.`);
    
      
    } else if(cart.length > 2) {
      var cartList = "In your cart, you have";
      
      for (let i = 0; i < cart.length; i++) {
        if (i < cart.length - 1) {
        cartList += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`;
          
        } else if (i === cart.length - 1){
        cartList += ` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`;
      }
      console.log(cartList);
      }
    }
}

function total() {
  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
  var price = cart[i][Object.keys(cart[i])];
  totalPrice += price;
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    while (cart.length > 0) {
    cart.pop();
    }
  }
}
