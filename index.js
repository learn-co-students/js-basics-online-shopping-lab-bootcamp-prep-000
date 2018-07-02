var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item)
{
  cart.push({ itemName: item, itemPrice: Math.floor(Math.random() * 100) });

  return `${item} has been added to your cart.`;
}

function viewCart()
{
  if (cart.length == 0)
  {
    return 'Your shopping cart is empty.'
  }
  else {
    var line = ''
    var i = 1
    var size = cart.length
    for (var key in cart)
    {
      if (i == size && size > 1)
      {
        line += `and ${cart[key].itemName} at $${cart[key].itemPrice}, `
      }
      else {
        line += `${cart[key].itemName} at $${cart[key].itemPrice}, `
      }
      i++
    }

    line = line.slice(0, -2)

    return ('In your cart, you have ' + line + '.')
  }

}

function total() {
  var total = 0;
  for (var key in cart)
  {
    total += cart[key].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0, l = cart.length; i < l; i++)
  {
    for(var list in cart[i])
    {
      if(item === list)
      {
        cart.splice(i,1)
        return cart
      }
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber)
{
  if (cardNumber === undefined)
  {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    {
      var result = total()
      cart = []
      return `Your total cost is $${result}, which will be charged to the card ${cardNumber}.`
    }
  }
}
