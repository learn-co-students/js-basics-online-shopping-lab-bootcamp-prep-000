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
 var objItem = new Object();
 var objPrice = Math.floor(Math.random() * 100);
 objItem[item] = objPrice;
 cart.push(objItem);
 console.log(item + " has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  var message = '';
  var i;

  if(cart.length === 0)
  {
    message = "Your shopping cart is empty."
  }
  else
  {
    for(i=0; i<cart.length; i++)
    {
      var itemName;
      var price;
      itemName = Object.keys(cart[i]);
      price = cart[i][itemName];
      if(i === 0)
      {
        message = itemName + " at $" + price ; //`${itemName} at $ ${price} `
      }
      else
      {
        if(cart.length > 2 && i === cart.length - 1 )
        {
          message += ", and " + itemName + " at $" + price;
        }
        else if(cart.length > 1 && i === cart.length - 1 )
        {
          message += " and " + itemName + " at $" + price;
        }
        else if(cart.length > 1  && i < cart.length - 1)
        {
          message += ", " + itemName + " at $" + price;
        }
      }
    }
    message = "In your cart, you have " + message + ".";
  }
  console.log(message);
  //return cart;
}

function total() {
  // write your code here
  var total = 0;

  for(var i=0; i< cart.length; i++)
  {
    var itemName = Object.keys(cart[i]);
    var price = cart[i][itemName]
    total += price;
  }
  return total;
}

function removeFromCart(item)
{
  // write your code here
  var removeItem = false;

  for(var i=0; i< cart.length; i++)
  {
      var itemName = Object.keys(cart[i]);
      var price = cart[i][itemName]
      if(Object.prototype.hasOwnProperty.call(cart[i],item))
      {
        removeItem = true;
        cart.splice(i, 1);
      }
  }

  if(removeItem != true)
  {
    console.log("That item is not in your cart.");
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined)
   console.log("Sorry, we don't have a credit card on file for you.");
  else
  {
    var cartTotal = total();
    console.log("Your total cost is $" + cartTotal + ", which will be charged to the card " +cardNumber + ".");
    cart = [];
  }
}
