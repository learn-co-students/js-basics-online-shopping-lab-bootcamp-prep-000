var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {};
  itemObject[item] = Math.floor(Math.random()*100);
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {

    var currentItem = {};
    var currentItemName;
    var currentItemPrice;



  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var returnedCart = "In your cart, you have";
    var commaOxford = "";
    if (cart.length > 2) { commaOxford = ","; }
    
    for (var i = 0; i < cart.length; i++) {
      if ((i !== 0) && (i === (cart.length - 1))) { returnedCart = returnedCart + " and"; commaOxford = ""}
      
      currentItem = Object.assign({}, cart[i]);
      currentItemName = Object.keys(cart[i])[0];
      currentItemPrice = currentItem[currentItemName];
      
      
      returnedCart = returnedCart + " " + currentItemName + " at $" + currentItemPrice + commaOxford;
    
      // if (cart.length > 0) { returnedCart = returnedCart + " "; }
    }
    
    // var cartItems = cart.keys();
    // var cartPrices = cart.values();

    returnedCart = returnedCart + ".";
    
    console.log(returnedCart);
  }
  
  
}

function total() {
  var totalBill = 0;
  var currentItem = {};
  var currentItemName;
  var currentItemPrice;
  
  
   for (var i = 0; i < cart.length; i++) {
           currentItem = Object.assign({}, cart[i]);
      currentItemName = Object.keys(cart[i])[0];
      currentItemPrice = currentItem[currentItemName];

     totalBill = totalBill + currentItemPrice;
   }
     return totalBill;
}

function removeFromCart(item) {
  
  var totalBill = 0;
  var currentItem = {};
  var currentItemName;
  var itemList = [];

   for (var i = 0; i < cart.length; i++) {
      currentItem = Object.assign({}, cart[i]);
      currentItemName = Object.keys(cart[i])[0];
      itemList[i]=currentItemName;
   }
   
   var j = itemList.indexOf(item);
   
   if (j === -1) { console.log ("That item is not in your cart."); }
   else {  cart.splice(j, 1); }
   
     return cart;
  
  
  
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (cardNumber === undefined) { console.log("Sorry, we don't have a credit card on file for you.") }
  else { 
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
  
}
