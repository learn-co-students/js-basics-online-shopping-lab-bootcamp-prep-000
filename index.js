var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var obj = {itemName:item, itemPrice:price};
  
 
  cart.push(obj);
  return item + " has been added to your cart.";

}

function viewCart() {
  if (cart.length ===0) {
    return 'Your shopping cart is empty.'
  }
  let result = 'In your cart, you have ';
  
  for (var i=0; i<cart.length; i++) {
    let element = cart[i];
    if (cart.length ===1) {
      result +=`${element.itemName} at $${element.itemPrice}.`
    }
  else if (i=== cart.length-1) {
      result +=`and ${element.itemName} at $${element.itemPrice}.`
    }
    else {
       result +=`${element.itemName} at $${element.itemPrice}, `
    }
    
  }

  return result;
}

function total() {
  let total = 0;
for (var i=0; i<cart.length; i++) {
  total +=cart[i].itemPrice
}
  return total;
}

function removeFromCart(item) {
 let isItemInCart = false;
 
      for  ( let i = 0 ;  i < cart.length ; i++) {
          const element = cart[i];
          if (item === element.itemName) {
            cart.splice(i, 1);
            isItemInCart = true;
          }
      }
  if ( !isItemInCart){
    return "That item is not in your cart.";
 
  }
   return cart
}

function placeOrder(cardNumber) {
if (!cardNumber) {
  return `Sorry, we don't have a credit card on file for you.`;
}

let totalPrice = total();
cart = [];
return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  

}
