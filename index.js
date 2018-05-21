var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {cart.push({itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)+1});return(`${item} has been added to your cart.`)
}

function viewCart() {if(cart.length===1){return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);}else if(cart.length===0){return(`Your shopping cart is empty.`);}else{var array=[];for (let i=0;i<cart.length;i++){if(i===cart.length-1){array.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)}else{array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)}};return(`In your cart, you have${array}.`);}
}

function total() {var t=0; for (let i=0;i<cart.length;i++){t=t+cart[i].itemPrice;};return t
}

function removeFromCart(item) {var n=0;for(let i=0;i<cart.length;i++){if(cart[i].itemName===`${item}`){cart.splice(i,1);n=n+1}};if(n===0){return(`That item is not in your cart.`);}else{return cart;}
}

function placeOrder(cardNumber) {if(cardNumber>=0){var t=0; var cartA=cart.splice(0,cart.length); for (let i=0;i<cartA.length;i++){t=t+cartA[i].itemPrice};return(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);}else{return(`Sorry, we don't have a credit card on file for you.`);}
}
