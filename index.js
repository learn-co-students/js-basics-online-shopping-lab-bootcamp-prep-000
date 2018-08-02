var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() *100);
  item = {
  itemName: item,
  itemPrice: price
    }
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  let displayCart = [];
  for (let i = 0; i < cart.length; i++) {
    displayCart.push(cart[i]);
    }
    if (displayCart.length === 0){
      return `Your shopping cart is empty.`;  
    } else if (cart.length === 1) {
      return `In your cart, you have ${displayCart[0].itemName} at $${displayCart[0].itemPrice}.`
    } else if (displayCart.length === 2) {
      return `In your cart, you have ${displayCart[0].itemName} at $${displayCart[0].itemPrice}, and ${displayCart[1].itemName} at $${displayCart[1].itemPrice}.`
    } else if (displayCart.length === 3) {
      return `In your cart, you have ${displayCart[0].itemName} at $${displayCart[0].itemPrice}, ${displayCart[1].itemName} at $${displayCart[1].itemPrice}, and ${displayCart[2].itemName} at $${displayCart[2].itemPrice}.`
    }
  }


function total() {
  let total = 0;
  cart.forEach(function(element){
    let sum = parseInt(element.itemPrice);
    total += sum;
  })
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    } 
  } return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  let finalTotal = total();
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else if(cardNumber) {
      cart = [];
      return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`
  }
}
