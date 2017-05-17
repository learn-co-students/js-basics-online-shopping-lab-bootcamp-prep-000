var cart = [];

function getCart()
{
  return cart;
}

function addToCart(userItem)
{
  var itemPrice = Math.floor(Math.random() * 100);
  var objectToAdd = {};
  objectToAdd[userItem] = itemPrice;
  cart.push(objectToAdd);
  console.log(`${userItem} has been added to your cart.`)
  return cart;
}
function viewCart()
{
  //loop over every item in cart to print out "In your cart you have [item and price pairs]."
  //If cart is empty, print out "Your shopping cart is empty."
  var message;

  if (cart.length == 0)
  {
    message = "Your shopping cart is empty.";
  }
  else
  {
    message = "In your cart, you have ";
    for (let x = 0; x < cart.length; x++)
    {
      //Get the names
      var itemObject = cart[x];
      var itemNameArray = Object.keys(itemObject);
      var actualItemName = itemNameArray[0];
      //Get the values
      var actualItemPrice = itemObject[actualItemName];
      message += `${actualItemName} at $${actualItemPrice}`;

      if (x < cart.length - 1)
      {
        message += ", ";
      }
      else
      {
        message += "."
      }
    }
  }
  console.log(message);
}

function removeFromCart(itemToRemove)
{
    var isThatItemInTheCart = false;

    for (let x = 0; x < cart.length; x++)     // check every item...
    {
      var itemObjectToCheck = cart[x];
      if (itemObjectToCheck.hasOwnProperty(itemToRemove))
      {
        isThatItemInTheCart = true;

        cart.splice(x, 1);

        return cart;
      }
    }
    if (!isThatItemInTheCart)
    {
      console.log("That item is not in your cart.");
    }
}

function placeOrder(creditCardNumber)
{
  // If no credit card is received, print "We don't have a credit card on file for you to place your order."
  // If there is a credit card on file, print out "Your total cost is $${total()}, which will be charged to ${cardNumber}."
  // Empty the cart.

  if(!creditCardNumber)
  {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  if(creditCardNumber)
  {
    var yourFinalTotal = total();
    console.log(`Your total cost is $${yourFinalTotal}, which will be charged to the card ${creditCardNumber}.`);
    cart = "";
  }


}


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
