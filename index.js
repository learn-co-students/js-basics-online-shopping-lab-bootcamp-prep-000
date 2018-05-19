var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = (Math.floor(Math.random() *(100)) + 1)
 var object = {itemName : item, itemPrice : price}
 cart.push(object);

if (cart.length > 0 ){
 return item + ' has been added to your cart.'
}else{
   return "Your shopping cart is empty.";
}
}

function viewCart() {
    if (cart.length ===1) {
      for (var i = 0; i< cart.length; i++){
      return "In your cart, you have " + cart[i].itemName + " at $" + cart[i].itemPrice + '.';
    }
    }else if(cart.length === 2){
      for (var x = 0; x< cart.length; x++){
      return "In your cart, you have " + cart[x].itemName + " at $" + cart[x].itemPrice + ', and ' + cart[x+ 1].itemName + " at $" + cart[x+ 1].itemPrice+'.';}
     }else if (cart.length === 3){
      for (var n = 0; n< cart.length; n++){
      return "In your cart, you have " + cart[n].itemName + " at $" + cart[n].itemPrice +', ' +cart[n+ 1].itemName + " at $" + cart[n+ 1].itemPrice+', and ' + cart[n+ 2].itemName + " at $" + cart[n+ 2].itemPrice+ ".";}
        } else {
      return 'Your shopping cart is empty.';
    }
}

function total() {
  var sum=0
  for(var i=0; i<cart.length; i++){
    var total = sum += cart[i].itemPrice 
  }
  return total
}

function removeFromCart(itemName) {
   
   var a
  for (var i=0; i < cart.length; i++ ) {
      if (cart[i].itemName === itemName){
        a = i
      } 
  }
    if (a){
    cart.splice(a, 1);
  return cart;
    } else {
      return 'That item is not in your cart.'
    }
}

function placeOrder(cardNumber) {
if(cardNumber) {
  for(var i=0; i<cart.length; i++){
  var sum=0
    var total = sum += cart[i].itemPrice 
    cart.splice(i,1)
  }
  return 'Your total cost is $' + total +', which will be charged to the card ' + cardNumber+'.'
}else { 
  return 'Sorry, we don\'t have a credit card on file for you.'
}
}
