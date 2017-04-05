var cart = [];


function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t;
}


  function getCart() {
   return cart;
  }



  function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
    cart.push( '${item}: ${price}' );
     console.log(`${item} has been added to your cart.`);
     return cart;
  }

  function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var obj = {};
  var key = item;
  obj[key] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
  }

  function viewCart() {
    var newArray = [];
         if (cart.length === 0) {
             console.log('Your shopping cart is empty.');
         } else {
           var i = 0;
               while (i < cart.length) {
                 var newObj = cart[i];
                 var newItem = Object.keys(newObj);
                  for (newItem in newObj){
   console.log(`In your cart, you have ${newItem} at ${newObj[newItem]}`);
                                         }
       }
 }
