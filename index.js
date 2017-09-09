var cart = [];
var output;
function getCart()
{
 return cart;
}
function getOutput()
{
  return output;
}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item)
{
  var itemObj = {};
  itemObj[item] = parseInt(Math.random() * 100)
  //itemObj[itemName] = item;
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);

  return cart;
 // write your code here
}

function viewCart()
{
  var itemList = "In your cart, you have";

  if(cart.length === 0)
  {
    console.log("Your shopping cart is empty.");
  }else if(cart.length === 1)
  {//itemList + Object.keys(cart[0]) + "at $" + cart[0].item +"."
    var objectKey = Object.keys(cart[0]);
    console.log(`${itemList} ${objectKey} at $${cart[0][objectKey]}.`);
    //thingsIwantToPrint =`${itemList} ${objectKey} at $${cart[0][objectKey]}.`;

  }else if(cart.length === 2)
  {

    console.log(`${itemList} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);

  }else if(cart.length >= 3)
  {
    var keys = [];
    var vals = [];
    var listString = itemList;

    for (var i = 0; i < cart.length; i++)
    {
      keys[i] = Object.keys(cart[i]);
      vals[i] = `at $${cart[i][Object.keys(cart[i])]},`;

      if (i === cart.length - 1)
      {
        keys[i] = `and ${Object.keys(cart[i])} `;
        vals[i] = `at $${cart[i][Object.keys(cart[i])]}.`;
      }
    }

    for (var w = 0; w < cart.length; w++)
    {
      listString += `${keys[w]} ${vals[w]}`;

    }
    //output = `${listString}`;
    //return `${listString}`;
    console.log(`${listString}`);
  }

}

/*
* 1 item — `In your cart, you have bananas at $17.`
* 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
* 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`

*/
function total()
{
  var total = 0;
  for(var i = 0; i < cart.length; i++)
  {
    total += cart[i][Object.keys(cart[i])];
  }

  return total;
}

function removeFromCart(item)
{
  for(var i = 0; i < cart.length; i++)
  {


    if(cart[i].hasOwnProperty(item) === true)
    {
      cart.splice(i, 1);
      return cart;

    }else
    {
      console.log("That item is not in your cart.");
      return cart;

    }
  }
}




function placeOrder(cardNumber) {
  // write your code here
}
