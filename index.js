var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
/*
 original code 
 
 var price = Math.floor((Math.random()*(101-1) +1))

 cart.push({itemName:item, itemPrice:price})
 
 return cart
 */

var item = generateCartItem(item)
getCart().push(item)
return `${item.itemName} has been added to your cart.`

}


function generateCartItem(itemName){
  
  return{ itemName: itemName, itemPrice:getRandomInt(1,100)}
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}


/*
original solution

function viewCart() {
  // write your code here
  if (getCart().length === 0)
  return "Your shopping cart is empty."
  else 
  {
      var temp = "In your cart, you have "
      var itemNamePrice = []
for(let i = 0;i < getCart().length; i++){
     if (getCart().length === 1)
     itemNamePrice.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`) 
      else if (getCart().length === 2)
      {
       itemNamePrice.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
       if (i = 1) {
         itemNamePrice.push(` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
       }
      }
      else
      {
       itemNamePrice.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
       if (i = 1) {
          itemNamePrice.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
       }
       if (i = 2) {
         itemNamePrice.push(` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
       }
      }
     
}
 return temp + itemNamePrice+"."

*/
    

function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

function total() {
  
  var sum = 0;
  for(let i = 0; i < getCart().length; i++){
   sum += getCart()[i].itemPrice
    
  }
  
  return sum
}

function removeFromCart(item) {
 
  for(let i = 0; i < getCart().length; i++){
   if (getCart()[i].itemName === item){
     getCart().splice(i,1)
     
     return cart
   }
    
  }
  
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  
  if( cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else{
  
    var temp = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    getCart().splice(0);
    
    return temp
  }
  
}
