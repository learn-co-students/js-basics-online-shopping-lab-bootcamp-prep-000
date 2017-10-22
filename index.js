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
 var itemPrice = Math.random() * (100 - 1) + 1;
 var itemName = item;
 item = { [itemName] : parseInt(itemPrice)};
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var itemName = [];
  if (cart[0] != null) {
    var fixed = "In your cart, you have"
    var text ='';
    var text1 = '';
    for (var i = 0; i < cart.length; i++) {
      itemName[i] = Object.keys(cart[i])
      if (cart.length == 1) {
        console.log(`${fixed} ${itemName[i]} at $${cart[i][itemName[i]]}.`)
      }
      else if ((cart.length - 1) != i) {
        if (i == 0) {
          text = text + ` ${itemName[i]} at $${cart[i][itemName[i]]}`;
        }
        else{
          text = text + `, ${itemName[i]} at $${cart[i][itemName[i]]}`;
        }

      }
      else if((cart.length - 1) == i) {
          text = text + ` and ${itemName[i]} at $${cart[i][itemName[i]]}.`;
          //console.log(`${text} and ${itemName[i]} at $${cart[i][itemName[i]]}.`)
      }
    }
    console.log(fixed + text);
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var cartTotal = 0;
  var itemName = [];
  debugger;
  for (var i = 0; i < cart.length; i++) {
    itemName[i] = Object.keys(cart[i])
    cartTotal = cart[i][itemName[i]] + cartTotal;
  }
  return cartTotal;
}
function removeFromCart(item) {
  // write your code here
  var h = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item))
    {
      cart.splice(i,1);
      h = 1;
    }
  }
  if (h != 1) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var cardTotal = total()
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
      console.log(`Your total cost is $${cardTotal}, which will be charged to the card ${cardNumber}.`)
      cart = [];
  }

  return total();

}
