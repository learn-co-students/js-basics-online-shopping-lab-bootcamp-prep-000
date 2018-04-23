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
 cart.push({itemName:item, itemPrice:Math.floor(Math.random()*100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let cartString = "";
  if(cart.length===0)
  {
    cartString+="Your shopping cart is empty.";
  }
  else{
    cartString+="In your cart, you have "
    cart.forEach((item, i)=> {
      cartString+=`${item.itemName} at $${item.itemPrice}`;
      if(i===cart.length-1)
      {
        cartString+="."
      }
      else if(i===cart.length-2){
        cartString+=", and "
      }
      else{
        cartString+=", "
      }
    })
  }
  return cartString;
}

function total() {
  // write your code here
  console.log(cart)
  return cart.reduce((acc, curr) =>(acc+parseInt(curr.itemPrice)),0);
}

function removeFromCart(item) {
  // write your code here
  let index = cart.findIndex((element)=>element.itemName==item);
  if(index===-1){
    return "That item is not in your cart.";
  }
  else{
    cart.splice(index, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber==null)
  {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    let costString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart=[];
    return costString;
  }
}
