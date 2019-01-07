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

function addToCart(itemName)
{
  var itemPrice = Math.floor(Math.random() * 10);
  var item = {};

  item[itemName] = itemPrice;
  cart.push(item);
  console.log(`${itemName}` + " has been added to your cart.");
  return cart;
  //cart = new Object({[itemName]: [itemPrice]});
}

function viewCart()
{
  var size = cart.length;
  if (size === 0)
  {
    console.log("Your shopping cart is empty.");
  }
  else
  {
    var i = 0;
    //Need to access [lemons: 9]
    //Object.keys(cart[i]) = [lemons]
    //Object.keys(cart[i])[0] = "lemons"
    //cart[i][Object.keys(cart[i])[0]] = 9
    var name = `${Object.keys(cart[i])[0]}`;
    var price = `${cart[i][Object.keys(cart[i])[0]]}`;
    var items =  "In your cart, you have " + `${name}`+ " at $" + `${price}`;

    if (size > 1) //2 carts
    {
      if (size > 2) // > 3 carts
      {
        items =  items + ",";
        for( i = 1; i < (size - 1); i++)
        {
          name = `${Object.keys(cart[i])[0]}`;
          price = `${cart[i][Object.keys(cart[i])[0]]}`;
          items =  items + " " + `${name}`+ " at $" + `${price}` + ",";
        }
      }
      items = items + " and " + `${Object.keys(cart[size-1])[0]}` + " at $" + `${cart[size-1][Object.keys(cart[size-1])[0]]}`;
    }
    items = items + ".";
    console.log(items);
  }
}

function total()
{
  var price = 0;
  for(let i = 0; i < cart.length; i++)
  {
    price = price + cart[i][Object.keys(cart[i])[0]];
  }
  return price;
}

function removeFromCart(item)
{
  var i;
  for(i = 0; (i < cart.length) && (Object.keys(cart[i])[0] !== item); i++);
  if (i === cart.length)
  {
    console.log('That item is not in your cart.');
  }
  else
  {
    cart.splice(1,i); //Remove the 'i' object
  }
  return cart;
}

function placeOrder(cardNumber)
{
  if (!cardNumber)
  {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else
  {
    console.log("Your total cost is $" + `${total()}` + ", which will be charged to the card " + `${cardNumber}` + ".");
    while(cart.length > 0)
    {
      cart.pop();
    }
  }
}
