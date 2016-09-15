var cart = [];
var price;

function setCart(newCart) {
  cart = newCart;
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

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100));
  cart.push({[item]: price}); // the notation to use when pushing an OBJECT into an ARRAY.
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  var viewText = "In your cart, you have";
  var yourCart = []
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]) {
        yourCart[i] = (" " + key + " at $" + cart[i][key]);
      }
    }
  console.log("In your cart, you have" + yourCart + ".");
  }else {
    console.log("Your shopping cart is empty.");
  }
}


function removeFromCart(name) {
  var foundIt = false;
  for (var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      if (cart[i].hasOwnProperty(name) === true) {
      cart.splice(i,1);
      foundIt = true;
     }
    }
  }
  if (foundIt === false) {
    console.log('That item is not in your cart.');
  }
 }


function placeOrder(number){
    var totalCost = total();
  if (number === undefined || number === null){
    return console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log("Your total cost is $" + totalCost + ", which will be charged to the card 123.");
    return cart = [];
    }
}
