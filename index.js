var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDetails={};
  itemDetails["itemName"]=item;
  itemDetails["itemPrice"]=Math.floor(Math.random()*100);
  console.log(itemDetails);
  cart.push(itemDetails);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartItems="In your cart, you have ";
  if (cart.length>0){
    for (let i=0; i<cart.length;i++) {
      cartItems=cartItems+`${cart[i].itemName} at $${cart[i].itemPrice}`
      //adding in last item, period
      //adding in second to last item, comma and
      //other items, comma only
      //cart's only 1 item long? neither.
      if((cart.length===1)||(cart.length==i+1)) {
        cartItems=cartItems+".";
      } else if (cart.length===i+2){
        cartItems=cartItems+", and "
      } else {
        cartItems=cartItems+", "
      }
    }
    return cartItems;
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var totalbill = 0;
  for (let i=0; i<cart.length; i++) {
    totalbill+=cart[i].itemPrice;
  }
  return totalbill;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length;i++) {
    if (cart[i].itemName===item) {
      cart.splice(i,1)
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    var totalbill=total();
    cart = [];
    return `Your total cost is $${totalbill}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
