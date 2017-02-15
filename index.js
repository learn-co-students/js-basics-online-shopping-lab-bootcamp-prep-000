var cart;

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
   return cart
 }

 function addToCart(item){
   var price = Math.random(100);
   cart.push(item, price) = new Object;
   console.log(item, " has been added to your cart.");
 }

 functio viewCart(){
   for (item in cart){
     if (cart.length > 0){
       console.log("In your cart, you have ", {cart:item});
     }
      else{
        (cart.length == 0){
       console.log("Your shopping cart is empty.");
        }
      }
   }
 }

function removeFromCart(itemName){
  for (item in cart){
    if (cart.itemName == 0){
      console.log("That item is not in your cart");
    }else {
      (cart.itemName > 0);
      delete (cart.itemName);
    }
    return cart
    }
}

function placeOrder(cardNumber){
  if (cardNumber == 0){
    console.log("We don\t have a credit card on file for you to place your order");
  }else {
    console.log("Your total cost is",  total() " which will be charged to the ", cardNumber);
  }
  Initialize cart;
  }
}
