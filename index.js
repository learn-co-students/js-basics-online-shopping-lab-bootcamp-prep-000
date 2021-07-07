var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

cart = [];

function addToCart(item){
 var itemObj = new Object({'itemName': item,'itemPrice': Math.floor(Math.random()*100)+1});
 cart.push(itemObj);
 return (`${itemObj.itemName} has been added to your cart.`);
}

function viewCart(){
  var state = 'In your cart, you have ';
  var say = '';

  if(cart.length === 0){
    say = ('Your shopping cart is empty.');
  }
  else if(cart.length === 1){
    say = (state + cart[0].itemName + ' at $' + cart[0].itemPrice + '.');
  }
  else
  { 
    var i = 0;
    while(i < cart.length-1){
      say = say +  cart[i].itemName + ' at $' + cart[i].itemPrice + ', ';
      i++;
    }
      say = state + say + 'and ' + cart[i].itemName + ' at $' + cart[i].itemPrice + '.';
}return (say);
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }return (total)
}

function removeFromCart(item){
 var arrNam = []
 for(var h = 0; h < cart.length; h++){
   arrNam.push(cart[h].itemName)
 }
 for(var i = 0; i < cart.length; i++){
   if(cart[i].itemName === item){
     var bob = cart.splice(cart.indexOf(cart[i]), 1);
     return console.log(cart);
     
    
    }else if(arrNam.includes(item) === false){
      
  }
  } return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(arguments.length === 0){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }else{
    var cartTotal = total()
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${arguments[0]}.`;
  
}
}
