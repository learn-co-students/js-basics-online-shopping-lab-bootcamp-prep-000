var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 }
 
 cart.push(obj);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0)
  {
    return "Your shopping cart is empty.";
  }
  
  var answer = "In your cart, you have ";
  for(var i = 0; i < cart.length; i++)
  {
    answer += `${cart[i].itemName} at $${cart[i]["itemPrice"]}`;
    
    if(i < cart.length - 1)
    {
      answer += ", ";
      if(i === cart.length - 2)
      {
        answer += "and ";
      }
    }
    else
    {
      answer += ".";
    }
  }
  
  return answer;
}

function total() {
  var value = 0;
  
  for(var i = 0; i < cart.length; i++)
  {
    value += cart[i].itemPrice;
  }
  
  return value;
}

function removeFromCart(item) {
 
 for(var i = 0; i < cart.length; i++)
  {
    if(cart[i].itemName === item)
    {
      cart.splice(i, 1)
      return cart;
    }
  }
  
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  
  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  
  cart = [];
  
  return message;
}
