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
  var temp = [];
  temp = {itemName:[item], itemPrice : (Math.random() * Math.floor(100))};
  
  cart.push(temp);
  return (`${item} has been added to your cart.`);
 
}

function viewCart() 
{
  if( cart.length === 0)
  {
    return("Your shopping cart is empty.")
  }
  
  var output = "In your cart, you have"
  
  for(let i = 0; i < cart.length; i++)
  {
    if(i === 0)
      output += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      
    else if(i == cart.length -1)
    output += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      
    else
      output += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  output += '.';
  return output;
  
}

function total() 
{
  var sum = 0;
  
  for(let i = 0; i < cart.length; i++)
  {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) 
{
  var i = 0;
  var found = false;
  while (i < cart.length)
  {
    if(cart[i].itemName == item)
    {
      found = true;
      break;
    }
    i++;
  }
  
  if(found)
  {
    cart.splice(i,1);
    return cart;
  }
  
  else
  return ("That item is not in your cart.")
  
}

function placeOrder(cardNumber) 
{
  if (cardNumber === undefined)
  {
    return ("Sorry, we don't have a credit card on file for you.")
  }
  
  else
  {
    var output = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    while(cart.length > 0)
    {
      removeFromCart(cart[0].itemName);
    }
    
    return output;
    
  }
  
}
