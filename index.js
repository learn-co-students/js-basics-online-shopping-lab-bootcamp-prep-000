var cart = [];
var getCart = () => cart;
var setCart = c => { cart = c; cart; }

function addToCart(item) {
  let itemObj = { 
    itemName: item, 
    itemPrice: (Math.floor((Math.random() * 100) + 1)) 
  }
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    let combo = [];
    let intro = 'In your cart, you have';
    for (let i = 0; i < cart.length; i++) {
      combo.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if (cart.length === 1) {
      return `${intro}${combo[0]}.`
    } else {
      let last = combo.pop();
      return `${intro}${combo}, and${last}.`;
    }
  }
}

function total() {
  let price = [];
  let total = 0;
  for (let i = 0; i < cart.length; i++){
    price.push(cart[i].itemPrice);
    total += price[i];
  } return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  } return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let cost = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return cost;
    }
}