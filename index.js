var cart = [];
var cardNumber=876950;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 // write your code here
 var max=100;
 var min=1;
 var itemName=item
 var itemobj={};
 itemobj[itemName]=Math.floor(Math.random() * (max - min) + min);
 var cart=getCart();
 cart.push(itemobj);
 cart=setCart(cart);
  console.log(`${itemName} has been added to your cart.`);
  console.log(cart);
 return cart;

}

function viewCart() {
  // write your code here
  var viewCartLine;
  var cart=getCart();
  console.log(`cart.length ${cart.length}`)
     if(cart.length!==0){
        viewCartLine="In your cart, you have";
        for(var i=0;i<cart.length;i++){
           var  itemObj=cart[i];
          
           var keys=Object.keys(itemObj);
          
            var value=itemObj[keys];
             
          
             if(cart.length==1){
              viewCartLine=`${viewCartLine} ${[keys]} at $${value}.`;
               }else if((cart.length<=2)&&(i===cart.length-1)){
                   
                   viewCartLine=`${viewCartLine} and ${[keys]} at $${value}.`
               }else if((cart.length>=3)&&(i===cart.length-1)){
                  viewCartLine=`${viewCartLine}, and ${[keys]} at $${value}.`
                 }else{
                
                 if (viewCartLine!="In your cart, you have"){
                  viewCartLine=`${viewCartLine}, ${[keys]} at $${value}`
               }else{
                  viewCartLine=`${viewCartLine} ${[keys]} at $${value}`
               }
             }
    }
  }
  
  else{
    viewCartLine="Your shopping cart is empty."
  }
  console.log(viewCartLine);
}

function total() {
  var total=0;
  var cart=getCart();
  if(cart.length!==0){
  
    for(var i=0;i<cart.length;i++){
     var  itemObj=cart[i];
       var keys=Object.keys(itemObj);
         
          var value=itemObj[keys];
           total+=value;
         
    }
  }
  return total;
}

function removeFromCart(item) {
  var flag=false;
  var cart=getCart();
  console.log(`cart after getcart() ${cart}`);
  if(cart.length!==0){
    for(var i=0;i<cart.length;i++){
      var itemObj=cart[i];
      var keys=Object.keys(itemObj);
         console.log(keys + "keys");
            console.log(item + "item");

         if (keys==item){
           console.log("entered item keys if")
           cart.splice(i, 1)
            console.log(`cart after spilce() ${cart}`);
            cart= setCart(cart);
            console.log(`cart after setcart ${cart}`);
            delete itemObj[keys];
           flag=true;
         
      }
      
    }
  }
  if(flag===false){
    console.log("That item is not in your cart.");
  }
  return cart;
}


function placeOrder(cardNumber) {
  var message;
  if (cardNumber===undefined){
    message="Sorry, we don't have a credit card on file for you.";
  }else{
    message=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
      var c=[];
    var cart=setCart(c) 
  }
  console.log(message);
}