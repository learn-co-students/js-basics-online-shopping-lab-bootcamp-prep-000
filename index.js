var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 
 let newItem = {itemName:item,itemPrice:Math.floor(Math.random()*100)};
 cart.push(newItem);
 
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  let cartContent = `In your cart, you have`;
  
  if(cart.length === 0)
    cartContent = 'Your shopping cart is empty.';
  
  for(let i =0; i < cart.length; i++)
  { 
      if (i> 0 && i==cart.length-1)
        cartContent = cartContent.concat(`, and`);
      else if( i > 0)
        cartContent = cartContent.concat(`,`);
        
      cartContent = cartContent.concat(` ${cart[i] .itemName} at \$${cart[i].itemPrice}`);
      
      if (i == cart.length-1)
       cartContent = cartContent.concat(`.`);
  }
  
  return cartContent;
}

function total() {
  let totalCart= 0;
  let i= 0;
  
  while (i<cart.length)
  {
    totalCart = totalCart + cart[i].itemPrice;
    i++;
  }
  
  return totalCart;
}

function removeFromCart(item) 
{
  let b = false;
  //let returnCart = [];
  
  for(let i=0; !b && i < cart.length; i++)
  {
    if (item == cart[i].itemName)
    {
      b = true;
      cart.splice(i,1); 
    }
  }
  
  if (b)
    return cart;
  else
    return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  let returnMessage = '';
  
  if (cardNumber == null || cardNumber =='')
    returnMessage = 'Sorry, we don\'t have a credit card on file for you.'
  else
  {
    let totalCart = total();
    cart=[];
    returnMessage = `Your total cost is \$${totalCart}, which will be charged to the card ${cardNumber}.`;
    
  }

  
  return returnMessage;
}
