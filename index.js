var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your own code here
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`)
 return cart;
}


function viewCart() {
  // write your code here
  var indivObj = {}  // captures each object
  var indivItem = [] //array of keys within each object
  var itemName = ''  //specific object key - i.e., item name
  var itemPrice = 0  //object value - i.e., item price
  var itemList = []  //array of items with prices
  if (!cart.length){
    console.log("Your shopping cart is empty.")
    return cart;
  }
  if (cart.length === 1) {
    indivObj = cart[0];
    indivItem = Object.keys(indivObj);
    itemName = indivItem[0];
    itemPrice = indivObj[itemName];
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
    return cart;
  } 
  if (cart.length === 2) { 
    // 2 items
    for (let i = 0, l = cart.length; i < l; i++) {
      indivObj = cart[i];
      indivItem = Object.keys(indivObj);
      itemName = indivItem[0];
      itemPrice = indivObj[itemName];
      itemList[i] = `${itemName} at $${itemPrice}`;
    }
    console.log(`In your cart, you have ${itemList.join(' and ')}.`);
    return cart;
  }
  if (cart.length > 2) {
    // 3 or more items
    for (let i = 0, l = cart.length; i < l; i++) {
      indivObj = cart[i];
      indivItem = Object.keys(indivObj);
      itemName = indivItem[0];
      itemPrice = indivObj[itemName];
      itemList[i] = `${itemName} at $${itemPrice}`;
    }
    var lastItem = itemList.pop();
    console.log(`In your cart, you have ${itemList.join(', ')}, and ${lastItem}.`);
    return cart;
  }
}


function total() {
  // write your code here
  var totalItem = 0;
  var indivObj = {};  // captures each object
  var indivItem = []; //array of keys within each object
  var itemName = '';  //specific object key - i.e., item name
  var itemPrice = 0;  //object value - i.e., item price
  
  for (let i = 0, l = cart.length; i < l; i++){
    indivObj = cart[i];
    indivItem = Object.keys(indivObj);
    itemName = indivItem[0];
    itemPrice = indivObj[itemName];
    totalItem += itemPrice;
  //  console.log(totalItem + '  ' + itemPrice)
  }
  return totalItem;
}


function removeFromCart(item) {
  // write your code here
  for (let i = 0, l = cart.length; i < l; i++){
    if (cart[i].hasOwnProperty(item)){
      //console.log('delete');
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
   console.log("Sorry, we don't have a credit card on file for you.");
   return;
  } else {
    var t = total();
    cart = [];
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    return cart;
  }
}

//  TEST code
cart = [];
addToCart("Bran Muffins");
addToCart("Seeds");
addToCart("Apples");
addToCart("Pears");
viewCart();
placeOrder(15345);
viewCart();
