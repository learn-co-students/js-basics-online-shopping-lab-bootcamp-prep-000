var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let cart = newCartItem(item);
  getCart().push(cart);
  return `${cart.itemName} has been added to your cart.`;
}

function viewCart() {
  if(!cart.length){
    return 'Your shopping cart is empty.';
  }
  for(let i = 0, l = cart.length; i<l; i++){
    if (l === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }else if (l === 2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    }else{
       return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
    }
  }
}

function total() {
let totalCost = 0;
  for(let i = 0; i < cart.length; i++){
     totalCost = totalCost + cart[i].itemPrice;
  }
  return totalCost;
}

function test(item){
  for (let i = 0; i<getCart().length; i++){
    if(getCart()[i].itemName === item){
    cart.splice(i,1);
    return cart;
    }
  }
  return 'That item is not in your cart.';
}

function removeFromCart(item){
  for (let i = 0; i<getCart().length; i++){
    if(getCart()[i].itemName === item){
    cart.splice(i,1);
    return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(arguments[0] === undefined){
    return "Sorry, we don\'t have a credit card on file for you.";
  }else {
    let cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}

function newCartItem(item){
  item = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100),
  };
  return item;
}