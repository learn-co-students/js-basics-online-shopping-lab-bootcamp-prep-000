var cart = [];

addToCart("bananas");
addToCart("ice cream");

viewCart();


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let valu = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 101)
 };
 cart.push(valu);
 return (item + " has been added to your cart.");
}

function viewCart() {
  if (cart.length > 0){
    var cart1 = [];
    var i;
    
    for (i=0; i<cart.length; i++){
      if (i===0){
      cart1.push(cart[i].itemName + " at " + "$" + cart[i].itemPrice);
      }
      else{
        if (i === cart.length - 1){
         cart1.push(" and " + cart[i].itemName + " at " + "$" + cart[i].itemPrice);
        }
        else{
      cart1.push(" " + cart[i].itemName + " at " + "$" + cart[i].itemPrice);
        }
      }
    }
        if (cart.length === 2){
          
      return ("In your cart, you have " + cart[0].itemName + " at " + "$" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".");
    }
    else{
    return ("In your cart, you have " + cart1 + ".");
    }
  }
  else{

    
      return ("Your shopping cart is empty.");
    
    
  }
}

function total() {
  var tot = 0;
  var i;
  for(i=0; i<cart.length; i++){
    tot = tot + cart[i].itemPrice;
  }
  return tot;
  // write your code here
}

function removeFromCart(item) {
  var n = 0;
  var i;
  for(i=0; i<cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i,1);
      n = n + 1;
    }
  }
  if (n === 0){
    return ("That item is not in your cart.");
  }
else{
  return cart;
}
}

function placeOrder(cardNumber) {
  if (cardNumber > 0){
       var tot = total();
    
    cart.splice(0,cart.length);
    return ("Your total cost is $"+ tot + ", which will be charged to the card " + cardNumber+ "."); 
    
    

  }
  else{
        return ("Sorry, we don't have a credit card on file for you.");

  }
}
