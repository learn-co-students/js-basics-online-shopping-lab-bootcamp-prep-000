var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  var numItems=getCart().length;
  for (var i = 0; i< numItems; i++)
  {
    let itemObj = cart[i];
    let thing = Object.keys(itemObj);
    let price = itemObj[thing];

    t += price;
  }

  return t
}
function getCart()
{
  //return Object.keys(cart);
  return cart;
}
function addToCart(item)
{
  var rawPrice=100*Math.random();
  var price=Math.floor(rawPrice);
  var newThing={[item]:price};
  cart.push(newThing);
  console.log(item+" has been added to your cart.");
  //return Object.keys(cart);
  return cart;
}
function viewCart()
{
  var numItems=cart.length;
  if(numItems==0)
  {
    console.log("Your shopping cart is empty.");
  }
  else
  {
    var msg="In your cart, you have ";
    for (var i = 0; i< numItems; i++)
    {
      var itemObj = cart[i];
      var thing = Object.keys(itemObj);
      var price = itemObj[thing];

        if(i==0)
        {
          msg=msg+thing+" at $"+price;
        }
        else
        {
          msg=msg+", "+thing+" at $"+price;
        }
    }
    console.log(msg+".");
  }

}
function removeFromCart(item)
{

  var numItems=cart.length;
  var matchFlag=-1;
  for (var i = 0; i< numItems; i++)
  {
    let itemObj = cart[i];
    let thing = Object.keys(itemObj);

    if(thing==item)
    {
      matchFlag=i;
      break;
    }
  }
  if(matchFlag==-1)
  {
    console.log("That item is not in your cart.");
  }
  else
  {
    cart.splice(matchFlag, 1);
  }
  return getCart();
}
function placeOrder(cardNumber)
{
  if(typeof cardNumber !== "undefined")
  {
    var totalCost=total();
    console.log("Your total cost is $"+ totalCost+", which will be charged to the card "+cardNumber+".");
    cart=[];
  }
  else
  {
    console.log("We don't have a credit card on file for you to place your order.");
  }

}
