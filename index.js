var cart = [];

function setCart(newCart)
{
  cart = newCart;
}

function total()
{
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart()
{
  return cart
}

function addToCart(item)
{
  var price;

  price = Math.floor(Math.random() * 100);

if(price == 0)
{
  do
{
  price = Math.floor(Math.random() * 100);
}
while(price == 0)
}
var objdef = item
//cart = Object.assign({[obj]:price}, cart)

cart =[...cart, {[objdef]:price}]

console.log(item + " has been added to your cart.")

return cart
}

function viewCart()
{
  if(cart.length === 0)
  {
    console.log("Your shopping cart is empty.")
  }
  else
  {
    var string2 =""
    for(var p = 0; p< (cart.length-1); p++)
    {
      var cartobjs =Object.keys(cart[p])

      for (var j = 0; j< cartobjs.length ; j++)
      {

       string2 = string2 + (`${cartobjs} at $${cart[p][cartobjs]}, `)
     }
    }
    var cartobjs1 =Object.keys(cart[(cart.length-1)])


    var string3 = (`${cartobjs1} at $${cart[cart.length-1][cartobjs1]}.`)

    console.log("In your cart, you have " + string2 + string3)
  }
}

function removeFromCart(itemname)
{
  var counter =0;
  for (var q =0 ; q <(cart.length); q++)
  {
    var cartobjs2 =Object.keys(cart[q])

    for ( var cartobjs2 in cart[q])
    {
      if(cart[q].hasOwnProperty(itemname))
      {
        cart.splice(q,1)
        return cart
      }
      else
      {
        counter ++;
      }
    }
    }

    if(counter == cart.length)
    {
      console.log("That item is not in your cart.")
    }
  }

  function placeOrder(cardNumber)
  {
    if(isNaN(cardNumber))
    {
      console.log("We don't have a credit card on file for you to place your order.")

    }
    else
    {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

    }

    cart.splice(0)
    return cart
  }
