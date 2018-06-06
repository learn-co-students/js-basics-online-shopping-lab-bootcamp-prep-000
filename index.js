var cart = [];

// our random number generator, takes no params (internal setup), returns int value
function getRandomInt()
{
  // set max price
  Math.ceil(100)
  
  // set min price
  Math.floor(1)
  
  // return the number
  return Math.floor(Math.random() * 101);
}



function getCart() 
{
 return cart;
}

function setCart(c) 
{
  cart = c;
  return cart;
}

/*
The addToCart() function accepts one argument, the name of an item.
Use that passed-in string to create a new object representing the item. 
The object should consist of two key-value pairs : 
{ itemName: name of the item, itemPrice: price of the item, }. 
As more items are added, the cart should start to look something like this: 
[ { itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, 
                                            { itemName:"eggs", itemPrice: 49 }].
The price of each item should be a randomly-generated integer between 1 and 100.
*/

function addToCart(item) 
{
  // creat a new obj from the string and give it a price
  var newObj = { itemName: item, itemPrice: getRandomInt() }
  
  // add the item to the cart
  cart.push(newObj)
  
  // let the customer know what went into the cart
  return `${newObj.itemName} has been added to your cart.`
}

/*
The viewCart() function does not accept any arguments. It should loop over every item in 
your cart, returning the contents as one long, coherent statement in this format: 
In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
If the cart is empty, the function should instead return Your shopping cart is empty.
Note: Pay close attention to the syntax above. The returned statement should be a 
single sentence that begins with In your cart, you have, terminates in a period, and 
can assume the following shapes according to how many items the cart contains:
1 item — In your cart, you have bananas at $17.
2 items — In your cart, you have bananas at $17, and pancake batter at $5.
3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
*/

function viewCart() 
{
  // check if cart contains items
  if(cart.length > 0)
  {
    // the cart contains items
    // variable for placing the 'and/,'
    var andPlacement = cart.length
    
    // start retString off
    var retString = "In your cart, you have "
    
    // loop through the cart's items
    for(let i = 0; i < cart.length; i++)
    {
      // decrement the andPlacement
      andPlacement--
      
      // add the item's itemName and itemPrice
      retString += `${cart[i].itemName} at $${cart[i].itemPrice}`
      
      switch(andPlacement) 
      {
        case 1:
          // add and because only 2 items left
          retString += ", and "
          break;
        case 0:
          // add . because last item
          retString += "."
          break;
        default:
          // just keep adding commas
          retString += ", "
      }
    }
    
    // return the shopping list
    return retString
  }
  else
  {
    // the cart is empty
    return "Your shopping cart is empty."
  }
}

/*
The total() function accepts no arguments, iterates through the cart array, 
and returns the current total value of the items in the cart.
*/

function total() 
{
  // check if there are items in the cart:
  if(cart.length > 0)
  {
    // create var to store total
    var total = 0
    // check the cart prices
    for(let i = 0; i < cart.length; i++)
    {
      // tally it up!
      total += cart[i].itemPrice
    }
    
    // return the total
    return total
  }
  
  return total
}

function removeFromCart(item) 
{
    // variable to find the item
    var count = 0
    
    // itemNumber for if the item is found
    var itemNumber = -1
    
    // check if the item is in your cart
    for(let i = 0; i < cart.length; i++)
    {
      if(cart[i].itemName === item)
      {
        count = 1
        itemNumber = i
      }
    }
    
    // remove the item from the cart or return false
    if(count > 0 && itemNumber != -1)
    {
      cart.splice(itemNumber, 1)
      // return the cart
      return cart
    }
    else
    {
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  // write your code here
  
  // final step, empty the cart
  cart = []
}
