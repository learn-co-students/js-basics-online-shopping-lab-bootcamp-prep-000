var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName, itemPrice) {
 // write your code here
 itemPrice = Math.floor(Math.random() * 100)
 var items = {itemName:itemName, itemPrice:itemPrice};
 cart.push(items)
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var currentList = [];
  for (let i=0; i<cart.length-1; i++){
    currentList.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
  }
  if(cart.length===0){
    return `Your shopping cart is empty.`
  }else if(cart.length===1){
    return `In your cart, you have ${getCart()[cart.length-1].itemName} at $${getCart()[cart.length-1].itemPrice}.`
  }else if(cart.length>1) {
    return `In your cart, you have`+ currentList + `, and ${getCart()[cart.length-1].itemName} at $${getCart()[cart.length-1].itemPrice}.`
  }
}



function total() {
  // write your code here
 var PriceperItem = [];
 var addTotal = 0;
 for (let i=0; i<cart.length;i++){
   PriceperItem.push(getCart()[i].itemPrice)
 }
 for (let j=0; j<PriceperItem.length;j++){
   addTotal = PriceperItem[j] + addTotal
 }
 return addTotal
}

function removeFromCart(item) {
  // write your code here
  for (let i=0; i<cart.length; i++){
    if(item === getCart()[i].itemName){
      return cart.splice(i,1)
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber===undefined){
    return`Sorry, we don't have a credit card on file for you.`
    }
  else{
    var totalValue = total();
    cart = []
    return`Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`
    }
}
