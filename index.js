var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart( item )
{

  console.log("########  Into addToCart  ########")
  var price=0;

  var myItems = Object.keys(cart)
  console.log("#### Keys count is:", myItems.length )

  price = Math.floor( 100 * Math.random() )
  console.log("##### Price is:", price )
  console.log("### Length of cart is:", cart.length )
  //Object.assign( {}, cart, {[item]:price} )

//  console.log("New Item: ", cart[item])
  cart.push( {[item]:price} )
//cart[item] = price
//cart.item = price

  console.log(`${item} has been added to your cart.`)

//  const iPhoneCost = getCart()[2]["iPhone"];
//  const totalCost = socksCost + puppyCost + iPhoneCost;
  return cart;
}

function getCart()
{
  return cart
}

function viewCart()
{
  var myString=""

  console.log("####  Cart Length is:", cart.length)
  if( cart.length == 0 )
    myString = "Your shopping cart is empty."
  else
  {
    myString = ("In your cart, you have ")

    for (var i = 0; i < cart.length; i++)
    {
      for (var item in cart[i])
      {
        myString += `${item} at $${cart[i][item]}`;
        if( i < cart.length - 1 )
          myString += ', '
        else
           myString += '.';
      }
    }

  }

  console.log( myString )
}  // End of viewCart

function removeFromCart( item ) {

  var inCart = false;

  for( var i=0; i < cart.length; i++)
  {
    if( cart[i].hasOwnProperty( item ) )
    {
      cart.splice(i,1)
      inCart = true
    }
  }

  if( inCart == false )
    console.log("That item is not in your cart.")

  return cart
}

function placeOrder( cardNumber ) {

  if( cardNumber == null )
    console.log("We don't have a credit card on file for you to place your order.")
  else
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

}

/*
function hasItem(c, item) {
  for (let i = 0, l = c.length; i < l; i++) {
    if (c[i].hasOwnProperty(item)) {
      return true
    }
  }

  return false
}
*/
