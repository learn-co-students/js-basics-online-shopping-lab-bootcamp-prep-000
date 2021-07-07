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
 var price = Math.floor(Math.random() * 100);
 if (price == 0)
 {
   price++;
 }
 var obj = {itemName : item, itemPrice : price};

 cart.push(obj);
 
 return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var n = cart.length;
  if (n === 0)
  {
    return 'Your shopping cart is empty.';
  }
  else
  {
    var str = 'In your cart, you have';
    
    for(var i = 0; i < n ; i++)
    {
      if ( n == 1)
      {
        str = `${str} ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else
      {
        if (i != n - 1)
        {
          str = `${str} ${cart[i].itemName} at $${cart[i].itemPrice},`;
        }
        else
        {
          str = `${str} and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
      }
    }
    return str;
  }
}

function total() {
  // write your code here
  var price = 0;
  for (var i = 0, n = cart.length; i < n; i++ )
  {
    price = price + parseInt(cart[i].itemPrice)
  }
  
  return price;
}

function removeFromCart(item) {
  // write your code here
  var oldn = cart.length, n = cart.length;
  for( var i = 0; oldn != 0 && i < n; i++)
  {
    if ( item === cart[i].itemName )
    {
      var first = cart.slice(0,i);
      var second = cart.slice(i+1 , n);
      cart = [...first , ...second];
      n = cart.length;
    }
  }
  
  if (oldn != n)
  {
    return cart;
  }
  else
  {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var str;
  if (isNaN(cardNumber))
  {
    str = 'Sorry, we don\'t have a credit card on file for you.'
  }
  else
  {
    str = 'Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + '.';
  }
  cart = [];
  return str;
}
