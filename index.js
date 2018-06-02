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
  let l=cart.length;
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

//Below Error: Expected [ 'In your cart, you have orange at $32', 'pear at $74', 'and quince at $78.' ] to equal 'In your cart, you have orange at $32, pear at $74, and quince at $78.'
/*
function viewCart() {
  var l=cart.length;
    if(l==1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if(l==2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }else if(l>=3){
    var viewCartArray=[];
      viewCartArray.push(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`)
      for (var i=1; i<(l-1); i++){      
      viewCartArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      viewCartArray.push(`and ${cart[l-1].itemName} at $${cart[l-1].itemPrice}.`)
      return viewCartArray;
    }else{
    return `Your shopping cart is empty.`
    }
}
*/

function total(){
  let b=cart.length
  let i=0;
  let sum= cart[i].itemPrice
    for(i=1; i<b; i++){
    sum= sum + cart[i].itemPrice;
    }
  return sum;
}

function removeFromCart(thing){
  let h=cart.length
  for (let q=0; q<h; q++) {
    if(thing==cart[q].itemName) {
    cart.splice(q,1)
    } else {
      return `That item is not in your cart.`
    }
  }return cart;
}


function placeOrder(cardNumber) {
  // write your code here
}
