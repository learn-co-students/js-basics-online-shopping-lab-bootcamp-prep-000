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
 let newObj = {
   itemName: item,
   itemPrice:  Math.floor((Math.random() * 100) + 1)
 };
 cart.push(newObj);
 return `${newObj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let statement = "";
  if(cart === undefined || cart.length === 0)
  {
    return "Your shopping cart is empty."
  }
  else
  {
    for(let i = 0; i < cart.length; i++)
    {
      
  
      if(i < 1 && cart.length >=3)
      {
         statement += `${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
      else if(i < 1)
      {
        statement += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      else if(cart.length === 2)
      {
        statement += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      else if(cart.length >= 3)
      {
        if(i === cart.length-1)
        {
          statement +=  ` ${cart[i].itemName} at $${cart[i].itemPrice}`
        }
        else
        {
          statement +=  ` ${cart[i].itemName} at $${cart[i].itemPrice}, and`;
        }
      }
  
    }
  }
  
  return `In your cart, you have ${statement}.`;
}

function total() {
  // write your code here
  let sum =0;
  for(let i = 0; i < cart.length; i++)
  {
    sum += cart[i].itemPrice;
  }
  
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++)
  {
    if(cart[i].itemName === item)
    {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
  
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  else
  {
    let cartTotal = total();
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    
  }
}
