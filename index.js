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
 var successfulItemAdd = `${item} has been added to your cart.`
 var newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1,
 };
 
cart.push(newItem);
return successfulItemAdd;
}

function viewCart() {
  // write your code here
  var cartContent = "In your cart, you have ";
  
  if(cart === undefined || cart.length === 0)
  {
    cartContent = `Your shopping cart is empty.`;
  }
  else if(cart.length === 1)
  {
    cartContent += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2)
  {
    cartContent += `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else 
  {
    for(var i = 0; i < cart.length; i++)
    {
        if(i === cart.length-1)
        {
          cartContent += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
        else
        {
          cartContent+= `${cart[i].itemName} at $${cart[i].itemPrice}, `;
        }
         
      }
  }
  
  return cartContent;
}

function total() {
  // write your code here
  var sum = 0;
  for(var i = 0; i < cart.length; i++)
  {
    sum += cart[i].itemPrice;
  }
  
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var tempCart = [...cart];
  var notFound = "That item is not in your cart.";

  for(var i = 0; i < tempCart.length; i++)
  {

    if(tempCart[i].itemName === item)
    {
      cart.splice(i, 1);
      return tempCart;
    }
  }
  
  if(tempCart[item] !== item)
  {
    return notFound;
  }

}

function placeOrder(cardNumber) {
  
  var noCardNum = "Sorry, we don't have a credit card on file for you."
  var receipt = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  // write your code here
  if(cardNumber === undefined)
  {
    return noCardNum;
  }
  else
  {
    cart = [];
    return receipt;
  }
}


