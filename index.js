var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName, itemPrice
  var price = Math.floor(Math.random() * (100-1)) + 1 // this creates the random number price from 1 to 100
  
  var itemToCart = {itemName: item, itemPrice: price} // we create an object that has two key pairs
  cart.push(itemToCart)
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  var itemsWithPrices
  
  if(cart.length === 0){ // this is there's nothing in the array
    return 'Your shopping cart is empty.';
  }else{
    for(var i = 0; i < cart.length; i++){ // i have this iterate through the object arrays and have them be accessed one by one
      if(i == 0){
        itemsWithPrices = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`; // the starting object will have this
      }else if (i != cart.length-1){
        itemsWithPrices += `, ${cart[i].itemName} at $${cart[i].itemPrice}`; // if there's more and as long as it's not the last one, we add this
      }else{
        itemsWithPrices += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`; // if it's the last one we add the 'and'
      }
      
    }
    return itemsWithPrices + '.'; // we return all the strings all together
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i ++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var isItemThereFlag = false; // i created a flag to determine if the item is in the cart
  for(var i = 0; i < cart.length; i++){ // this iterates through the object array
    if(item === cart[i].itemName){ //this essentially checks if the item is in the cart
      cart.splice(i, 1) ;
      isItemThereFlag = true ;
    }
  }
  if(isItemThereFlag === false){ // if the item isn't on the cart, you return this
    return 'That item is not in your cart.';
  }else
  return cart; // if isItemThereFlag === true, you return the cart after it has updated
}

function placeOrder(cardNumber) {
  var newTotal = total(); // had to get newTotal to equal the returned value that you get after calling the total function
  if(cardNumber === undefined){ // this checks if no cardNumber has been inputted
    return "Sorry, we don't have a credit card on file for you.";
  }else{ // splice(0) deletes everything starting at index 0 (inclusive)
    cart.splice(0)
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  }
  
  
}
