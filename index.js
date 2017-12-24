var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPair = new Object({});
 var itemName = item;
 var itemPrice = (Math.floor((Math.random() * 100) + 1));
 
 itemPair[item] = itemPrice;
 
 cart.push(itemPair);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  else {
    var listOfContents = `In your cart, you have ` + Object.keys(cart[0]) + ` at $` + Object.values(cart[0]);
    if (cart.length === 1) {
        var listOfOneItem = `${listOfContents}` + `.`;
        console.log(listOfOneItem);
    }
    else if (cart.length === 2) {
       var listOfTwoContents = `${listOfContents}` + ` and ` + Object.keys(cart[1]) + ` at $` + Object.values(cart[1]) + `.`;
      console.log(listOfTwoContents);
    }
    else {
      for (var i = 1; i < cart.length - 1; i++) {
        listOfContents += `, ` + Object.keys(cart[i]) + ` at $` + Object.values(cart[i]);
      }
      var listOfThreePlusContents = `${listOfContents}` + `, and ` + Object.keys(cart[cart.length - 1]) + ` at $` + Object.values(cart[cart.length - 1]) + `.`;
      console.log(listOfThreePlusContents);
      return listOfThreePlusContents;
    }
  }
}
 
function total() {
var prices = [];
  for (var i = 0; i < cart.length; i++) {
    prices.push(Number((Object.values(cart[i]))));
  }
var sum = 0;
  for (var k = 0; k < cart.length; k++) {
    sum += prices[k];
  }
return sum;
}


function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item) === true) {
    cart.splice(i, 1);
   return cart; 
  }
}
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
if (isNaN(cardNumber) === true) {
  console.log("Sorry, we don't have a credit card on file for you.")
}
else {
  console.log(`Your total cost is $` + `${total()}` + `, which will be charged to the card ` + `${cardNumber}` + `.`);
  cart.splice(0, cart.length);
  return cart;
}
}
