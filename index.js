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
 var price =  Math.floor(Math.random() * 100);
 var cartItem = {
   itemName: item,
   itemPrice: price
   };
   cart.push(cartItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var sentence = "In your cart, you have ";
  for(let i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
     sentence = sentence.concat(`${cart[i].itemName} at $${cart[i].itemPrice}.`);
     return sentence;
    } else if (cart.length === 2) {
       sentence = sentence.concat(`${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}.`);
       return sentence;
    } else if (cart.length === 3) {
      sentence = sentence.concat(`${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}, and ${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}.`);
      return sentence;
   }
  }return `Your shopping cart is empty.`;
}

function total() {
  // write your code here
    var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;

}

function removeFromCart(item) {
  // write your code here
for (let i = 0; i < cart.length; i++) {
  if (cart[i].itemName.item) {
    cart[i].splice(i, 1);
    return cart;
  } else {
    return `The item is not in your cart.`;
  }
}
}

function placeOrder(cardNumber) {
  // write your code here
  var total1 = total();
  if(cardNumber) {
    cart = [];
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`;
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
  
}
