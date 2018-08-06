var cart = [

];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor((Math.random() * 100) + 1);
  cart.push({['itemName']: item, ['itemPrice']: price});
  return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
      return 'Your shopping cart is empty.';
  }
let newArray = [];
  for(let i = 0; i < cart.length; i++) {
    let item2 = cart[i].itemName;
    let price2 = cart[i].itemPrice;
    newArray.push(`${item2} at $${price2}`);
  }
      let announce = 'In your cart, you have ';
      if(cart.length === 1) {
        return `${announce}${newArray}.`;
      }else if(cart.length === 2) {
        return `${announce}${newArray[0]}, and ${newArray[1]}.`;
      }else if(cart.length > 2) {
        return `${announce}${newArray.slice(0, -1).join(', ')}, and ${newArray.slice(-1)}.`;
      }
}
viewCart();

function total() {
  let sum = 0;
  for(let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}
total();


function removeFromCart(item) {
  let inCart = 0;
  for(let i = 0; i < cart.length; i++) {
    inCart =  cart[i].itemName;
    if(inCart === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}
removeFromCart(item);


function placeOrder(cardNumber) {
  let totalCost = total();
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }else {
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
placeOrder(cardNumber);
