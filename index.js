var cart=[];

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

function getCart(){
  return cart
}

function addToCart(newitem){
newItemPrice=Math.floor(Math.random()*100);
cart({newitem:newItemPrice})
return (newitem + "has been added to your cart.")
}

/*
function viewCart(){
if (cart>=1){
  console.log("In your cart you have [item,price].")
}
else{
  return ("Your shopping cart is empty.");
}

function removeFromCArt(removethis){
  if (removethis is not in cart){
    return ("That Item is not in your cart.");
  }
  else{
  return  cart.pop(removethis);
  }
}

function placeOrder(cardNumber){
  if (cardNumber==undefined):{
    return ("We don't have a credit card on file for you to place your order.");
  }
  else{
    return ("Your total cost is $${total()}, which will be charged to the card ${cardNumber}.")
  }
}
*/
