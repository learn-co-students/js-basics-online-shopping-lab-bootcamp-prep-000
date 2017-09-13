var cart = [];
var itemName

function getCart(itemName) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var newItemObj ={itemName : itemPrice};
  cart.push(newItemObj);
  console.log(`itemName has been added to  your cart.`);
  return cart;
}

function viewCart() {{if (cart.length === 0);
return  console.log(`Your shopping cart is empty.`);
}
{for (var i = 0; i < cart.length; i++) {
  return console.log(`In your cart you have cart[i].itemName at $$ cart[i].itemPrice, ` + `.`);
  }
}
}

function total() {
   var cartTotalCost = 0;
   for(var i in cart) {
   	  cartTotalCost += cart[i].itemPrice;
  return cartTotalCost;
   }
 }

  function removeFromCart(itemName) {
   for(var i in cart) {
     if (cart[i].hasownProperty(itemName)) {
         cart.splice(i, 1);
         return cart;
     }
   }
   console.log('That item is not in your cart.');
   return cart;
  }

  function placeOrder(cardNumber) {		  function placeOrder(cardNumber) {
    // write your code here		    // write your code here
    if(cardNumber === null){
   	console.log("Sorry, we don't have a credit card on file for you.");
    } else {
   	  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
      }
    return cart;
    }
  }
