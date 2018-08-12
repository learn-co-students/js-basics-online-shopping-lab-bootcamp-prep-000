var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 
 var pairs = { itemName: item,
               itemPrice: Math.floor(Math.random()*100)
             }
 cart.push(pairs);
 return item + " has been added to your cart.";
}

function viewCart() {
  
  if (cart.length <= 0)
  {
    return 'Your shopping cart is empty.';
  }
  else
  {
    var str = 'In your cart, you have ';
    var i=0;
    var x = cart.length;
    var y='';
    
    while ( i < cart.length){
      
      if((i+2) === x) {y=', and ';}
      else if((i+1) === x)  { y = '.';}
      else if ((i+1) < x)   { y = ', ';} 

      str = str + cart[i].itemName + ' at $' + cart[i].itemPrice + y;
      i++;
    }
    }
    return str;
}

function total() {
  var sum =0;
  for(var i=0; i<cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  var i =0;
  var old = cart;
  while(i < cart.length){
    if(cart[i].itemName === item){
      cart.splice(i,1);
    }
    i++;
  }
  if( old === cart) { return "That item is not in your cart.";} 
  else {return cart;}
}

function placeOrder(cardNumber) {
  if (cardNumber){
    cart =[];
    return cart, "Your total cost is $" + total() +', ' +'which will be charged to the card ' + cardNumber + '.';
  }
  else { return "Sorry, we don't have a credit card on file for you."}
}
