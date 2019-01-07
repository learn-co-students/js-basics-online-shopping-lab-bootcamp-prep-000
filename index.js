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
 var price=Math.floor(Math.random()*100);
 cart.push(new Object({[item]: price}))
 console.log(`${item} has been added to your cart.`);
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length===0){
  console.log(`Your shopping cart is empty.`)
}else{
  var string=`In your cart, you have `;
  if (cart.length===1){
  var onlyitem=Object.keys(cart[0])[0]
  console.log(string+=`${onlyitem} at $${cart[0][onlyitem]}.`);
  }
    if(cart.length>1){
      for(var i=0;i<cart.length-1;i++){
      var itemandprice=cart[i];
      var item=Object.keys(itemandprice)[0];
      var price=itemandprice[item]
  string+=`${item} at $${price}, `;
  var lastitemandprice=cart[cart.length];
  var lastitem=Object.keys(lastitemandprice)[0];
  var lastprice=lastitemandprice[lastitem];
  string+`and ${lastitem} at $${lastprice}.`
console.log(string+`and ${lastitem} at $${lastprice}.`)
}
}
}
}

function total() {
  var total=0;
  for (let i=0;i<cart.length;i++){
  var item=Object.keys(cart[i]);
  var price=cart[i][item]
  total+=price;
}
return total
console.log(total)
  // write your code here
}
function removeFromCart(item){

   for(var i = 0;i<cart.length; i++){

   for(var items in cart[i]){
      if(item === items){
         cart.splice(i,1)
        return cart       }
     }
   }

   console.log("That item is not in your cart.")
   return cart
 }

/*function removeFromCart(item) {
  if(cart.hasOwnProperty(item)===false){
console.log(`That item is not in your cart.`);
return cart;
  }
  // write your code here
  else{
  for (let i=0;i<cart.length;i++){
  if(item in (cart[i])){
return cart.splice(i,1)
          }

      }


    }

}
*/

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
  console.log(`Sorry, we don\'t have a credit card on file for you.`)
  }
  else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  return cart=[];
  }
}
