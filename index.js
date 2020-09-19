var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  
  let itemPrice = Math.floor(Math.random()*100) +1;
  let item = {
        itemName: itemName,
        itemPrice: itemPrice
  };
      cart.push(item);
      return `${item.itemName} has been added to your cart.`;
  }

function viewCart() {
  // write your icode here
  var items = [];
  var strItems = "";
  var namePriceStr = "";
  if(cart.length === 0){
    namePriceStr = "Your shopping cart is empty.";
    return namePriceStr ;
  } else {
      for(var item = 0; item < cart.length; item++){
        var itemValue = cart[item];
        if(itemValue===cart[cart.length-2]){
          namePriceStr =`${itemValue.itemName} at $${itemValue.itemPrice}, and`;
          items.push(namePriceStr);
        } else {
            namePriceStr =`${itemValue.itemName} at $${itemValue.itemPrice}.`;
            items.push(namePriceStr);
        }
      }
      strItems =  `In your cart, you have ${items.join()}`;
      var strItems2 = strItems.replace(".,", ", ")
      var strItems3 = strItems2.replace("and,","and ");
      return strItems3
  }
}

function total() {
    var sum = 0;
    if(cart.length ===0){
      sum = 0
    }else{
      for(var item = 0; item < cart.length; item++) {
        var itemValue = cart[item]
        sum += itemValue.itemPrice
      }
      return sum;
    }
}


function removeFromCart(item) { 
  
     const found = cart.find(cart => cart.itemName === item)
     if(!found){
         return `That item is not in your cart.`
     }else {
       var itemIndex = cart.indexOf(found)
       cart.splice(itemIndex,1)
       return cart
    }
  
}



 function placeOrder(cardNumber) {

   if(!cardNumber){
    
     return "Sorry, we don\'t have a credit card on file for you."
   }else {
     var totalCost = total();
     cart.splice(0, cart.length)
     return  `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
   }
 }