var cart = [];

function getCart()
{
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item)
{
  var min = Math.ceil(1);
  var max = Math.floor(100);
  var i = {itemName: item, itemPrice: Math.floor(Math.random() * (max - min)) + min};
  cart.push(i);
  return `${i.itemName} has been added to your cart.`;
}

function viewCart() 
{
  if (cart.length < 1)
  {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1)
  {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else
  {
    var str = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++)
    {
      if (i === cart.length - 1)
      {
        str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else
      {
        str += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return str;
  }
}

function total()
{
  var total = 0;
  for (let i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item)
{
  var change = false;
  for (let i = 0; i < cart.length; i++)
  {
    if (cart[i].itemName === item)
    {
      cart.splice(i, 1);
      change = true;
    }
  }
  if (change === false)
  {
    return "That item is not in your cart.";
  }
  return cart;
}

function placeOrder(cardNumber)
{
  if (cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else
  {
    var tot = total();
    for (let i = 0; i < cart.length; i++)
    {
      removeFromCart(cart[i].itemName);
    }
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
  }
}
