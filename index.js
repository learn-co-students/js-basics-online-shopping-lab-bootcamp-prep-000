var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let ranPrice= Math.floor(Math.random()*100);
 var items={
  itemName:item,
  itemPrice:ranPrice
};


cart.push(items);
return `${items.itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0){
    return `Your shopping cart is empty.`;
  }
  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  
  let cartString=`In your cart, you have `;
  for (let i=0;i<cart.length;i++){
    
    if(i===cart.length-1){
      cartString+=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    else{
    let message= `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    cartString+=message;
    }
  }
return cartString;
}

function total() {
  var total=0;
  for(let i=0;i<cart.length;i++){
    total+=cart[i].itemPrice;
  }
  return total;
 
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++){
    if(item === cart[i].itemName)
    {
      cart.splice(i,1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}


function placeOrder(cardNumber) {
  if(cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  if(cardNumber!==undefined){
  var message=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart=[];
    return message;
  }
 
}

