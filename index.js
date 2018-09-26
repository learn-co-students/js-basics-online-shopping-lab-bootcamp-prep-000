var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  
  var price = Math.floor((Math.random()*100)+1)
  cart.push({itemName: item, itemPrice: price });
 return(item + " has been added to your cart.");
 }

function viewCart ()
{
  if(cart.length === 0)
  {
    return("Your shopping cart is empty.");
  }
  
  if(cart.length === 1){
    return("In your cart, you have " + getCart()[0].itemName + " at $" + getCart()[0].itemPrice + ".")
  }
  if(cart.length > 1)
  {
    var whatsInTheCart = "In your cart, you have "
    var i;
    for(i = 0; i< cart.length; i++)
    { 
      if(i + 1 === cart.length)
      {
        return (whatsInTheCart + "and " + getCart()[i].itemName + " at $" +  getCart()[i].itemPrice + ".")
      }
      
     whatsInTheCart = ( whatsInTheCart + getCart()[i].itemName + " at $" +  getCart()[i].itemPrice + ", ")
    }
    return whatsInTheCart;
  }
}

function total() {
  var i;
  var cartTotalPrice = 0;
  for(i=0; i<cart.length; i++)
  {
    cartTotalPrice = cartTotalPrice + getCart()[i].itemPrice;
  }
  return cartTotalPrice;
}

function removeFromCart(item) {
  var i;
  var hasAnItemBeenRemoved = false;
  for(i = 0; i< cart.length; i++)
  {
    if(getCart()[i].itemName === item)
    {
      hasAnItemBeenRemoved = true;
      cart.splice(i, 1);
    }
  }
  if(hasAnItemBeenRemoved === false)
  {
    return("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber))
  {
  return("Sorry, we don't have a credit card on file for you.");
  }
  
  var i;
  var totalCost = 0;
  for(i=0; i < cart.length; i++)
  {
    totalCost = totalCost + getCart()[i].itemPrice;
  }
  cart = [];
  return("Your total cost is $" + totalCost + ", which will be charged to the card " + cardNumber + ".");
}














