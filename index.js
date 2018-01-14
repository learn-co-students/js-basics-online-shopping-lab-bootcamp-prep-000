var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj={[item]:Math.ceil(Math.random() * 100)};
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
 
}

function viewCart() 
{
  var key=[];
  for(var i=0;i<cart.length;i++)
  {
    key.push(Object.keys(cart[i]));
  }
  
  if(cart.length===0)
  {
   console.log( `Your shopping cart is empty.`); 
  }
  else if(cart.length===1)
  {
   console.log( `In your cart, you have ${key[0]} at $${cart[0][key[0]]}.`); 
  }
  else if(cart.length===2)
  {
   console.log( `In your cart, you have ${key[0]} at $${cart[0][key[0]]} and ${key[1]} at $${cart[1][key[1]]}.`); 
  }
  else
  { var string=" ";
    for(var j=0;j<cart.length-1;j++)
    {
      string+=`${key[j]} at $${cart[j][key[j]]}, `
    }
    string+=`and ${key[key.length-1]} at $${cart[cart.length-1][key[key.length-1]]}.`
    console.log( `In your cart, you have${string}`);
  }
  
}

function total() {
  var total=0;
  var key1=[];
  for(var j=0;j<cart.length;j++)
  {
    key1.push(Object.keys(cart[j]));
  }
  for(var i=0;i<cart.length;i++)
  { 
    total+=cart[i][key1[i]];
  }
  return total;
}

function removeFromCart(item) {
   var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
