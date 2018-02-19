var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let randPrice = Math.floor(Math.random() * 100)
  let obj = { [item]: randPrice }
  
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  
  return cart
}
  

function viewCart() {
  if(cart.length === 0) return console.log("Your shopping cart is empty.")
  
  let strings = []
  for(let i = 0; i < cart.length; i++) {
    let item = Object.keys(cart[i])[0]
    strings.push(`${ item } at $${ cart[i][item] }`)
  }
  
  if(strings.length === 1) {
    return console.log(`In your cart, you have ${ strings[0] }.`)
  }
  
  let lastString = strings[strings.length-1]
  strings = strings.slice(0, strings.length-1)
  
  if(strings.length === 1) return console.log(`In your cart, you have ${ strings[0] } and ${ lastString }.`)
  
  console.log(`In your cart, you have ${ strings.join(', ') }, and ${ lastString }.`)
}
 
function total() {
  let t = 0
   cart.forEach(function(items) {
     for(let key in items) {
       t += items[key]
     }
     return t
   })
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

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}