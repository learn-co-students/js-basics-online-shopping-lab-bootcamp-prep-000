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
 var newObject = {itemName: item,itemPrice: Math.floor(Math.random() * (100 - 1 + 1)) + 1}
 cart.push(newObject);
 return `${item} has been added to your cart.`;
}


function viewCart() 
{
  var cartLength = cart.length;
  if (cartLength > 0)
  {
    if (cartLength === 1)
        { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
        }
    else if (cartLength === 2)
        { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
        }
    else if (cartLength > 2)
        {
          var index = 0;
          var tempString ;
          var tempArr = [`In your cart, you have`]
          while(index < cartLength-1)
          {
            tempString = `${cart[index].itemName} at $${cart[index].itemPrice}`
            tempArr.push(tempString)
            index = index + 1
          }
          tempArr.push(`and`)
          tempArr.push(`${cart[cartLength-1].itemName} at $${cart[cartLength-1].itemPrice}`)
          return `${(tempArr.slice(0,1)).join(' ')} ${(tempArr.slice(1, 4)).join(', ')} ${(tempArr.slice(4)).join(' ')}.`
        }
  }
      
  else{return `Your shopping cart is empty.` } 
 
}

function total() 
{
  var totalPrice = 0;
  var index = 0;
  var cartLength = cart.length;
  
  while( index < cartLength)
  {
    totalPrice = totalPrice + cart[index].itemPrice
    index = index +1
  }
  return totalPrice
}

function removeFromCart(item) 
{
  var cartLength = cart.length;
  for( var i = 0; i < cartLength; i++)
  { 
     if ( cart[i].itemName === item) 
         {
           cart.splice(i, 1); 
           i = i-1
           return cart;
         }
  }
    return `That item is not in your cart.`;
  
}

function placeOrder(cardNumber) 
{
   var amount = total();
   if (typeof(cardNumber) === 'undefined')
   {
     return `Sorry, we don't have a credit card on file for you.`
   }
   else //if (cardNumber !== null)
   {
     // empty cart method 
    // cart.splice(0, cart.length)
    while(cart.length>0){ cart.pop()}
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
   }
}

