var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemandprice = {};
 var price = Math.floor((Math.random() * 100) + 1);
 itemandprice[item] = price;
 cart.push(itemandprice);
 console.log(`${item} has been added to your cart.`);
 return cart;
}



function viewCart() {
  function getValues(obj) {
 var arr = Object.keys(obj).join("")
 var value = obj[arr]
  return value
  		  }
  var line = "In your cart, you have ";
  var keys = []
 var values = []
 switch(cart.length) {
 case 0:
 console.log("Your shopping cart is empty.");
      break;
     case 1:
       var key = Object.keys(cart[0]);
       var value = getValues(cart[0]);
      console.log(`${line}${key.join("")} at $${getValues(cart[0])}.`);
      break;
     default:
       var string = []
       var lastObject = cart.slice(-1)
       for (var i = 0; i < cart.length-1; i++) {
         keys.push(Object.keys(cart[i]).join(""))
         values.push(getValues(cart[i]));
         string.push(`${keys[i]} at $${values[i]}`)
       }
      var arr = string.join(", ")
      if (cart.length === 2) {
         console.log(`${line}${arr} and ${Object.keys(lastObject[0]).join("")} at $${getValues(lastObject[0])}.`)
       }
       else {
         console.log(`${line}${arr}, and ${Object.keys(lastObject[0]).join("")} at $${getValues(lastObject[0])}.`)
       }
    }
  }

function total() {
 function getValues(obj) {
 var arr = Object.keys(obj).join("")
 var value = obj[arr]
  return value
  		  }
 var value = [];
 var total = 0
 for (var i = 0; i < cart.length; i++){
     value.push(getValues(cart[i]))
   }
   for (var index = 0; index < value.length; index++){
   total += value[index]
   }
  return total
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

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
