var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice= Math.floor(Math.random() * 100)+1;
 var item= {[itemName]: itemPrice};
  cart.push(item);
   console.log(`${itemName} has been added to your cart.`);
return cart;
 }
 
function viewCart() {
  // write your code here
  var string=""
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }  else{
  if (cart.length===1){
    string= `${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    }else{
  if (cart.length === 2){    
      string=`${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
    }else{
  for (var i=0; i<cart.length; i++){
    if (i<cart.length-1){
    string = string+ `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
  }    else{
  string = string + `and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
    }}
    }}}
  console.log("In your cart, you have "+ string)
}

function total() {
  // write your code here
  var total=0;
  for (var i=0; i<cart.length; i++){
      var value= Object.values(cart[i])
      total += value[0]
 }
return total
}

function removeFromCart(item) {
  // write your code 
  for (var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
        cart.splice(i,1)
        return cart
        }
  
  }
    console.log("That item is not in your cart.")
    return cart

}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber=== undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` )
    cart=[]
  }
}
