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
 
 //Randomly assign an item price between 1 and 100
 var itemPrice = Math.floor((Math.random()*100) + 1)
 
 //Create object with name of the item as a key and price as a value
 var itemObj = {'itemName':item, 'itemPrice':itemPrice}
 
 cart.push(itemObj) //add item object to cart
 
 return `${item} has been added to your cart.`
 
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    //If you have no items in your cart
    return "Your shopping cart is empty."
  }else{
    //since there must be items in the cart....
   
    var cartInfo = "In your cart, you have " //initialize string to be returned
    var itemInfo = "" //initialize string to add to cartInfo
    
    
    //iterate through cart to identify cart items
    for (var i=0; i<cart.length; i++){
      
      //record itemInfo to add to cartInfo
      if (cart.length === 1){
        //if there's only one item in the array
        itemInfo = `${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else if (i === cart.length - 1){
        //if item identified is the last item left in the cart
        itemInfo = `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else{
        //since the item identified is certainly not last in the cart
        itemInfo = `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      
      //add item info to cart description
      cartInfo += itemInfo
      
    }
    
    //return cart description
    return cartInfo
  }
}

function total() {
  // write your code here
  
  //get prices for each item
  var prices = cart.map( function (currentObj){
    return currentObj.itemPrice
  })
  
  //sum up all prices
  var sum = prices.reduce(function(ttl, currentPrice){
    return ttl + currentPrice
  })
  
  return sum
}

function removeFromCart(item) {
  // write your code here
  //get an array of names of items in the cart, preserving order
  var names = cart.map( function(currentObj){
    return currentObj.itemName
  })
  
  var itemIndex = names.indexOf(item) //find item name in cart if possible
  
  if (itemIndex===-1){
    //if item isn't found in the cart
    return "That item is not in your cart."
  }else{
    //if the item is in the cart, remove the first occurence of it
    cart.splice(itemIndex,1)
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var totalPrice = total()
    cart = []
    
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
