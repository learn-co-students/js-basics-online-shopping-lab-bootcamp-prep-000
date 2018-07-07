var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*100);
  cart.push({itemName:item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var print = "In your cart, you have ";
  if (getCart().length===0) {
    return "Your shopping cart is empty.";
  } 
  else {
   for (let i = 0; i < getCart().length; i++) {
     print = print + getCart()[i].itemName + " at $" + getCart()[i].itemPrice;
     if (i === getCart().length-1){
       print = print + ".";
     } 
     if (i < getCart().length-1) {
       print = print +", ";
       if (i === getCart().length-2){
         print = print + "and ";
        }
      }
    }
  }
  return print;
}

function total() {
  var total = 0;
  for (let i = 0; i < getCart().length; i++){
    total = total +getCart()[i].itemPrice;
  }
 return total;
}

function removeFromCart(item) {
  var removeIndex;
  for (let i = 0; i < getCart().length; i++) {
    if(item === getCart()[i].itemName) {
      removeIndex = i;
      getCart().splice(removeIndex,1);
      break;
    }
  }    
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(cardNumber >0) {
    var value = total();
    setCart([]);
    return `Your total cost is $${value}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}
