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
 const itemPrice = Math.floor(Math.random() * 100);
 //let objs = {  };
 //objs[item] = itemPrice;
 //cart.push(objs);
 cart.push(new Object({[item]:itemPrice}))
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  else {
    let x = []
    for (let i=0; i<cart.length; i++) {
      for (var key in cart[i]) {
      //x.push(` ${key} at $${Object.values(cart[i])}`)
      x.push(`${key} at $${cart[i][key]}`)
      }
    }
    
    if (x.length === 1) {
      console.log(`In your cart, you have ${x}.`);
    }
    else if (x.length === 2) {
      console.log(`In your cart, you have ${x.join(" and ")}.`);
    }
    else {
    //x.splice(x.length - 1, 0, `and`);
    const y = x.slice(0, x.length-1).join(", ");
    console.log(`In your cart, you have ${y}, and ${x[x.length-1]}.`);
    }
  }
  
}

function total() {
  // write your code here
  var totalprice = 0
  for (let i=0; i<cart.length; i++) {
    for (var key in cart[i]) {
    totalprice += parseInt(cart[i][key])
    }
  }
  return totalprice
}

function removeFromCart(item) {
  // write your code here
  var incart = false
  for (let i=0; i<cart.length; i++) {
    for (var key2 in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        incart = true
        }
    }
  }
  if (incart === false) {
        console.log(`That item is not in your cart.`);
      }
  return cart  
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
    return cart
  }
  
  
}



