var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*1. The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price: `{ itemName: itemPrice }`. As more items are added, the `cart` should start to look something like this: `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way to dynamically set the keys in an object literal. That is, it allows the use of variables as keys. If you're having trouble recalling the syntax, take a look back at the **Top Tip** in the [JavaScript Objects](https://learn.co/lessons/javascript-objects) lesson.
    + Upon the successful addition of a new item to the cart, the function should print `<itemName> has been added to your cart.` to the console and then `return` the updated `cart`.*/

function addToCart(item) {
 cart[item]=Math.floor((Math.random() * 100) + 1);
 console.log(item+" has been added to your cart.");
 return cart;
}
addToCart("gas")
console.log(cart.gas);
addToCart("liqueur")
addToCart("spirit")
console.log(countProperties(cart));
console.log(viewCart());
removeFromCart("liqueur")
console.log(viewCart());

console.log(placeOrder() );
/*2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, printing out the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The printed statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`*/
function viewCart() {
  var i = countProperties(cart);
  var res='In your cart, you have '
  var count = 0
  if ( i === 0){return "Your shopping cart is empty."}
  switch(i) {
    case 1:
          for (var key in cart){

            res+= key+" at $"+cart[key]
          }

        break;
    case 2:
       count = 0
    for (var key in cart){

      res+= key+" at $"+cart[key]+(count ===0 ? " and " : "")
      ++count
    }

        break;
    default:
       count = 0
      for (var key in cart){

        res+= key+" at $"+cart[key]+(count === (i-2) ? ", and " : ((count === i-1)?"":", "))
        ++count
      }
        break;
}
res+="."
return res
}

function countProperties(obj) {
    return Object.keys(obj).length;
}



function total() {
  var money = 0
    for (var all in cart){
      money+=cart[all]
    }
 return money
}

function removeFromCart(item) {

    if(cart.hasOwnProperty(item)){
      delete cart[item]
      console.log("That item is not in your cart.");
      return cart
    }
    return cart
  }





function placeOrder(cardNumber = 0) {
  var res = ((cardNumber === 0 ) ? "Sorry, we don't have a credit card on file for you." : "Your total cost is $"+ total() +", which will be charged to the card "+cardNumber+".")
console.log(res);
  return res
}
