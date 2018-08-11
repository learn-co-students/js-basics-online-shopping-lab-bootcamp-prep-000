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
 var itemObj = new Object ({itemName: item, itemPrice: Math.random () * 100 });
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
 }

function viewCart() {
  // write your code here
  var result = 'In your cart, you have ';
  let i =0;
  if (cart.length === 0 ){
      return `Your shopping cart is empty.`;
    } 
  if (cart.length===1){
    result = result + cart[0].itemName + ' at $' + cart[0].itemPrice + '.';
  }
  if (cart.length===2) {
    result = result + cart[0].itemName + ' at $' + cart[0].itemPrice + ', and ' + cart[1].itemName + ' at $' + cart[1].itemPrice + '.';
  }
  if (cart.length >= 3) {
    for (i = 0; i < cart.length-1; i++) {
      result = result + cart[i].itemName + ' at $' + cart[i].itemPrice + ', ';
    }
    result = result + 'and ' + cart[cart.length-1].itemName + ' at $' + cart[cart.length-1].itemPrice + '.';
  }
  return result;
   
}
    
    

function total() {
 // write your code here
  
  var sum = 0;
 for (var i =0; i < cart.length; i++){
  sum = sum + cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  // write your code here
 for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
     cart.splice(i,1);
     return cart;
     } 
   }
   return 'That item is not in your cart.';
 }


     
  function placeOrder(cardNumber) {
  // write your code here
  
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
   
      } else {
       
        var cost = 'Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + '.';
         cart = [];
        return cost;
      } 
     
      
  }
     
 

    