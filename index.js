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
 let num = Math.floor(Math.random()*100 + 1);
 let obj = {};
 obj.itemName = item;
 obj.itemPrice = num;
cart.push(obj);
return `${item} has been added to your cart.`;

}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
      let ars = "In your cart, you have ";
        for(let i = 0; i < cart.length; i++) {
          if (i === cart.length - 1) {
            ars += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
          }

          else if (i === cart.length - 2) {
              ars += `${cart[i].itemName} at $${cart[i].itemPrice} and `;
          }

          else {
              ars += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
          }
    }
    return ars;
  }
}


function total() {
  // write your code here
  let price = 0;
  for(let i = 0; i < cart.length; i++){
    price += cart[i].itemPrice;
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`

  }

  var g =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`  ;
  cart = [];
  return g;

}
