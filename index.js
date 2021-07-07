var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)});
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartItems = 'In your cart, you have';
  if(cart[0] === undefined)
  {
    return `Your shopping cart is empty.`
  }
  else if(cart[1] === undefined)
  {
    return `${cartItems} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else
  {
    for(var i = 0; i < cart.length; i++)
    {
      if(i === cart.length - 1)
      {
        cartItems += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else
      {
        cartItems += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
    return cartItems;
  }
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var index = -1;
  for(var i = 0; i < cart.length; i++)
  {
    if(cart[i].itemName === item)
    {
      index = i;
    }
  }
  if(index === -1)
  {
    return 'That item is not in your cart.';
  }
  else
  {
    cart.splice(index, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined)
  {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  else
  {
    var totalCart = total();
    cart = [];
    return `Your total cost is $${totalCart}, which will be charged to the card ${cardNumber}.`;
  }
}
