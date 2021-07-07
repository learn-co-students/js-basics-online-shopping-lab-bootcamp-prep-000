var cart = [];
var itemName;
var itemPrice;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
itemName= item;
itemPrice= Math.round((Math.random()*99)+1);
  var cartObject={itemName:`${itemName}`,itemPrice:parseInt(`${itemPrice}`)};
  cart.push(cartObject);
return `${itemName} has been added to your cart.`;
}

function viewCart() {
  var l=cart.length;
    if(l==1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if(l==2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }else if(l>=3){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[l-1].itemName} at $${cart[l-1].itemPrice}.`
    }else{
      return `Your shopping cart is empty.`
    }
}



function total(){
  var b=cart.length
  let i=0;
  let sum= cart[i].itemPrice
    for(i=1; i<b; i++){
    sum = sum + cart[i].itemPrice;
    }
  return sum;
}

function removeFromCart(valuables){
  let h=cart.length
  for (let q=0; q<h; q++) {
    if(valuables==cart[q].itemName) {
    cart.splice(q,1)
    return cart;
    }  
  }return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  let w = cart.length;
  if(cardNumber !== null && cart.length > 0 ){
   let calculated_total = total();
   cart = [];
   return `Your total cost is $${calculated_total}, which will be charged to the card ${cardNumber}.`;
  }else{ 
    return `Sorry, we don't have a credit card on file for you.`
  }
}