var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var items = new Object( { [itemName] : itemPrice } );
  cart.push(Object.assign({}, items, { [itemName]: itemPrice }));
  console.log(`${itemName} has been added to your cart.`);
  return cart;

}

function viewCart()
{
   function itemsNewArray()
  {
    var newArray = []
    for (var i = 0; i < cart.length - 1; i++)
    {
    newArray.push(` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`);
    }
  return newArray;
  }
    if (cart.length === 0){
      console.log("Your shopping cart is empty.");
    }
    else if (cart.length === 1){
      console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`)
    }
    else if (cart.length === 2){
      console.log(`In your cart, you have${itemsNewArray()} and ${Object.keys(getCart()[cart.length - 1])[0]} at $${getCart()[cart.length - 1][Object.keys(getCart()[cart.length - 1])[0]]}.`);
  }
    else if (cart.length > 2){
      console.log(`In your cart, you have${itemsNewArray()}, and ${Object.keys(getCart()[cart.length - 1])[0]} at $${getCart()[cart.length - 1][Object.keys(getCart()[cart.length - 1])[0]]}.`);
  }
}

function total()
{
  var totalCost = 0;
  for (var i = 0; cart.hasOwnProperty(i) === true; i++){
    totalCost += getCart()[i][Object.keys(getCart()[i])[0]];
 }
 return totalCost;
}

function removeFromCart(item)
{
   var removeItems = {};

   for (var i = 0; cart.hasOwnProperty(i) === true; i++)
      {
      removeItems[Object.keys(cart[i])[0]] = i;
      }

  if(removeItems.hasOwnProperty(item)===true)
    {
      cart.splice(removeItems[item], 1);
      return getCart();
    }

  else if(removeItems.hasOwnProperty(item)===false)
    {
      console.log("That item is not in your cart.");
      return getCart();
    }
}

function placeOrder(cardNumber)
{
    var cartTotal = total();
    if (cardNumber === undefined){
      console.log("Sorry, we don't have a credit card on file for you.");
    }
    else if(cardNumber > 0){
      console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
      cart = [];
      return cart;
    }
}
