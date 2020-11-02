var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var obj = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * 99) + 1};
cart.push(obj);
return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
 var arr = [];
   if (cart.length === 0) {
      return 'Your shopping cart is empty.';
    }
    
    
    for (let i = 0; i < cart.length; i++) {
      var item = cart[i].itemName;
      var price = cart[i].itemPrice;
      if (i === (cart.length - 1) && i !== 0) {
        arr.push(`and ${item} at $${price}`);
      }
      else {
      arr.push(`${item} at $${price}`);
      }
    }
    return `In your cart, you have ${arr.join(', ')}.`;
}

function total() {
 let num = 0;
 for (let i = 0; i < cart.length; i++) {
   var val = cart[i].itemPrice;
  num = num + val;
 }
 return num;
}


function removeFromCart(item) {
  let test = false;
for (let i = 0; i < cart.length; i++) {
  if (cart[i].itemName === item) {
    cart.splice(i, 1);
    let test = true;
    return cart;
  } 
}
if (test !== true) {
  return "That item is not in your cart.";
}

}

function placeOrder(cardNumber) {
  var num = total();
  var crd = cardNumber;
  if (!crd) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    setCart(0);
    return `Your total cost is $${num}, which will be charged to the card ${crd}.`;
    
  }
  
}





