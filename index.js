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
 var price = Math.floor(Math.random() * 101 + 1);
 var itemName = {itemName : item, itemPrice : price};
 
 cart.push(itemName);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  /*// write your code here
  if (cart.length === 0)
  {
    return "Your shopping cart is empty.";
  }
  else
  {
    for (var i = 0; i < cart.length; i++)
    {
      
    }
  }*/
}

function total() {
  // write your code here
  let t = 0;
  
  for (var i = 0, l = cart.length; i < l; i++)
  {
    for (var item in cart[i])
    {
      t += cart[i][item]
    }
  }
}

function removeFromCart(item)
{
  // write your code here
  var index = cart.indexOf(item)
  
  //If item does not exist, it returns a -1
  if (index > -1)
  {
    cart.splice(index, 1);
    return cart;
  }
  else
  {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else
  {
    cart = [];
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
}
