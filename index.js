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


  /*var viewCartList = [];
  for(let i=0; i< length; i++){
    var cartList = cart[i];
    var cartItem = cartList.item;
    var itemPrice = cartList.price;
    for (let key in cart)
    var itemAtPrice = `${itemName} at ${itemPrice}`;
    viewCartList = [...viewCartList, itemAtPrice];
  }
   return `In your cart, you have  ${viewCartList.join(', ')}.`;
    }
    for ( let prop in person ) {
  console.log(`${prop}: ${person[prop]}`);
}*/
/*
  //var viewCartList = [];
  for(let i=0; i< length; i++){
    var cartList = getCart()[i];
    var itemName = cartList.item;
    var itemPrice = cartList.price;
    var itemAtPrice = `${itemName} at ${itemPrice}`;
    viewCartList = [...viewCartList, itemAtPrice];
  }
   return `In your cart, you have  ${viewCartList.join(', ')}.`;
    }
>>>>>>> 26f6a05cbbb7ea7befacda25d41b2297ac43a82e
}
*/
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


