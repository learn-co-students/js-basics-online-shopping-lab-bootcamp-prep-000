var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


// function addToCart(item) {
//   var newitem = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1};
//   getCart().push(newitem);
//   return `${item} has been added to your cart.`;
// }
//
function addToCart(item){
  getCart().push({itemName:item, itemPrice:Math.floor(Math.random()*100)+1});
  return `${item} has been added to your cart.`
}

// function viewCart() {
//   var i;
//   var string = "";
//   for(i=0; i<getCart().length-1; i++){
//     string += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
//   }
//   if(getCart().length>1){
//     return `In your cart, you have ${string}and ${getCart()[(getCart().length)-1].itemName} at $${getCart()[(getCart().length)-1].itemPrice}.`;
//   }else if(getCart().length===1){
//     return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
//   }else{
//     return "Your shopping cart is empty."
//   }
// }
//
function viewCart(){
  var yourcart = "";
  if(!getCart().length){
    return "Your shopping cart is empty.";
  }else if(getCart().length === 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }else{
    for(var i=0; i<getCart().length-1;i++){
      yourcart += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
    };
    return `In your cart, you have ${yourcart}and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`;
  }
}

// function total() {
//   var total = 0;
//   for(var i=0;i<getCart().length;i++){
//     total += getCart()[i].itemPrice;
//   };
//   return total;
// }
function total(){
  var totalprice = 0;
  for(var i=0; i<getCart().length; i++){
    totalprice += getCart()[i].itemPrice;
  };
  return totalprice;
}
function removeFromCart(item) {
  for (var i=0; i<getCart().length; i++){
  if(getCart()[i].itemName === item){
      return getCart().splice(i,1);
    }
  }
  return "That item is not in your cart.";
}
// function removeFromCart(item){
//   for(var i=0; i<=getCart().length; i++){
//     if(i === getCart().length){
//       return "That item is not in your cart."
//     }
//     else if(getCart()[i].itemName === item){
//       return getCart().splice(i,1);
//     }
//   }
// }
//
// function placeOrder(cardNumber) {
//   if(cardNumber>0){
//     var totalcost = total();
//     getCart().splice(0,getCart().length);
//     return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`;
//   }else{
//     return "Sorry, we don't have a credit card on file for you.";
//   }
// }
function placeOrder(creditcard){
  if(!creditcard){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var totalprice = total();
    getCart().splice(0,getCart().length);
    return `Your total cost is $${totalprice}, which will be charged to the card ${creditcard}.`
  }
}
