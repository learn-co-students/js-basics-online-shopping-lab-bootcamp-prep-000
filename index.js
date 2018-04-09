var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 99) + 1;
 var newObj = cart.push(Object.assign({}, {itemName: item}, {itemPrice: price}))
 newObj;
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var responsePart1 = 'In your cart, you have ';
  var spacer = ' at $';

  //var cart = getCart();
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }else if (cart.length === 1) {
    return responsePart1 + cart[0].itemName + spacer + cart[0].itemPrice +'.';
  }else if (cart.length === 2){
    var i;
    var response = responsePart1;

    for (i = 0; i < cart.length; i++){
      var item = cart[i].itemName;
      var price = cart[i].itemPrice;
      response += item + spacer + price;

      if (i !== cart.length-1){
        response += ", and ";
      }

    }
    return response + '.'
  }else {
    var i;
    var response = responsePart1;

    for (i = 0; i < cart.length; i++){
      var item = cart[i].itemName;
      var price = cart[i].itemPrice;
      response += item + spacer + price;

      if (i === cart.length-1){
        response += ".";
      }

      if(i <  cart.length-2){
        response += ", ";

      } else if (i === cart.length-2){
        response += ", and ";
      }

    }
    return response
  }
  }


function total() {
  // write your code here
  var i;
  var count= 0;

  for(i = 0; i < cart.length; i++){
    count += cart[i].itemPrice ;
  }
  return count;
}

function removeFromCart(item) {
  // write your code here
  var i;
  var found = false;

  for(i = 0; i < cart.length; i++){
    var value = cart[i].itemName;
    if (item === value){
      cart.splice(i, 1);
      found = true;
      break;

    }

  }
if (found === false){
  return 'That item is not in your cart.'
}
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }else {
    var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
