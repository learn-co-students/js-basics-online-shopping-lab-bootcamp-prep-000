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
 var price = Math.floor(Math.random() * 100);
 if (cart.length === 0) {
   cart[0] = Object.assign({}, cart, { ["itemName"]: item}, { ["itemPrice"]: price});
 } else {
    cart[cart.length++] = Object.assign({}, cart, { ["itemName"]: item}, { ["itemPrice"]: price});
 }
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    var msg ="";
    for (var i = 0; cart.length > i; i++) {
      if (i === 0) {
        msg += `In your cart, you have ${cart[i].itemName} at ${"$" + cart[i].itemPrice}`;
      } else if (cart.length - 1 === i) {
        msg += `, and ${cart[i].itemName} at ${"$" + cart[i].itemPrice}`;
      } else {
        //console.log(`Cart length ${cart.length} of ${i}`);
        msg += `, ${cart[i].itemName} at ${"$" + cart[i].itemPrice}`;
      }
    }
    msg += ".";
    return msg;
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  var price = 0;
  for (var i = 0; cart.length > i; i++) {
    price = price + cart[i].itemPrice;
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  var inCart = false;
  while (!inCart) {
    for (var i = 0; cart.length > i; i++) {
      if (cart[i].itemName === item) {
        cart.splice(i, 1);
        inCart = true;
      }
    }
    if (inCart) {
      return cart;
    } else if (!inCart) {
    return "That item is not in your cart.";
    }
  }
}

//function removeFromCart(item) {
//  if (cart.includes(item)) { - Noticed after a couple attempts it seemed to always fail this and went to the else...
//    for (var i = 0; cart.length > i; i++) {
//      if (cart[i].itemName === item) {
          //cart.splice(i, 1);
          //removed = cart.splice([i].itemPrice, 1);
        
          //cart = Object.remove({}, cart, { ["itemName"]: item}, { ["itemPrice"]: cart[i].itemPrice});
        
          //delete cart[i].item;
        
          //cart = cart.splice(cart.length - i, 1);
        
         //var a = Object.assign({}, cart);
         //delete a[i];
         //cart = Object.assign({}, a);
       
         //cart.splice(cart[i], 1);
         //delete cart[i].splice(itemPrice);
//        }
//      }
//      return cart;
//    } else {
//    return "That item is not in your cart.";
//  }
//}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var price = total();
    cart = [];
    return `Your total cost is ${"$"+price}, which will be charged to the card ${cardNumber}.`;
  }
  
}