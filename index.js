var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var item2= {itemName: item,itemPrice: price};
 cart.push(item2);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0){
    return "Your shopping cart is empty.";
  }
  else if(cart.length==1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else{
    var newCart= [];
    for (let i=0;i<cart.length; i++){
      newCart.push( cart[i].itemName + ' at $'+cart[i].itemPrice);
      
    }}
    var cart2= newCart.pop();
        return "In your cart, you have " + newCart.join(", ") + ', and ' + cart2 +'.';
  }


function total() {
  let total=[];
  for(let i=0;i<cart.length; i++){
    total.push(cart[i].itemPrice);
      }
      var sum = total.reduce(function(a, b) { return a + b; }, 0);
    return sum;
}
function removeFromCart(item) {
  var message;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return ("That item is not in your cart.");
}


function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    let tots= total()
    setCart([]);
    return `Your total cost is $${tots}, which will be charged to the card ${cardNumber}.`;
  }
}
