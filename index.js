var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var pair = {};
  pair.itemName = item;
  pair.itemPrice = Math.floor(Math.random()*100) + 1;
  cart.push(pair);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }
  var str = "In your cart, you have ";
  for(var i = 0; i < cart.length; i++){
    var itemObj = cart[i];
    var name = itemObj.itemName;
    var price = itemObj.itemPrice;
    var pushEle = `${name} at $${price}`;
    if(cart.length === 1){
      str += `${pushEle}.`;
    }else if(i === cart.length -1){
      str += `and ${pushEle}.`;
    }else{
      str += `${pushEle}, `;
    }
    }
    return str;
  }

function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++){
    var ele =  cart[i];
    var price = ele.itemPrice;
    sum += price;
  }
  return sum;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    var ele = cart[i];
    var name = ele.itemName;
    if(name === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
