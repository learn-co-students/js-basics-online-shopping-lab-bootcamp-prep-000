var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var randomPrice = Math.random() * 100;
  var price = Math.floor(randomPrice);
  cart.push(new Object({itemName: item, itemPrice: price}));
  return `${item} has been added to your cart.`;
}



function viewCart() {
   // loop over every item in your cart
   

    
    
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } 
  else {
     var message = 'In your cart, you have ';
     var arr = [];
     
     for (var i = 0; i < cart.length; i++) {
       var item = Object.values(cart[i])[0];
       var price = Object.values(cart[i])[1];
       arr.push(`${item} at $${price}`)

       }
       if (i === 1) {
         message += `${item} at $${price}`;
          message += '.';
          return message;
         } else if (i === 2) {
           
            message += `${arr.join(', and ')}`;
            message += '.';
            return message;
            
       } else {
          arr.splice(arr.length - 1, 1, `and ${item} at $${price}.`);
          
          message += arr.join(', ');
          
          return `${message}`;
       }
    }
  }
  


function total() {
 
  var amount = 0;
  for (var i = 0; i< cart.length; i++) {
     amount += Object.values(cart[i])[1];
  }
  return amount;
}

function removeFromCart(item) {
  // write your code here
 for( var i = 0; i < cart.length; i++){
   var myItem = Object.values(cart[i])[0];
    
   if (myItem === item) {
     cart.splice(i, 1);
     return cart;
   } 
 }
 return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  // If no argument is received - print Sorry...
  var myTotal = total();
  var result = Number.isInteger(cardNumber);
  console.log(result);
  if (!result) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
  /* If a card number is received, empty the cart Array
     return your total cost... */
     cart.length = 0;
     return `Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
