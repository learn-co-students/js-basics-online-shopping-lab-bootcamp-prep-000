var cart = [];

  function itemPrice (){
  }

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = Object.assign({}, {itemName: item, itemPrice: price});
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return `${item} has been added to your cart.`;
  }

function viewCart() {
  var cartItems = [];
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
    return 'Your shopping cart is empty.'

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return printOneItem

  } else if (cart.length === 2){
    var printTwoItems = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    return printTwoItems

  } else {
    for (var i = 0; i < cart.length; i++) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    var printThreeOrMoreItems = `In your cart, you have ${cartItems[0]}, ${cartItems[1]}, and ${cartItems[2]}.`
    return printThreeOrMoreItems
  }
}
viewCart(cart)
  // write your code here

function total() {
  total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;

}
function add(a, b){
  var result = a + b;
  return result
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
if (item != cart[item]){
  return "That item is not in your cart."
}

}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "undefined"){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = [];
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
  // write your code here
}
