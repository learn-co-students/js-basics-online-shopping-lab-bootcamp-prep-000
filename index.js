var cart = [];
var itemPrice;


function setCart(newCart) {
  cart = newCart;
}

function getCart(){
   return cart;
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

function addToCart(item){
    itemPrice = Math.floor(Math.random()*100);

//    cart[cart.length] = `{$item:itemPrice}`; or below
    cart.push(`{$item:itemPrice}`);
//    cart.push({item:itemPrice});
    console.log( item +" has been added to your cart.");

    return cart;
}

var itemNames = Object.keys(cart);

function viewCart(){

    if(itemNames.length === 0){
        console.log("Your shopping cart is empty.");
    }
    else{
       for(var i = 0; i < itemNames.length; i++ ){
          console.log( cart[i] +" at $"+ cart[i].item);
       }
    }

}

/*
function removeFromCart(item){

    for(var i = 0; i <cart.length;i++)
    {
        if(cart[i].hasOwnProperty(item))
        {
           delete cart[i].item;
        }
        else {
            return "That item is not in your cart.";
        }
    }
}
*/
