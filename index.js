var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor( Math.random() * 100 ) + 1;
 cart.push({itemName: item, itemPrice: price});
return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return `Your shopping cart is empty.`;
  }
  else{
    const itemPriceList = [];
    var itemAtPrice;
    for(var i = 0; i < cart.length; i++){
      if(i > 0 && i === cart.length - 1){
        itemAtPrice = `and ${cart[i].itemName} at $${cart[i].itemPrice}`;
        itemPriceList.push(itemAtPrice);
      }
      else{
        itemAtPrice = `${cart[i].itemName} at $${cart[i].itemPrice}`;
        itemPriceList.push(itemAtPrice);
      }
   }
    return `In your cart, you have ${itemPriceList.join(", ")}.`;
}
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice;
  }
    return totalPrice;
  }


function removeFromCart(item) {
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}



/*
function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
     if(cart[i].itemName === item){
        cart.splice(i, 1);
    }
    else{
      return `That item is not in your cart.`;
      }
    }
    return cart;
}*/

function placeOrder(cardNumber) {
  // write your code here
}


