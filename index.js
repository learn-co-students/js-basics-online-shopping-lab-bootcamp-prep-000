var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // wrvite your code here

 var itemPrice = Math.floor((Math.random() * 100) + 1);
      cart.push({itemName: itemName, itemPrice: itemPrice});
    return (`${itemName} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  if (cart.length < 1) {
     return ('Your shopping cart is empty.')
     }
  else {
  for (var i = 0; i < cart.length; i++) {}
  var sentence = 'In your cart, you have'
  var midSentence = 'at $'
  var perdiod = '.'
  var and = 'and'
  var at = 'at'
  var comma = ','
  var money = '$'
  if (cart.length == 1) {
   return (`${sentence} ${cart[0].itemName} ${midSentence}${cart[0].itemPrice}${perdiod}`);

  }


   else if (cart.length == 2) {
     return(`${sentence} ${cart[0].itemName} ${midSentence}${cart[0].itemPrice}${comma} ${and} ${cart[1].itemName} ${at} ${money}${cart[1].itemPrice}${perdiod}`);
   }

  else if (cart.length == 3) {
    return (`${sentence} ${cart[0].itemName} ${midSentence}${cart[0].itemPrice}${comma} ${cart[1].itemName} ${at} ${money}${cart[1].itemPrice}${comma} ${and} ${cart[2].itemName} ${at} ${money}${cart[2].itemPrice}${perdiod}`);

  }
  }

}




function total() {
  // write your code here
 var sum = 0;

for (var i = 0; i < cart.length; i++) {
  sum += cart[i].itemPrice

}
return sum

}
function removeFromCart(item) {
  // write your code here
var t = false
for (var i = 0 ; i < cart.length; i++) {
    var x = i
    if (item == cart[x].itemName)  {
        cart.splice(x,1)
        t = true;
      }
    }
      if (t === false) {
        return ('That item is not in your cart.')

}


}


function placeOrder(cardNumber) {
  // write your code here
  var x = cardNumber

var z = total()
if (x == undefined) {

  return ('Sorry, we don\'t have a credit card on file for you.')
}
  else if  (cardNumber == x); {
  cart = [];
    return (`Your total cost is $${z}, which will be charged to the card ${x}.`);




}

}
