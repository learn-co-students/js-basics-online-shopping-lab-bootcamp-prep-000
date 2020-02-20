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
 
 var itemToInsert = {itemName:item, itemPrice: Math.ceil(Math.random() * 100)};
 cart.push(itemToInsert);
 return `${item} has been added to your cart.`
}

function processItem(message,state, item)
{
  
  switch(state)
  {
    case 1:
      message = `In your cart, you have ${item.itemName} at $${item.itemPrice}`;
      break;
    case 2:
      message = `${message}, ${item.itemName} at $${item.itemPrice}`;
      break;
    case 3: 
      message = `${message}, and ${item.itemName} at $${item.itemPrice}`;
      break;
    case 4: 
      message = `Your shopping cart is empty`;
      break;
  }
  return message;
}

function viewCart() {
  // write your code here
  var returnString = "";
  if(cart.length >0)
  {
    returnString = processItem(returnString,1, cart[0]);
    var cartIndexer = 1;
    while(cartIndexer < cart.length)
    {
      if(cartIndexer < cart.length-1)
      {
        returnString = processItem(returnString,2, cart[cartIndexer]);    
      }
      else
      {
        returnString = processItem(returnString,3, cart[cartIndexer]);    
      }
      cartIndexer+=1;
    }
  }
  else
  {
    returnString = processItem(returnString,4, null);
  }
  
  returnString = `${returnString}.`
  console.log(returnString);
  return returnString;
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++)
  {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  const found = cart.findIndex(element => element.itemName == item);
  console.log(`The value found = ${found}`);
  var returnValue = "";
  if((found === undefined) || (found === -1))
  {
    returnValue = `That item is not in your cart.`;
    return returnValue;
  }
  else
  {
    cart.splice(found,1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var returnString = "";
  if(cardNumber === undefined)
  {
    returnString = "Sorry, we don't have a credit card on file for you."
  }
  else
  {
    var totalCharge = total();
    cart.splice(0,cart.length);
    returnString = `Your total cost is $${totalCharge}, which will be charged to the card ${cardNumber}.`;
  }
  return returnString;
}
