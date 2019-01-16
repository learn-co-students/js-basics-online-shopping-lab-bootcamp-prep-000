var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var name = item;
  var price = Math.floor(Math.random() * 101);
  
  
  var newItem = {
    itemName: name,
    itemPrice: price,
  };
  
  cart.push(newItem);
  return (newItem.itemName) + " has been added to your cart."
}


function viewCart () {
  let theOtherAnswer = '';
  let theAnswer = '';
  let twoCart = '';
  let threeCart = '';
  let fourCart = '';
  let fiveCart = '';
  let therealAnswer = []
  
  if (cart.length === 0) {
  return "Your shopping cart is empty."
} else {
    
let str = "In your cart, you have "
for (var i = 0; i < cart.length; i++)
 for (var itemName in cart[i])
 
    therealAnswer.push(cart[i][itemName])
    theAnswer = therealAnswer.slice(1,2);
    theOtherAnswer = therealAnswer.slice(0,1);
    twoCart = therealAnswer.slice(2,3);
    threeCart = therealAnswer.slice(3,4);
    fourCart = therealAnswer.slice(4,5);
    fiveCart = therealAnswer.slice(5,6);
  
}


if (cart.length === 1)
return ("In your cart, you have " + theOtherAnswer + " at " + "$" + theAnswer + ".")


else if (cart.length === 2)
return ("In your cart, you have " + theOtherAnswer + " at " + "$" + theAnswer + "," + " and " + twoCart + " at " + "$" + threeCart + ".")


else if (cart.length >= 3) 
return ("In your cart, you have " + theOtherAnswer + " at " + "$" + theAnswer + ", " + twoCart + " at " + "$" + threeCart + ", " + "and " + fourCart + " at " + "$" +  fiveCart + ".")


}



function total() {
  
  var totalArray = [];
  var sum = 0
 
 
for (var i = 0; i < cart.length; i++)
 for (var itemName in cart[i])
 totalArray.push(cart[i][itemName]);
 
for (var t = 1; t < totalArray.length; t+=2)

sum += totalArray[t] 
 
return sum
    
    
}

function removeFromCart(item) {

for (var i = 0; i < cart.length; i++)

  for (var itemName in cart[i])  {
  
  if (cart[i][itemName] === item) {
    
    cart.splice(i,1)
  
    return cart
    
  }
  
}

return "That item is not in your cart."

}

function placeOrder(cardNumber) {

var cartTotal = `${total()}`

while (cart.length > 0) {
  
  cart.pop();
  
}



if (cardNumber !== undefined ) {
  
 return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`

} else if (cardNumber !== 8) {

 return "Sorry, we don't have a credit card on file for you."

}

}
