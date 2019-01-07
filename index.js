var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price= Math.floor(Math.random() * 100);

  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`) ;
  return cart;
}

function viewCart() {
  // write your code here
  if(cart.length==0)
  {
  console.log(`Your shopping cart is empty.`);
  }
  if(cart.length==1)
      {
        for(var key in cart[0]){
        console.log(`In your cart, you have ${key} at $${cart[0][key]}.`);
         }

      }
  else if (cart.length==2)
  {
       for(var key in cart[0]){
      var str=`In your cart, you have ${key} at $${cart[0][key]} and`;
       }
       for(var key in cart[1])
       {
        console.log(str+` ${key} at $${cart[1][key]}.`);
       }

  }

  else {
        var str=`In your cart, you have`;
       for(var i=0;i<cart.length-1;i++)
         { for(var key in cart[i])
          {
             str=str+` ${key} at $${cart[i][key]},`
          }
        }
        for(var key in cart[cart.length-1])
        {
           console.log(str +` and ${key} at $${cart[cart.length-1][key]}.`)
        }
}
}
function total() {
  // write your code here
  var tot=0;
  for(var i=0;i<cart.length;i++)
    { for(var key in cart[i])
     {
        tot=tot+cart[i][key]
     }
   }
   return tot;
}

function removeFromCart(item) {
    var exist = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      exist = true;
      cart.splice(i, 1);
    }
  }
if (!exist) {
   console.log("That item is not in your cart.");
 }
  return cart;
 }

function placeOrder(cardNumber) {
  // write your code here

  if(cardNumber===undefined)
  {
  console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  else {
    var cartTotal = total();

        console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
  cart=[];
}
