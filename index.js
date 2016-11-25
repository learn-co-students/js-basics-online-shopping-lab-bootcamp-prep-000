/*var cart = {};

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 10) + 1;
  cart[item] = price;
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(cart){
  if (cart !== {}){
      console.log(`In your cart you have ${cart}.`)
  } else {
      console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  if (!(item in cart)){
    delete cart.item;
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function total() {
  let t = 0

    for (var item in cart) {
      t += cart.item;
    }
  return t;
  }

function placeOrder(cardNumber){
    if (!cardNumber){
        console.log("We don't have a credit card on file for you to place your order.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    }
    cart = [];
}
*/
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 10);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(cart){
  var itemPricePairs = [];
  var object;
  var price;
  var item;

  for (var i = 0; i < cart.length; i++){
      object = cart[i];
      item = Object.keys(cart[i]);
      price = object[item];
      itemPricePairs.push(`${item} ${price}`);
  }

  itemPricePairs = itemPricePairs.join(", ");

  if (cart.length > 0){
      console.log(`In your cart you have ${itemPricePairs}.`)
  } else {
      console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
    var items = Object.keys(cart);
    var itemIndex = items.indexOf(item);


    if (itemIndex !== -1){
        cart.splice(itemIndex, itemIndex + 1);
        return cart;
    } else {
        return "That item is not in your cart.";
    }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(cardNumber){
    var tempTotal = total();
    cart = [];

    if (!cardNumber){
        return "We don't have a credit card on file for you to place your order.";
    } else {
        return `Your total cost is ${tempTotal}, which will be charged to the card ${cardNumber}.`
    }

}
