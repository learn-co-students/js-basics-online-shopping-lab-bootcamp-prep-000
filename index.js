var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var random = Math.floor(Math.random() * 100) + 1;
  
  let newObject = {itemName:item, itemPrice:random};
  cart.push(newObject)
  
  return `${newObject.itemName} has been added to your cart.`
  
}

function viewCart() {
  var message = []
  if(cart.length === 0 ){
    return "Your shopping cart is empty."
  } else{
    for (let i=0;i<cart.length;i++){
      
      if (cart.length === 1){
        message.push(" " + cart[i].itemName + " at $" + cart[i].itemPrice) 
      }else{
        var num = cart.length - 1
        if(i===num){
          message.push(" and " + cart[i].itemName + " at $" + cart[i].itemPrice)
        } else {
          message.push(" " + cart[i].itemName + " at $" + cart[i].itemPrice) 
        }
      }
    }//end of for
    return "In your cart, you have" + message + "."
  }//end of else
}

function total() {
  let total = 0;
  for (let i=0;i<cart.length;i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (let i=0;i<cart.length;i++){
    if(item == cart[i].itemName){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}



function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else{
    var all = total()
    cart = []
    return "Your total cost is $" + all + ", which will be charged to the card " + cardNumber + "."
  }
}
