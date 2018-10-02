var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor((Math.random() * 100) + 1);
 let new_item = Object.assign({},{ itemName:item,itemPrice:price }) 
 cart.push(new_item)
 //return cart
 return `${new_item.itemName} has been added to your cart.` 
}

function viewCart() {
  var cartInside = 'In your cart, you have'
  if (cart.length < 1){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
      cartInside = `${cartInside} ${cart[0].itemName} at $${cart[0].itemPrice}.`
      return cartInside
  }
      else {
        for(let i=0;i<cart.length;i++){
          if(i===cart.length-1){
            cartInside = `${cartInside} and ${cart[i].itemName} at $${cart[i].itemPrice}.` 
            return cartInside  
          }
            else {
              cartInside = `${cartInside} ${cart[i].itemName} at $${cart[i].itemPrice},`
            }
        }
      }
}
 

function total() {
  var total = 0
  for(let i=0;i<cart.length;i++){
    total+=cart[i].itemPrice
  }
  return total

}

function removeFromCart(item) {
  var removed = []
  for(let i=0;i<cart.length;i++){
      if (cart[i].itemName === item){
        removed = cart.splice(i,1)
        return cart
      } 
    }
  if (!removed.length){
    return 'That item is not in your cart.'
  }
}


function placeOrder(cardNumber) {
  var total = 0
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    for (let i = 0;i<cart.length;i++){
      total=+cart[i].itemPrice
      removeFromCart(cart[i].itemName)
    }
  } return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  
}