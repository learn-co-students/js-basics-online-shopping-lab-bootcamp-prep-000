var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
   var price = Math.random() * 100;
   price = Math.floor(price);
   var items = {[item]: price}
   cart.push(items);
   console.log(`${item} has been added to your cart.`);
   return cart;
 }

 function viewCart() {
     if (cart.length == 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var list = [];
     for (var i = 0, l = cart.length; i < l; i++) {
     var item = Object.keys(cart[i]);
     list.push(` ${item} at $${cart[i][item]}`);
     }
      console.log(`In your cart, you have${list}.`);
     }
   }
   function removeFromCart(remove) {

          for (var i = 0; i <cart.length; i++) {
           var item = Object.keys(cart[i]);
            if (remove == item) {
             cart = cart.slice(0, i);
           return cart;
            } } if (remove != item) {
                 console.log('That item is not in your cart.');
                   }
          }

    function placeOrder(cardNumber) {
      if (cardNumber == undefined) {
        console.log("We don't have a credit card on file for you to place your order.");
      } else{
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
      }
    }


function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0


          for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      t += cart[i][item];
    }


  return t
}
