var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
var price= Math.floor(Math.random()*100);

cart.push({[item]:price});

console.log(`${item} has been added to your cart.`);

return cart;
}

function viewCart(){

  if(cart.length<1){
    console.log("Your shopping cart is empty.");
  } else{
    var msgArray=[];

    for(let i=0; i<cart.length;i++){
      var currentItemName= Object.keys(cart[i]);
      var currentItemPrice= cart[i][currentItemName];
      msgArray.push(` ${currentItemName} at $${currentItemPrice}`);
    }

    console.log(`In your cart, you have${msgArray}.`)
  }
}

function removeFromCart(item){
var itemNotRemoved=true;
  for(let i=0; i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
        cart.splice(i,1);
        itemNotRemoved=false;
    }
  }
  if(itemNotRemoved){
    console.log("That item is not in your cart.");
  }
  return cart;
}


function placeOrder(creditCard){
   if (creditCard==null){
     console.log("We don\'t have a credit card on file for you to place your order.");
   } else{
     console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
     cart=[];
   }
}
