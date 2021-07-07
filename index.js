var cart = [];
var itemName
var itemPrice
var itemList
var item

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  
 itemList = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 Object.assign({}, itemList, {[itemName]: item}, {[itemPrice]: Math.floor(Math.random()*100)})
 cart.push(itemList)
 
 return `${item} has been added to your cart.`
}


function viewCart(){
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else{
    for(var i = 0; i < cart.length; i++){
      var itemsAndPrices
      if(i === 0){
        itemsAndPrices = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if(i != cart.length -1){
         itemsAndPrices += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else{
        itemsAndPrices += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    return itemsAndPrices + `.`
  }
}

function total() {
var total = 0;
for( var i = 0; i<cart.length; i++){
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
  if(isItemThereFlag === false){
    return 'That item is not in your cart.';
  }else
  return cart;
}

function placeOrder(cardNumber) {
  var newTotal = total();
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }else{
    cart = []
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  }
}
