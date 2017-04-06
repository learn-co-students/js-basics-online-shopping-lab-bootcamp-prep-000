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
  var obj = {};
  var key = item;
  obj[key] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
  }

  function viewCart() {
       if (cart.length === 0) {
           console.log("Your shopping cart is empty.")
                              } else {
                                      var newArray = [];
                                             for (var i = 0; i < cart.length; i++) {
                                                var  newObj = cart[i];
                                                var items = Object.keys(newObj);
                                                var price = newObj[items];
                                                newArray.push(`${items} at $${price}`);
                                                                                    }
                                    console.log(`In your cart, you have ${newArray.join(', ')}.`)
                                    }
                      }

                      function removeFromCart(item) {

                        if (cart.length) {
                          for (var i=0; i < cart.length; i++) {
                            if (cart[i].hasOwnProperty(item)) {
                              cart.splice(i, 1);
                            }
                          }
                        } else {
                          console.log("That item is not in your cart.");
                        }
                      }

function placeOrder(n) {
 if (n == undefined) {
   console.log('We don\'t have a credit card on file for you to place your order.');
 } else {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`);
 }
 cart = [];
 return cart;
}
