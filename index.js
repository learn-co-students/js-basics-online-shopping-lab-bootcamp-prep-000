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
    indivObj = cart.shift();
    indivItem = Object.keys(indivObj);
    itemName = indivItem[0];
    itemPrice = indivObj[itemName];
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
    return cart;
  } 
  if (cart.length === 2) { 
    // 2 items
    for (let i = 0, l = cart.length; i < l; i++) {
      indivObj = cart.shift();
      indivItem = Object.keys(indivObj);
      itemName = indivItem[0];
      itemPrice = indivObj[itemName];
      itemList[i] = `${itemName} at $${itemPrice}`;
    }
    console.log(`In your cart, you have ${itemList.join(' and ')}.`)
    return cart;
  }
  if (cart.length > 2) {
    // 3 or more items
    for (let i = 0, l = cart.length; i < l; i++) {
      indivObj = cart.shift();
      indivItem = Object.keys(indivObj);
      itemName = indivItem[0];
      itemPrice = indivObj[itemName];
      itemList[i] = `${itemName} at $${itemPrice}`;
    }
    var lastItem = itemList.pop()
    console.log(lastItem)
    console.log(`In your cart, you have ${itemList.join(', ')}, and ${lastItem}.`)
    return cart;
  }
}

//  TEST code
//cart = []
addToCart("Bran Muffins")
addToCart("Seeds")
addToCart("Apples")
addToCart("Pears")
//viewCart()
console.log(cart)
var tempCart = cart;
console.log(tempCart);
var b = tempCart.shift();
console.log(cart);
console.log(tempCart);
console.log(b);


function total() {
  // write your code here
  for (let i = 0, l = cart.length; i < l; i++){
    
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
