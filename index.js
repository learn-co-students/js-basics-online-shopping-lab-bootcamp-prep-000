var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart (itemName) {
  var itemPrice = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  var itemObj = {itemName : [itemName], itemPrice : itemPrice};
  cart.push(itemObj);
  //console.log(`${itemName} has been added to your cart.`);
  return `${itemName} has been added to your cart.`;
}
addToCart('glove');
addToCart('ball');
addToCart('skis');
addToCart('shoes');

function viewCart() {
  var cartItems = [];
  if (cart.length === 0 || cart === undefined) {
    return `Your shopping cart is empty.`;
  }
  if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return printOneItem;
  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    return printTwoItems;
  } else {
    for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    return printThreeOrMoreItems;
  }
}
viewCart(cart);

function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0;

  for(var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i].itemPrice;
    pricePerItemInCart.push(itemPrice);

  }
  for (var j =0; j<pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j]+=totalPrice;
  }
  return totalPrice;
}
total(cart)

function removeFromCart(item) {
  var itemThere = true;

  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName !== item){
      itemThere = false;
      var location  = i-1;
    }else{
      itemThere = true;
      var location = i-1;
    }
  }

  if (itemThere === true){
    return `That item is not in your cart.`;
  }
  if (itemThere === false){
    cart.splice(location, 1);
    return cart;
  }
}
removeFromCart('skis');

function placeOrder(cardNumber) {
  //console.log('the cart total is ' +total(cart));
  if(cardNumber) {
    var totalAmount = total(cart);
    console.log( `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
    /*for (var i = 0; i <= cart.length; i--) {
      cart.pop();
    } */
    return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`;

  } else
    return `Sorry, we don\'t have a credit card on file for you.`;




}
placeOrder(555);
