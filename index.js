var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var obj = {itemName:item,itemPrice:price};
  cart.push(obj);
  return item + " has been added to your cart."
}

function viewCart() {
  var str = 'In your cart, you have ';
  var finalStr = '.';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    return str + cart[0].itemName +' at $'+ cart[0].itemPrice + finalStr;
  } else if (cart.length === 2) {
    return str + cart[0].itemName +' at $'+ cart[0].itemPrice + ', and ' + cart[1].itemName
    + ' at $' +cart[1].itemPrice + finalStr;
  } else if (cart.length ===3) {
    return str + cart[0].itemName +' at $'+ cart[0].itemPrice + ', ' + cart[1].itemName
    + ' at $' +cart[1].itemPrice + ', and ' + cart[2].itemName + ' at $' + cart[2].itemPrice
    + finalStr;
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
   return total;
 }

function removeFromCart(item) {
  var flag = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      flag = true;
      cart.splice(i,1);
    }
  }
    if (flag===true) {
      return cart;
    } else {
      return "That item is not in your cart.";
    }
}

function placeOrder(cardNumber) {
if (cardNumber===undefined) {
  return "Sorry, we don't have a credit card on file for you."
}else {
  var final = total();
  cart = [];
  return "Your total cost is $" + final + ", which will be charged to the card " + cardNumber + "."
}

}
