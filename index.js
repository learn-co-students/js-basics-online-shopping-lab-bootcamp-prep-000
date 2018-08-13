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
  cart.push({ itemName: item,itemprice:price });
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
    var items=[];
     for (var i = 0; i < cart.length; i++)
     {  for (var item in cart[i])
        {
          items[i]=cart[i];
        }
     }
     return"In your cart, you have " +cart[i]+' at $'+cart[i];
   }

  //
}

function total()
{
  var totalprice=0;
  for ( var i = 0 ; i<cart.length;i++ )
  {
    //var itemi=Object.keys(cart[i]);
    //var pricei=cart[i][itemi];
    totalprice=totalprice+cart[i].price;
  }
  return totalprice;
  // write your code here
}

function removeFromCart(item)
{
  if(cart.length>0)
  {
    for(var i=0;i<cart.length;i++)
    {
      var itemi=Object.key(cart[i]);
      if(itemi===item)
      {
        cart.splice(i,1);
      }
      else
      {
        return 'That item is not in your cart.';
      }
    }
  }
  return cart;
}

function placeOrder(cardNumber)
{
  cart=[];
}
