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
  var itemObject = {itemName:item,itemPrice:price };
  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`;
}



function viewCart() {
  if (cart.length === 0) {
    return`Your shopping cart is empty.`;
  }
  else{
      var myString = "In your cart, you have "
  
        for(var i = 0; i < cart.length; i++){
         
           myString+=`${cart[i].itemName} at $${cart[i].itemPrice}`;
           
              if(i!==cart.length-1 &&cart.length!==1){
                 
                  myString+=",";
                }
               
                else if (i===cart.length-2){
                 myString+= " and"
                }
                else {
              
                  myString+="."
                  
                }
              }

         

     return myString;
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
