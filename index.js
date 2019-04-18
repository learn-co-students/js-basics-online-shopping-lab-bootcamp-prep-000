var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var objectItem={};
  objectItem.itemName=item;
  objectItem.itemPrice=Math.floor(Math.random()*100);
 cart.push(objectItem);
 return (item+" has been added to your cart.")
}

function viewCart() {
  var sentence="In your cart, you have "
  if (cart.length===0){
    sentence="Your shopping cart is empty."}
  else if (cart.length===1){
    sentence="In your cart, you have "+cart[0].itemName+" at $"+cart[0].itemPrice+".";
  } else if (cart.length===2){
    sentence="In your cart, you have "+cart[0].itemName+" at $"+cart[0].itemPrice+", and "+cart[1].itemName+" at $"+cart[1].itemPrice+".";
  } else if (cart.length>2) {
    for (var i=0; i<cart.length-1; i++){
    sentence+=cart[i].itemName+" at $"+cart[i].itemPrice+", "};
    sentence+="and "+cart[cart.length-1].itemName+" at $"+cart[cart.length-1].itemPrice+"."};
  return sentence;
  }

function total() {
  var num=0;
  for (var i=0; i<cart.length; i++){
    num+=cart[i].itemPrice;
  } return num;
}

function removeFromCart(item) {
  var inCart=0;
  for (var i=0; i<cart.length; i++){
    if (cart[i].itemName===item){
      cart.splice(i, 1);
      inCart=1;
    }
  }
  if (inCart===0){
    return "That item is not in your cart.";
  }
  if (inCart===1){
    return cart;
  }
}

function placeOrder(cardNumber) {
  var currentTotal=total();
  cart=[];
  if (isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else return "Your total cost is $"+currentTotal+", which will be charged to the card "+cardNumber+".";
}
