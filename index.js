var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//Tests 1-6 -- Passed
function addToCart(item) {
  let price = (Math.floor(Math.random() * 100) + 1);
  var newItem = {itemName: item, itemPrice: price};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

//Tests 7-10 -- Passed
function viewCart() {
  if(cart.length <= 0) {
    return "Your shopping cart is empty.";
  }else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }else {
    var newArray = [];
    for(let i = 0; i < cart.length - 1; i++) {
      newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }return `In your cart, you have${newArray}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    }
}

//Test 11 -- Passed
function total() {
  var totalPrice = 0;
  for(var total=0; total<cart.length; total++){
    totalPrice += cart[total].itemPrice;
  }return totalPrice;
}

//Tests 12 and 13 -- Passed
function removeFromCart(item) {
  var index = cart.findIndex(cart => cart.itemName === item);
  if(index === -1) {
    return "That item is not in your cart.";
  }else {
    for(var identity=0; identity<=cart.length; identity++) {
      if(cart[identity].itemName === item) {
        cart.splice(identity,1);
        return `${item} has been removed from your cart.`
      }
    }
  }
}

//Tests 14-16 -- Passed
function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }else {
    var yourTotal = total();
    cart = [];
    return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
