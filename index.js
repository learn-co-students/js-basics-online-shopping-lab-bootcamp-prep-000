//this variable will hold items and prices
var cart = [];
//set cart array to equal arguement newArray
function setCart(newCart) {
  cart = newCart;
}
//function total() which calculates total price
function total() {
  let t = 0;//variable t holds total price
  for (var i = 0, l = cart.length; i < l; i++) { //for loop to iterate through cart properties
    for (var item in cart[i]) { //iterate through each item price and add to t
      t += cart[i][item]
    }
  }
  return t  // return total price when total function is called

}
//function getCart returns properties in cart
function getCart() {
  return cart;
}
//function addToCart adds an item and price to cart
function addToCart(purchasedItem) {
  var itemPrice = Math.floor(Math.random()*100) //creates random price
  cart.push({[purchasedItem] : itemPrice});//stores item and price in cart Object
  console.log(`${purchasedItem} has been added to your cart.`); //logs message once addToCart function is called
  return cart; //returns cart object properties
}
// function viewCart displays whether cart has items with price or is empty
function viewCart() {
  var l = cart.length; //variable l holds the number of items in cart
  var itemsInCart = []; //itemsInCart array holds item and price string
  if(l == 0){ // if statement compares cart length to quantity 0 and displays message when cart is empty
    console.log("Your shopping cart is empty.");
  }
  for(var i = 0; i< l; i++) { // for loop to iterate through each item in cart
      var itemWithPrice= cart[i];//items stored in itemWithPrice variable
      var purchasedItem = Object.keys(cart[i]);//use Object.keys to assign each item to purchasedItem
      var itemPrice = itemWithPrice[purchasedItem]; //assign price to itemPrice
      itemsInCart.push(`${purchasedItem} at \$${itemPrice}`); //create item and price pair string
  }
  console.log(`In your cart, you have ${itemsInCart.join(", ")}.`);
  }
// function removeFromCart checks if item is in cart and then removes it
  function removeFromCart(itemBeingRemoved) {
    var itemFound = false; //set var itemFound to false
    for(var i = 0; i < cart.length; i++) { //iterate through cart properties and check if true remove
      if(cart[i].hasOwnProperty(itemBeingRemoved)) {
        itemFound = true; //set itemFound to be true
        cart.splice(i); // remove item
      }
    }
    // if no corresponding item is found display message
    if(itemFound === false){
      console.log("That item is not in your cart.")
    }
    return cart;
  }
  //function placeOrder will display messages either if no creditCardNumber is
  //present or the total that will be charged to the creditCardNumber
  function placeOrder(creditCardNumber) {
    if(!creditCardNumber){
      console.log("We don't have a credit card on file for you to place your order.");
    }
    else{
      console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = []; // empty the cart
  }
}
