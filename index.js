var cart = [];
var cartTotal = 0

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var min = Math.ceil(0);
var max = Math.floor(100);
var itemPrice = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

//var newItem = Object.assign({}, { [itemName]: itemPrice })
//cart.push(newItem)
cart.push({ [item]: itemPrice })
//cart = Object.assign(cart, newItem)
console.log (item + " has been added to your cart.")
return cart

}

function viewCart() {

  var message = ""

  if (getCart().length == 0) {
    message = 'Your shopping cart is empty.';
    //console.log(message)
  }
  else if(getCart().length == 1){
    let itemName = Object.keys(getCart()[0]);
    let itemPrice = getCart()[0][itemName];
    message = `In your cart, you have ${itemName} at $${itemPrice}.`;
    //console.log(message)
  }

  else if (getCart().length == 2){
      var itemName1 = Object.keys(getCart()[0]);
      let itemPrice1 = getCart()[0][itemName1];

      var itemName2 = Object.keys(getCart()[1]);
      let itemPrice2 = getCart()[1][itemName2];

    message = `In your cart, you have ${itemName1} at $${itemPrice1} and ${itemName2} at $${itemPrice2}.`
    //console.log(message)
  }
  else {
    for (let i = 0; i < getCart().length; i++){

      let itemName = Object.keys(getCart()[i]);
      let itemPrice = getCart()[i][itemName];
      if ( i == 0){ //first item
        message = 'In your cart, you have ' + itemName + ' at $' + itemPrice + ', '
      }
      else if ( i == getCart().length - 1 ) { //last item
        message += 'and ' + itemName + ' at $' + itemPrice + '.'
      }
      else { //middle item
        message += itemName + ' at $' + itemPrice + ', '
      }
    }
    //console.log(message)
  }
  console.log(message)

}

function total() {
  var itemPrice = 0
 cartTotal = 0

  if (cart.length == 0){
    cartTotal = 0
  }
  else {
    for (let i = 0; i < getCart().length; i++) {
      let itemName = Object.keys(getCart()[i]);
      let itemPrice = getCart()[i][itemName];
      cartTotal += itemPrice
    }
    console.log(cartTotal)
    return cartTotal
  }

}

function removeFromCart(item) {

  if (getCart.length == 0) {
    console.log('That item is not in your cart.')
    return cart
  }
  else {
        for (let i = 0; i < getCart().length; i++){
          if (Object.keys(getCart()[i]) == item) {
            if (cart.hasOwnProperty(item)){
              cart = getCart().splice(i,1)
              return cart

            }
          }

      console.log('That item is not in your cart.')
      return cart
    }
  }
}

function placeOrder(cardNumber) {

    console.log();(cardNumber);
    //if (!cardNumber || /^\s*$/.test(cardNumber)){
    if (!cardNumber){
      console.log("Sorry, we don't have a credit card on file for you.")
    }
    else {
      console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
      cart = []
    }
}
