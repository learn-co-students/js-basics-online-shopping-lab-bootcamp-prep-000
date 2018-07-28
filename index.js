var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = getCart(item);
  var object = {itemName: item, itemPrice: (Math.floor((Math.random() * 100) + 1))};
     cart.push(object);
  return `${item} has been added to your cart.`
 }

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
    } else if (cart.length === 2) {
        var itemAndPrices = [];
         for (var i = 0; i < cart.length; i++) {
          itemAndPrices.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`);
          }   
        return `In your cart, you have ${itemAndPrices.join(', and ')}.`
    } else if (cart.length >= 3) {
        var itemAndPrices2 = [];
         for (var i = 0; i < cart.length - 1; i++) {
           itemAndPrices2.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`);
          } 
        return `In your cart, you have ${itemAndPrices2.join(', ')}, and ${cart[cart.length - 1]["itemName"]} at $${cart[cart.length - 1]["itemPrice"]}.`
      }
}

function total() {
 var sum = 0;
 for (var i = 0; i < cart.length; i++) {
   sum += (cart[i]["itemPrice"])
      }
 return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
       cart.splice(i, 1);
   return cart;
    } 
     }
       return "That item is not in your cart."
    }

function placeOrder(cardNumber) {
  if (cardNumber) {
    var newTotal = total();
    cart.splice(0);
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
  return "Sorry, we don't have a credit card on file for you.";
      }
}
