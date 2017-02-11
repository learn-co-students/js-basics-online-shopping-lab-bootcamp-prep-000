var cart =[];

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
//1
function addToCart(itemName){
  var price = Math.floor(Math.random()*100);
  var item = {
    [itemName]: price
  };
  console.log(`${itemName} has been added to your cart.`);
    cart.push(item);
    return cart;
  }


//2
    function viewCart(){
        if(cart.length){
        var textPiece =[];
        for(var i =0;i<cart.length; i++){
          for(var itemName in cart[i]){
         textPiece.push(` ${itemName} at $${cart[i][itemName]}`);
        }
       }
       console.log(`In your cart, you have${textPiece}.`)
      } else{
        console.log("Your shopping cart is empty.")
      }
      }
//3
      function removeFromCart(itemName){
        var cartHasItem = false
        for(var i =0;i<cart.length; i++){
          if(cart[i].hasOwnProperty(itemName)){
            console.log(`HAS ${itemName}!!!!!!!1`);
            var cartHasItem =true
            cart.splice(i,1);
          }

        }if(cartHasItem===false){console.log("That item is not in your cart.")}
        return cart;
      }
//4
function placeOrder(cardNumber){
       function total(){
         var toAdd=[];
         for(var i =0;i<cart.length; i++){
            for(var itemName in cart[i]){
        toAdd.push(cart[i][itemName]);
            }
         }
           console.log(toAdd);
           return toAdd.reduce(function(a,b){return a+b;},0);
       }

       if(!cardNumber){console.log("We don't have a credit card on file for you to place your order.")
       }else{console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}

return cart=[];
     }
