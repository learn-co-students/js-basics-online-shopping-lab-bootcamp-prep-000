var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart;
function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var price = getRandomInt(1,100);
  cart.push({[item]: price});

console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  // write your code here
  if (cart.length <= 0) {
        console.log("Your shopping cart is empty.");
    }
const l = cart.length
let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}



function total() {
  // write your code here
  cart;
  var t = 0;

   for (var i = 0; i < cart.length; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }
   }
   return t;

}


function removeFromCart(item) {
  // write your code here
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);

  } }} else {
  console.log("That item is not in your cart.");
  }
}


function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber=== undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");}
    else {

    var value = total();
    console.log(`Your total cost is $${value}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }

}


/*
function viewCart() {
  // write your code here
  if (cart.length <= 0) {
        console.log("Your shopping cart is empty.");
    }else {


  var s = "In your cart, you have "
      for (var i = 0; i < cart.length; i++) {
        var item = `${cart[i]}`
        var price = cart.item;
        var x =0;
        while(x < cart.length){
          s += `${item} at $${price},`
          ++x

        }
        s += 'and' + item + " at $" + price

      }
      return console.log(`${s}.`);
    }

}*/
