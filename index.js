var cart =[];

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
  return cart
}

function addToCart(purchaseItem) {
  var itemObj = {};
  itemObj[purchaseItem] = Math.floor(Math.random()*100);
  cart.push(itemObj)
  console.log(purchaseItem + " has been added to your cart.")
  return cart
}

function viewCart() {
  var itemPairs = '';
  if (cart.length > 0) {
    for (var k = 0; k < cart.length ; k++) {
      itemPairs += ' '+Object.keys(cart[k])[0] + ' at $'+cart[k][Object.keys(cart[k])[0]]+',';
    }
    console.log('In your cart, you have'+itemPairs.slice(0,itemPairs.length-1)+".")
  } else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(itemRemove) {
  for (var k=0; k < cart.length ; k++)   {
    if (cart[k].hasOwnProperty(itemRemove)==true ) { break; }
  }
  if (k<cart.length){
    cart.shift(k)
    return cart
  } else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(ccNumber) {
  if (ccNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var totalCost = total();
    console.log("Your total cost is $"+totalCost+", which will be charged to the card "+ ccNumber+".")
    cart = [];
  }
}
