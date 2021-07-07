var cart = [];

function getCart() 
{
 return cart;
}
function setCart(c) 
{
  cart = c;
  return cart;
}
function addToCart(item) 
{
  var object = {[item]: Math.floor(Math.random()*100)};
  cart.push(object);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart() 
{
  if(cart.length < 1)
  {
    console.log("Your shopping cart is empty.");
  }
  else if(cart.length === 1)
  {
    var objectHold = cart[0];
    var keyArray = Object.keys(objectHold);
    var key1 = keyArray[0];
    var p1 = objectHold[key1];
    console.log(`In your cart, you have ${key1} at $${p1}.`);
  }
  else if(cart.length === 2)
  {
    var objectHold = cart[0];
    var objHold2 = cart[1];
    var keyArray = Object.keys(objectHold);
    var keyArray2 = Object.keys(objHold2);
    var key1 = keyArray[0];
    var key2 = keyArray2[0];
    var p1 = objectHold[key1];
    var p2 = objHold2[key2];
    console.log(`In your cart, you have ${key1} at $${p1} and ${key2} at $${p2}.`)
  }
  else if(cart.length > 2)
  {
    var c = 0;
    var oHold;
    var kHold;
    var returnString = "In your cart, you have ";
    while(c < cart.length - 1)
    {
      oHold = cart[c];
      kHold = Object.keys(oHold);
      returnString = returnString + `${kHold[0]} at $${oHold[kHold[0]]}, `;
      c = c + 1;
    }
    oHold = cart[c];
    kHold = Object.keys(oHold);
    returnString = returnString + `and ${kHold[0]} at $${oHold[kHold[0]]}.`;
    console.log(returnString);
  }
}
function total() 
{
  var c = 0;
  var oHold;
  var kHold;
  var num = 0;
  var total = 0;
  while(c < cart.length)
  {
    oHold = cart[c];
    kHold = Object.keys(oHold);
    num = parseInt(oHold[kHold[0]]);
    total = total + num;
    c = c + 1;
  }
  return total;
}

function removeFromCart(item) 
{
  var c = 0;
  var oHold;
  var kHold;
  var found = true;
  var itemIndex = 0;
  while(c < cart.length && found)
  {
    oHold = cart[c];
    kHold = Object.keys(oHold);
    if(kHold[0] === item)
    {
      itemIndex = c;
      found = false;
    }
    c = c + 1;
  }
  if(found)
  {
    console.log("That item is not in your cart.")
    
  }
  else
  {
    cart.splice(itemIndex, 1);
  }
  return cart;
}

function placeOrder(cardNumber) 
{
  if(typeof cardNumber === "undefined")
  {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else
  {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}












