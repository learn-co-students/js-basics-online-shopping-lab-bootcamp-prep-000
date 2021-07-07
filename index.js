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
 var item1= new Object({itemName:item,itemPrice:Math.floor(Math.random()*100)+1});
 cart.push(item1);
 return `${cart[cart.length-1].itemName} has been added to your cart.`;
}

function viewCart() 
{
  // write your code here
 var outputStatement=[];
 if(!cart.length)
  {
      return "Your shopping cart is empty.";
   } 
      else if(cart.length==1)
     {
       outputStatement[0]=` ${cart[0].itemName} at \$${cart[0].itemPrice}.`;
         return "In your cart, you have"+outputStatement[0];
       }else if(cart.length==2)
            {outputStatement[0]=` ${cart[0].itemName} at \$${cart[0].itemPrice}`;
             outputStatement[1]=` ${cart[1].itemName} at \$${cart[1].itemPrice}.`;
             return "In your cart, you have"+outputStatement.join(", and");
             }
      else
      {
        for(var i=0;i<cart.length-1;i++){
             outputStatement[i]=` ${cart[i].itemName} at \$${cart[i].itemPrice}`;
             }      
  return "In your cart, you have"+outputStatement.join()+", and"+
` ${cart[cart.length-1].itemName} at \$${cart[cart.length-1].itemPrice}.`;
     }
}      
      

     function total() {

  // write your code here

  var amountPay=0;
 
 for(var i=0;i<cart.length;i++){
 
   amountPay+=Number(`${cart[i].itemPrice}`);

    }
    return amountPay;
 
 
}

function removeFromCart(item) {
  // write your code here
    for(var i=0;i<cart.length;i++){
    if(cart[i].itemName===item){
       cart.splice(i,1);
       return cart;
      } 
     }
      return "That item is not in your cart.";
   }

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {return  "Sorry, we don't have a credit card on file for you.";} else{
    var bill=total();
    cart=[];
    return `Your total cost is \$${bill}, which will be charged to the card ${cardNumber}.`;
  }
  
}
