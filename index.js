var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * (100 - 1) + 1);
  var item = {itemName:itemName, itemPrice:itemPrice};
 /* var cartCopy = getCart() 
  cartCopy.push(item)
  setCart(cartCopy)
  */
  cart.push(item)
  return itemName + ' has been added to your cart.'
}

function _cartEmpty(c) {
  return !c.length;
}

function _singleItem(c) {
  return c.length === 1;
}

function _lastItem(c, i) {
  return i === c.length - 1;
}

function _viewCart() {
  const cart = getCart();
  if (_cartEmpty) return 'Your shopping cart is empty.';
  
  return cart.reduce((message, item, i) => {
    message += (_lastItem(cart,i) && !_singleItem(cart)) ? 'and ' : '';
    message += `${message} ${item.itemName} at $${item.itemPrice}`;
    message += (_lastItem(cart,i)) ? '.' : ', ';
    return message;
  }, 'In youy cart you have ');
}

function viewCart() {
  var cart = getCart();
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var result = 'In your cart, you have ';
  var lastI = cart.length - 1;
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemName = item.itemName;
     result += (i===lastI && i > 0) ? 'and ' + itemName : itemName;
     result += ' at $'
     result += item.itemPrice
     result += (i===lastI) ? '.' : ", ";
    }
    
    return result 
  
    }



function total() {
  // write your code 
  const cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(itemName) 
{
  var newCart = [];
  for(var i = 0; i < cart.length; i++)
  {
    if(cart[i].itemName != itemName)
    {
      newCart.push(cart[i]);
    }
  }
  if(newCart.length == cart.length)
  { 
    return "That item is not in your cart.";
  }
  cart = newCart;
 }


function placeOrder(cardNumber) {
   if(!cardNumber)
  { 
    return "Sorry, we don't have a credit card on file for you.";
  }
  var cartTotal = total();
  cart = [];
  return "Your total cost is $" + cartTotal + ", which will be charged to the card " + cardNumber + ".";
}
