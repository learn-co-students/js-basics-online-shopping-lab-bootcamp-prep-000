var cart = [];

function getCart() 
{
 return cart;
}

function setCart(c) 
{
  cart = c;
  return cart;
}

function addToCart(item) 
{
  return cart.push({itemName : item, itemPrice : Math.floor(Math.random() * 101)}) ? `${item} has been added to your cart.` : `No item was added what happened?`
}

function viewCart() 
{
  var object = "In your cart, you have"
  
  for(var i = 0; i < cart.length; i++)
  {
    cart.length === 1 ? object += ` ${cart[i].itemName} at $${cart[i].itemPrice}.` :
    i === cart.length - 1 ? object += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.` :
    object += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
  
  return cart.length === 0 ? `Your shopping cart is empty.` : object
}

function total() 
{
  var total = 0
  
  for(var i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice
  }
  
  return total
}

function removeFromCart(item) 
{
  var indexOfItem = itemSearch(item)
  
  return indexOfItem == null ? "That item is not in your cart." : 
  removeSpecificItem(indexOfItem)
}

function itemSearch(item)
{
  var itemIndex
  for(var i = 0; i < cart.length; i++)
  {
    if(item === cart[i].itemName)
    {
      itemIndex = i
    }
  }
  
  return itemIndex
}

function removeSpecificItem(indexOfItem)
{
  cart.splice(indexOfItem, 1)
}

function placeOrder(cardNumber) 
{
  var validCard = false
  var price = total()
  
  if(cardNumber != null)
  {
    validCard = true
    cart = []
  }
  
  return !validCard ? "Sorry, we don't have a credit card on file for you." :
  `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
}
