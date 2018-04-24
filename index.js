var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName : item , itemPrice : Math.floor((Math.random() * 100) + 1)});

  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(!cart.length){
    return "Your shopping cart is empty."
  }
  else{
    	var temp=[];
    for(var i=0;i<cart.length;i++){
      temp.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`);
    }
    if(cart.length==1){
      return `In your cart, you have ${temp[0]}.`;

    }
    else {
      return `In your cart, you have ${temp.slice(0,cart.length - 1).join(', ')} and ${temp.slice(cart.length-1)}.`;
  }
  }
}

function total() {
  var totalPrice = 0;
  for(var i = 0;i<cart.length;i++){
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var flag = 0;
  for (var i = 0;i<cart.length;i++){
    if( item == cart[i].itemName){
      cart.splice(i,1);
      flag=1;
    }
  }
  if (flag == 0){
    return "That item is not in your cart.";
  }
  else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else {
    var cost = total();
    cart= [];
    return `Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`;

  }
}