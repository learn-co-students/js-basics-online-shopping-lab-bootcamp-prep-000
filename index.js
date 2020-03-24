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
 cart.push({itemName:item, itemPrice: Math.floor(Math.random()*100)})
 return(`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    return(`Your shopping cart is empty.`);
  } else {
    let response=`In your cart, you have `;
    response=`${response}${cart[0].itemName} at $${cart[0].itemPrice}`;
    for(let i=1;i<cart.length-1;i++) {
      response=`${response}, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    if (cart.length>1){
      response=`${response}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`;
    }
    response=`${response}.`
    return(response)
  }
}

function total() {
  // write your code here
  let sum=0
  for (let i=0;i<cart.length;i++) {
    sum=sum+cart[i].itemPrice
  }
  return(sum)
}

function removeFromCart(item) {
  // write your code here
  for (let i=0;i<cart.length;i++) {
    if (cart[i].itemName==item) {
      cart.splice(i,1);
      return(cart);
    }
  } 
  return("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    let tot=total()
    let response= `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
    cart=[];
    return(response);
  } else {
    return("Sorry, we don't have a credit card on file for you.");
  }
}
