
// Creating an ARRAY of OBJECTS
var cart = [];                              // empty array created

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;        // why is this done?
  return cart;
}

 // write your code here  - use cart to create a new object
 // wrong -   var c = new Object({ itemName: "name of the item"}, {itemPrice: "price of the item"  });
 // need to push new objects (with the 2 key value pairs) into the cart
// Each element in the array must contain an object with 2 key:value pairs     1 element = {itemName: name}, {itemPrice: price}


function addToCart(name) {    // name is the name of the item i.e. string
  
  var price = Math.floor(Math.random() * 100);
  var itemObject = {
  "itemName": name,      // need to write the keys as strings - else will think it's a variable
  "itemPrice": price
  } 
  cart.push(itemObject); 
  return `${name} has been added to your cart.`
}


function viewCart() {
  if (cart.length === 0) {
  return("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`; 
  } 
  let itemsAndPrices = [];    
  
  for (let i = 0; i < cart.length - 1; i++) {
    itemsAndPrices.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
  }
  return `In your cart, you have ${itemsAndPrices.join(', ')}, and ${getCart()[cart.length - 1].itemName} at $${getCart()[cart.length - 1].itemPrice}.`
}  

viewCart();

// ****************    POINTERS      **************
// 1. the empty array itemsAndPrices has to be defined outside the loop 
// 2. the return of the loop has to be outside for loop as well 
// 3. because last element / object of array needs an 'and' before it, can do the comma separation bit for (n-1) objects and do  a separate bit for n with the `, and` 
// 4. getcart()[-1].itemName  - DOES NOT WORK - would need to do a slice(-1) for the object, but cannot choose explicitly itemName or itemPrice...        must indicate the last element by getting a + number via cart.length - 1

/*     */
// total() WORKS   - with or without parseInt on (getCart()[i].itemPrice) !!    

/* ORIGINALLY WORKING CODE  */
function total() { 
  let tp = 0;
  let i = 0;
  while (i < cart.length) {
    tp = tp + parseInt(getCart()[i].itemPrice);
    // tp += getCart()[i].itemPrice;   - shorthand works too
    i++;
  }
  return tp;
}  



function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) { 
    if (item === getCart()[i].itemName) {
      cart.splice(i, 1);  // 1                        
      return cart;    // 2 
    }      
  }
  return `That item is not in your cart.` // 3  
}  

// 1 - i is the POS looping through array
// 2 - this return can be inside for loop as if condition is met, nothing else needs to be done, therefore return inside is fine
// 3 - this return statement needs to be outside for loop, since even if there is no match of item on first iteration of array, doesn't mean you can escape the loop until all checks / matches are made - at which point - you can say that the item is not in the cart. 




// define  tp outside for wider (maybe global scope)??

 
/* WORKING CODE   */
function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.");
  }
  else {
  let varTot = total();   // 1 
  cart.splice(0,cart.length);  // 2 
  return `Your total cost is $${varTot}, which will be charged to the card ${cardNumber}.`;
  } 
}       


// 1 - by calculating total and assigning it to a variable within the else statement - the variable's value holds for inside the else statement, even if the splice statement or clear cart statement empties cart - therefore calling the variable in the return statement will still get the right value
// 2 - - Don't have to use Splice, can just used cart = []; 
  

/* TRIAL CODE - also works 
function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.");
  }
  else {
  let varTot = total();   // 1 
  cart = [];
  return `Your total cost is $${varTot}, which will be charged to the card ${cardNumber}.`;
  } 
}   

*/ 





