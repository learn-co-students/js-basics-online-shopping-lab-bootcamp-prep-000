var cart = [];

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
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var allItems = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
          allItems.push(`${item} at $${cart[i][item]}`)
        }
      }
      console.log(`In your cart, you have ${allItems.join(", ")}.`);
    }
    return;
}

function removeFromCart(item){
  //Run through items in cart to identify item to remove.
  var itemFound = false;
  var n = cart.length;
  while (itemFound === false && n > 0) {
    itemFound = cart[n-1].hasOwnProperty(item);
    n--;
  }
  //Item not found
  if (itemFound === false) {
    console.log("That item is not in your cart.");
  }
  //if item is found, then 'n' will be the index of that item.
  else {
    cart.splice(n, 1);
  }
  return cart;
}

function placeOrder(cc){
  if (!cc) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
    setCart([]);
  }
  return;
}
