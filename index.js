var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function viewCart(){
  var currentItem, itemName, itemPrice;
  var allItems = "";
  var messageArray=[];

     for (var ii=0;ii<cart.length;ii++){
      for (var currentCart in cart[ii]){
      messageArray.push(`${currentCart} at $${cart[ii][currentCart]}`);
      }
   }
      for (var jj = 0; jj < messageArray.length-1 ; jj++){
          allItems = allItems + messageArray[jj] + ", ";
        }
        allItems = allItems + messageArray[messageArray.length-1] + ".";

  if (cart.length===0){
    console.log('Your shopping cart is empty.');
  }
else{
    console.log(`In your cart, you have ${allItems}`);
  }
}

function removeFromCart(itemToRemove){
  var removed=false;
  for (var ii = 0; ii<cart.length;ii++){
    if (cart[ii].hasOwnProperty(itemToRemove)){
      cart.splice(ii,1);
      removed=true;
      return cart;
      }
  }if(removed ===false){
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber){
if (cardNumber >0){
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.length=0;
}else{
  console.log("We don't have a credit card on file for you to place your order.")
}
}
