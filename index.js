var cart = [];
var stuff = `In your cart, you have `;
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var sale = { itemName: item, itemPrice:Math.floor(Math.random() * 100 +1) }
 cart.push(sale);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } 
  
    else if (cart.length === 1) {
       return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  }
  
  else if (cart.length === 2) {
    for (let i = 0; i < cart.length; i++) {
    return `In your cart, you have ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, and ${cart[i+1]["itemName"]} at $${cart[i+1]["itemPrice"]}.`;
     }
     

     
  } else if (cart.length > 2) {
    
    for (let x= 0; x  < cart.length; x++) {
      if (x > 0)
        stuff += (x < cart.length -1) ? `, ` : `, and `;
      stuff += `${cart[x].itemName} at $${cart[x].itemPrice}`;
      
      
    }
    return `${stuff}.`;
  }
}



function total() {
  // write your code here
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i]["itemPrice"];
    }
  return cartTotal;
}

function removeFromCart(item) {
  var x = cart.findIndex(i => i.itemName === item);
  cart.splice(x,1);
  if (cart.indexName != item) {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
      var statement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
      cart = cart.splice();
      return statement;
  }
     
}
