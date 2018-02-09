var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = { [itemName]: itemPrice };
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  let text1 = [];
  let text2 = [];
  let items = [];
  let prices = [];

  if (cart.length===0) {
       console.log(`Your shopping cart is empty.`);
      } else if (cart.length===1) {
        console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
      } else if (cart.length===2) {
          console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
      } else {
        for (let i = 0; i < cart.length; i++) {
          if (i<cart.length - 1) {
            items.push(Object.keys(cart[i]));
            prices.push(Object.values(cart[i]));
            text1.push(`${items[i]} at $${prices[i]}`);
          } else {
            items.push(Object.keys(cart[i]));
            prices.push(Object.values(cart[i]));
            text2.push(`${items[i]} at $${prices[i]}`);
          }
            
          }
        console.log(`In your cart, you have ${text1.join(', ')}, and ${text2}.`);
      }
      
}


function total() {
  let sum = [];
  for (let i =0; i<cart.length; i++) {
    sum.push(Object.values(cart[i]));
  }
  return sum;
}

function removeFromCart(itemName) {
  if (cart.hasOwnProperty(itemName)) {
    cart.slice(cart.indexOf(itemName));
    return cart;
  } else {
    return `That item is not in your cart.`;
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
}
