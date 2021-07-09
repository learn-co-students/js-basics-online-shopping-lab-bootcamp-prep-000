var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem={itemName:item,itemPrice:Math.floor(Math.random()*Math.floor(100))}
 cart.push(newItem);
return (`${item} has been added to your cart.`);
return (cart);
}

function viewCart() {
  if (cart.length===0){
    return ("Your shopping cart is empty.");
  } else if (cart.length===1){
    return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)
  }
  else if (cart.length===2){
    return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`)
  }
  else {
    for (let i=0;i<cart.length;i++){
      return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`)
    }
  }
  }

function total() {
var total=0
  for (let i=0;i<cart.length;i++){
    total = total + getCart()[i].itemPrice
  }
  return total
}
function removeFromCart(item){
  for (let i=0;i<cart.length;i++){
    if(cart[i].itemName===item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else{
    let totalCost=total();
    cart=[];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
