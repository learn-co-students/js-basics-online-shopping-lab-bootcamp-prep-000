var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
/*
1. The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist of two key-value pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more items are added, the `cart` should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", item1Price: 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + Upon the successful addition of a new item to the cart, the function should return `<itemName> has been added to your cart.` .
*/
function addToCart(item) {
 // write your code here
 var c = getCart();
 var obj = {};
 obj.itemName = item;
 obj.itemPrice = c.length + 1;
 c.push(obj); 
 return `${item} has been added to your cart.`;
}

/*
2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, returning the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead return `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The returned statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
*/

function viewCart() {
  // write your code here
  var str = "In your cart, you have ";
  var i;
  var c = getCart();
  if (c.length > 0 )
  {
    for (i=0;i<c.length;i++)
    {
      str += `${c[i].itemName} at $${c[i].itemPrice}, `;
    }
    var stri = str.split(",");
    stri.pop();
    var fin = stri[stri.length-1];
    if (c.length > 1)
    {
      fin = " and" + fin + ".";
    }
    else
    {
      fin = fin + ".";
    }
    stri[stri.length-1] = fin;
  
    str = stri.join()
  }
  else
  {
    str = "Your shopping cart is empty."; 
  }
  return str;
}

function total() {
  // write your code here
  var c = getCart();
  var i = 0;
  var tot = 0;
  
  for (i=0;i<c.length;i++)
  {
    tot += c[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  // write your code here
  var c = getCart();
  var d = false;
  
  for (var i=0; i<c.length; i++)
  {
    if (c[i].itemName === item)
    {
      c.splice(i,1);
      d = true;
      viewCart();
      return c;
    }
  }
  
  if (!d)
    return "That item is not in your cart.";
    
}

function placeOrder(cardNumber) {
  // write your code here
  var c = getCart();
  var t = total();
  if (isNaN(cardNumber))
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  else
  {
    var empty = [];
    setCart(empty);
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
  }
}

/*

## The final send-off
This lab is _not_ easy! The methods, especially `viewCart()` require careful planning and a sharp eye. The `cart` array is a non-trivial nested data structure, and it would be a good idea to periodically check the value of your variables (think: `console.log()`, `debugger`, etc.) at different points within your functions, _especially_ when attempting to iterate over the `cart` and its items.
*/
