var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=Math.floor(Math.random()*99)+1;
  cart.push({itemName:item, itemPrice:price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartLength=cart.length-1;
  if( cartLength>=0 ) {
    let result = "In your cart, you have ";
    for( let i=0; i<=cartLength; i++ ) {
      if(i==cartLength && i>0) {
        result+="and ";
      }
      result+=`${cart[i].itemName} at $${cart[i].itemPrice}${i<cartLength?", ":"."}`      
    }
    return result;
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  let total=0;
  cart.forEach( item => {total+=item.itemPrice;} );
  return total;
}

function removeFromCart(item) {
  for( let i=0; i<cart.length; i++ ) {
    if(cart[i].itemName==item) {
      cart.splice(i,1);
      return cart;
    }    
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if( cardNumber !== undefined ) {
    let cartTotal=total();
    cart=[];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
