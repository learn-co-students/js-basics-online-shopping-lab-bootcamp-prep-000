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
  var price = Math.floor((Math.random()*100)+1);
  cart.push({ itemName: item,itemPrice:price });
   return (`${item} has been added to your cart.`);
}

function viewCart()
{
  //console.log(cart);
  if(cart.length===0)
  {
    return "Your shopping cart is empty.";
  }
  else
  {
      var j=0;
    var itemsnames=[];
    var itemsprices=[];
    var itemboth=[];
     for (var i = 0; i < cart.length; i++)
     {
          if(cart.length-1===i && i!=0)
          {
              itemboth.push("and "+cart[i].itemName + " at $" + cart[i].itemPrice )
          }
          else
          {
            itemboth.push(cart[i].itemName + " at $" + cart[i].itemPrice)
          }

     }
     return"In your cart, you have " +itemboth.join(", ")+".";

   }

}

function total()
{
  var totalprice=0;
  for ( var i = 0 ; i<cart.length;i++ )
  {
    //var itemi=Object.keys(cart[i]);
    //var pricei=cart[i][itemi];
    totalprice=totalprice+cart[i].itemPrice;
  }
  return totalprice;
  // write your code here
}

function removeFromCart(item)
{
  var itemInCart = false;
  if(cart.length>0)
  {
    for(var i=0;i<cart.length;i++)
    {
      var itemi=cart[i].itemName;
      if(itemi===item)
      {
        itemInCart = true;
        cart.splice(i, 1);
        return cart;
      }
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber)
{
  if (!cardNumber)
  {
    return ("Sorry, we don't have a credit card on file for you.");
  } else
  {
    var totalpricy=total();
    cart = [];
    return ("Your total cost is $" + totalpricy + ", which will be charged to the card " + cardNumber + "." );
  }
}
