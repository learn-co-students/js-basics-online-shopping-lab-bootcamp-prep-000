var cart = new Array();

function getCart()
{
  return cart;
}

function addToCart(item)
{
  cart.push(item);
  var price = Math.floor(Math.random()*(100 - 0)) + 0;
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart()
{
  var length = cart.length;
  //var price = Math.floor(Math.random()*(100 - 0)) + 0;
  //var i = 0;
  if(length == 0)
  {
      console.log("Your shopping cart is empty.");
  }
//  {
//      cart.push("In your cart you have " + `${item[i]}` `${price[i]}` );
//      i++;
//      return cart;
//  }

  }


function setCart(newCart)
{
  cart = newCart;
}

function removeFromCart(item)
{
  if(item.hasOwnProperty(item))
  {
    cart.splice(item);
  }
  else
  {
    return "That item is not in your cart.";
  }
}

function placeOrder(card)
{
  if(card == 0)
  {
    return "We do not have a credit card on file for you to place your order";
  }
  else
  {
    return "Your total cost is $${total()}, which will be charged to the card${card}";
  }
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
