var cart = [];

 //var cart = [{itemName: 'bananas', itemPrice: '$100'}, {itemName: 'apples', itemPrice: '$100'}, {itemName: 'blueberries', itemPrice: '$100'}]

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor((Math.random()* 100) + 1)
 var items = {itemName: itemName, itemPrice: price} 
 cart.push(items)
 return`${itemName} has been added to your cart.`
}

function viewCart() {
  let result = 'In your cart, you have '; 
  if(cart.length === 0 ) {
    result = 'Your shopping cart is empty.';
    return result;
 } else if (cart.length === 1) {
    result = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`); 
    return result;
  } else if (cart.length === 2) {
    result = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`);
    return result;
  } else if (cart.length === 3) {
    result = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`); 
    return result;
  }
} 

function total() {
  var totalResult = 0;
  for (let i = 0; i < cart.length; i++) {
      totalResult += cart[i].itemPrice
    }
    return totalResult;
}
  
function removeFromCart(item) {
  var updateItem = [];
  if (cart.length === 0) {
    return "That item is not in your cart.";
  }
  for (let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(1, 1);       
    updateItem.push(cart[i]);
      }
    }
   return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } 
   else {
     var newTotal = total();
     cart = [];
   return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
    }
}

// function viewCart() {
//   // if(cart.length === 0) {
//   //   return "Your shopping cart is empty."
//   // } else {
//   //   // var newitem = []
//   //   for (let i = 0; i< cart.length; i++) {
//   //     newitem.push(`In your cart, you have ${itemName(cart[i]} at $ ${itemPrice(cart[i])}`);
//   //     }
//   //   }
  
//   if(cart.length > 0){
//     let result='In your cart, you have '
//     for(let i = 0; i < cart.length; i++){
//       result += cart[i].itemName + 'at '+ cart[i].itemPrice +','
//     }
//     console.log(result)
//   }else{
    
//   }
// }

// else if(cart.length === 1){
  //   result = result + cart[0].itemName +' at $' + cart[0].itemPrice + '.';
  // return result;
   
  // } else if (cart.length === 2) {
  //     result = result + (`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`);
  //   }
  //   return result; 
  
  // } if (cart.length >= 2) {
  //   for(let i = 0; i < cart.length - 1; i++) {
  //       result = result + 'and ' + cart[i].itemName + 'at $'+cart[i].itemPrice + '.';
  //     return result;
  //   }
  
    
  //   //result += 'and ' + cart[cart.length].itemName + 'at $'+cart[cart.length].itemPrice + '.';
  // }
  
  // //var totalPrice = []
  // // var totalResult = cart[0].itemPrice + cart[1].itemPrice + cart[2].itemPrice; 
  // if (totalResult === cart.length) {
  // totalPrice.push(totalResult);
  // return total ;
  // }


 // viewCart()
