var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
 var objectCart = {itemName: `${item}`, itemPrice: getRandomInt(100)};
 cart.push(objectCart);
 return `${item} has been added to your cart.`;
}

function viewCart() {
 var cartList = []
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
   for (var i = 0; i < cart.length; i++) {
     var object = cart[i]
     var key = Object.keys(object)[0]
     var item = object[key]
     var key2 = Object.keys(object)[1]
     var price = object[key2]
     cartList.push(`${item} at $${price}`)
   }
   if (cart.length === 1) {
      return `In your cart, you have ${cartList}.`
   }
  if (cart.length === 2) {
    return `In your cart, you have ${cartList.join(", and ")}.`
    }
    else{
      return `In your cart, you have ${cartList.slice(0, -1).join(", ")}, and ${cartList.slice(-1)}.`
    }
}

function total() {
  var priceList = [];
  //var sum = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (var i = 0; i < cart.length; i++) {
  //var object = cart[i];
  //var key2 = Object.keys(cart[1]);
  //var price = (object[key2]);
  //priceList.push(parseInt(price))
   priceList.push(cart[i].itemPrice);
}
 return (priceList.reduce(reducer))
}


function removeFromCart(item) {
  
  for (var i = 0; i < cart.length; i++) {
  var object = cart[i]
  var key = Object.keys(cart[0])
  var itemName = object[key]
  if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
  var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
 }
}

