var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * (100 - 1));
  cart.push({itemName: item, itemPrice: price});
return `${item} has been added to your cart.`;
} 

function viewCart() {
  let string = 'In your cart, you have ';
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    string += `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
    return string;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
      string += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      } else {
      string += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `;
    }
  }
  return string;
 }
}

function total() {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total; 
}

function removeFromCart(item) {
  for( var i = 0; i < getCart().length; i++) {
      if(getCart()[i].itemName === item){
   
        getCart().splice(i, 1);
        return getCart();
      }
  
   
 }
 return "That item is not in your cart.";
}


// var index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }



function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cartTotal = total();
    for (var i = 0; i < cart.length; i++) {
      cart.shift();
    }
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
