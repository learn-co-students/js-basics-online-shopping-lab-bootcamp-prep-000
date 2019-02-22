var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randNum = Math.floor((Math.random() * 98) + 1);
  const objectItem = {itemName: item, itemPrice: randNum};
  cart.push(objectItem);
  return item + " has been added to your cart.";
}

function viewCart() {
  var outPut;
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  if (cart.length >= 1){
    if(cart.length === 1){
      outPut = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice  + ".";
      return outPut;
    }
    if(cart.length === 2){
      outPut = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice  + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
      return outPut;
    }
    if(cart.length > 2){
      outPut = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice;
      for(let i =1; i < cart.length-1; i++){
        outPut += ", " + cart[i].itemName + " at $" + cart[i].itemPrice;
      }
      outPut += ", and " + cart[cart.length-1].itemName + " at $" +  cart[cart.length-1].itemPrice +  ".";
      return outPut;
    }
  }
}

function total() {
  var cartTotal = 0
  for(let i = 0; i < cart.length; i++){
    cartTotal += cart[i].itemPrice; 
  }
  return cartTotal;
}

function removeFromCart(item) {
  var indexArray = -1;
  for(let i = 0; i < cart.length ; i++){
    if(cart[i].itemName === item){
      indexArray = i;
    }
  }
  if(indexArray > -1){
    cart.splice(indexArray, 1);
  } 
    
  if(indexArray === -1){
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber = 0) {
  if(cardNumber === 0){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  if (cardNumber > 0) {
    var cartTot = total() ;
    cart = [];
    return "Your total cost is $" + cartTot +  ", which will be charged to the card " + cardNumber + ".";
    
  }
}
