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
  if(cart.length ===0)
    return sum = 0
  for(var item = 0; item < cart.length; item++) {
        var itemValue = cart[item]
        sum += itemValue.itemPrice
      }
      return sum;
}


function removeFromCart(item) { 
 
  for(var i = 0; i < cart.length; i++){
    
    var strComp = item.localeCompare(cart[i].itemName)
    console.log("strComp: ",strComp)
    if(strComp  === 0){
    getCart().splice(i,1)
      
    }else{ 
      
     return `That item is not in your cart.`
    }
  }

}




function placeOrder(cardNumber) {
  // write your code here
  
  
  
  
  
  
}