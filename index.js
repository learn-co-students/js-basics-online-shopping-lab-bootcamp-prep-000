var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem={};
  Object.assign(newItem, { itemName:item }, { itemPrice:Math.floor(Math.random() * Math.floor(100))});
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var output=`In your cart, you have`;
  if (cart.length==0){
    return `Your shopping cart is empty.`
  }
  if (cart.length==1){
    return output+ ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  for (var y=0; y<(cart.length-1); y++){
    output=output+ ` ${cart[y].itemName} at $${cart[y].itemPrice},`
  }
  output=output+` and ${cart[y].itemName} at $${cart[y].itemPrice}`
  return output+"."
}

function total() {
  var total=0;
  for (var x=0; x<cart.length; x++){
    total=total+cart[x].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var z=0;z<cart.length;z++){
  if (cart[z].itemName==item){
  cart.splice(z,1);
  return cart
  } 
}
return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var price=total()
  if (cardNumber==null){
    return `Sorry, we don't have a credit card on file for you.`
  } else{
    for (var i=0; cart.length>0; i++){
      cart.pop(i,1)
    }
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
  }
}
