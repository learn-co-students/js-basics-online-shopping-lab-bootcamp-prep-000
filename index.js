var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const object = {itemName: item , itemPrice: Math.floor(Math.random() * 100) };
  getCart().push(object)
  return `${object.itemName} has been added to your cart.`;
}

function viewCart() {
  if( cart.length === 0){
    return 'Your shopping cart is empty.';
    
  } else {
    let output = 'In your cart, you have ';
    let value = "";
    
    for( let i = 0; i< cart.length; i++ ){
      let object = cart[i];
      
      
      output+=`${cart[0].itemName} at $${cart[0].itemPrice}`;
      if(i === cart.length-1){
       return output += '.';
      }
      else if(i === cart.length-2){
        return output += `, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      }
      else{
        return output += `, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
      }
      console.log(output);
    }
  }
}

function total() {
  var sum = 0 ;
  for( let i = 0; i< cart.length; i++){
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var presentItem;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === itemName) {
      presentItem = cart.splice(i, 1)
    }
    return presentItem;
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cartTotal = total()
    setCart([])
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
