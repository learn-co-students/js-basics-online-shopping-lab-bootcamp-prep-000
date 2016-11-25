
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 10) + 1;
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var itemPricePairs = [];
  var object;
  var price;
  var item;

  for (var i = 0; i < cart.length; i++){
      object = cart[i];
      item = Object.keys(cart[i]);
      price = object[item];
      itemPricePairs.push(`${item} at $${price}`);
  }

  itemPricePairs = itemPricePairs.join(", ");

  if (cart.length > 0){
      console.log(`In your cart, you have ${itemPricePairs}.`)
  } else {
      console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  var obj;
  var key;

  for (var i = 0; i < cart.length; i++){
        obj = cart[i];
        key = Object.keys(obj);
        if (key[0] === item){
          cart.splice(i, i + 1);
          return cart;
        }
    }
  console.log("That item is not in your cart.");
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
    if (!cardNumber){
        console.log("We don't have a credit card on file for you to place your order.");
    } else {
        console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    }
}
