var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var item = item;
  var itemAndPrice = {[item]:price}
  cart.push(itemAndPrice);
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if (cart.length > 0){
    var list = [];
    for (var i = 0; i < cart.length; i++){
      var myItems = Object.keys(cart[i]);
      list.push(` ${myItems} at $${cart[i][myItems]}`);
      debugger;
    }
    console.log( `In your cart, you have${list}.`)

  } else {
    console.log( `Your shopping cart is empty.`)
  }
}

function removeFromCart(item){
  var itemToCheck = [];
  for (var i = 0; i < cart.length; i++){
    var itemToCheck = cart[i];
    //itemList.push(itemToCheck);
    if (itemToCheck.hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if (cardNumber != undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
    } else {
    console.log(`We don't have a credit card on file for you to place your order.`)
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


/*
function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var item = item
  var itemAndPrice = {[item]:[price]}
  cart.push(itemAndPrice);
  console.log(`${item} has been added to your cart.`)
  return cart
}
*/

/*function viewCart(){
  if (cart.length > 0){
    var itemList = [];
    for (var i = 0; i < cart.length; i++ ) {
      var myItems = Object.keys(cart[i]);
      itemList.push(` ${myItems} at $${cart[i][myItems]}`)
    }
    console.log(`In your cart, you have ${itemList}`);
  } else {
    console.log("Your shopping cart is empty.");
  }
}


function removeFromCart(item){
      for (var i = 0; i < cart.length, i++){
        var itemToCheck = cart[i];
        itemToCheck = hasOwnProperty(item)
      }

      if (cart.hasOwnProperty(item)){
        delete cart[item];
        return cart;
      } else {
    return "That item is not in your cart"
  }
}

function placeOrder(cardnumber){
      if (number !== undefined){
        var totalCost = total();
        var cart = {};
        return `Your total cost is $${totalCost}, which will be charged to the card ${cardnumber}`;
      } else {
        return `We don't have a credit card on file for you to place your order`;
      }
}

*/
