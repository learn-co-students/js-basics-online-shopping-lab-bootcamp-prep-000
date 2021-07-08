var cart = [];
var totalPrice;
var itemObject;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var itemPrice = Math.floor(Math.random() * 100) + 1;
  itemObject = {}
  itemObject[item] = itemPrice;

 cart.push(itemObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
 
// var newObj = {
   
//   itemName: item,
//   itemPrice: (Math.floor(Math.random() * 100) + 1)
// };
 
// return `${newObj.itemName} has been added to your cart.`;
 
 
}

function viewCart() {

  console.log("View cart function starts here");

  if (cart.length === 0) {

    return console.log("Your shopping cart is empty.");
  }

  else if (cart.length === 1) {

    var item1 = Object.keys(cart[0])[0];
    var price1 = cart[0][item1];

    return console.log(`In your cart, you have ${item1} at $${price1}.`);
  }

  else if (cart.length === 2) {

   item1 = Object.keys(cart[0])[0];
   price1 = cart[0][item1];

    var item2 = Object.keys(cart[1])[0];
    var price2 = cart[1][item2];

    return console.log(`In your cart, you have ${item1} at $${price1} and ${item2} at $${price2}.`);

    //In your cart, you have ${item1} at $${price1} and ${item2} at $${price2}.
  }

  else if (cart.length > 2) {

    /* `In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, and quince at $${quinceCost}.` */

    var currentCart = "In your cart, you have";
    var n = 0;

      while (n < cart.length - 1) {
        currentCart += (` ${Object.keys(cart[n])} at $${Object.values(cart[n])},`)
        n++;
       }

      currentCart += (` and ${Object.keys(cart[n])} at $${Object.values(cart[n])}.`);

    return console.log(currentCart);
  }
}

function total() {

  totalPrice = 0;
  var q = 0;

    while (q < cart.length) {
      totalPrice += parseInt ( Object.values(cart[q]) );
      q++;
    }

    //seems to be adding strings together rather than adding integers. Expected '01182' to be 93. 011 + 82 = 93

  return totalPrice;
}

function removeFromCart(item) {

  for (let c = 0; c < cart.length; c++) {

      if (  cart[c].hasOwnProperty(item) ) {
        var foundItem = true;
        cart.splice(c, 1);
      }
  }
  
  if (foundItem !== true){
    console.log ("That item is not in your cart.");
  }
      
 return cart;
  
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }

  else {
    cart = [];
    return console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
  }
}
