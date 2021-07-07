var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = {
   itemName:item, 
    itemPrice: Math.floor(Math.random()*100) + 1
  }
       

  cart.push (item)

  return `${item.itemName} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var newarray = [];
  for (var i = 0; i < cart.length; i++) {
    newarray.push(cart[i].itemName + " at $" + cart[i].itemPrice)
  }
   var myString = "In your cart, you have "
   if (newarray.length===1) {
     myString += newarray +"."
     return myString
   }else if (newarray.length ===2) {
     myString += (newarray[0] + ", and " + newarray[1] + ".")
   }else if (newarray.length >2) {
     var last = newarray.pop()
     var other = newarray.join (", ")
     myString += (other + ", and " + last + ".")
   }
    return (myString)
  }

function total() {
  var sum = 0
for (var l = 0; l < cart.length; l++) 
  sum += cart[l].itemPrice;
return sum
}


function removeFromCart (toRemove) {

for (var i = 0; i < cart.length; i++) {
  if ( cart[i].itemName === toRemove) {
    
    cart.splice (i,1);
    return(cart)
  
  }
}

   return 'That item is not in your cart.'
  
}
  
  
  
function placeOrder(cardNumber) {
  if (cardNumber ===  undefined) {
    return "Sorry, we don't have a credit card on file for you."
    }else 
    var totalart = total();
    
    cart = [];
  
    return `Your total cost is $${totalart}, which will be charged to the card ${cardNumber}.`
  
  }