var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var randomNum = getRandomNum()
  var ItemToAdd={
   itemName: item,
   itemPrice: randomNum
   
 }
 
 cart.push(ItemToAdd)
 return `${ItemToAdd.itemName} has been added to your cart.` 
}

function viewCart() {
  if(cart.length<1){
    return "Your shopping cart is empty."
  }else if(cart.length==1){
    var tempCart =[]
    for(let i =0;i<cart.length;i++ ){
      tempCart.push(cart[i].itemName+" at $"+cart[i].itemPrice+".")
  }
    return `In your cart, you have ${tempCart[0]}`
  }else{
    var tempCart2 =[]
    for(let i =0;i<cart.length;i++ ){
    tempCart2.push(i==cart.length-1?"and "+cart[i].itemName+" at $"+cart[i].itemPrice+".":cart[i].itemName+" at $"+cart[i].itemPrice)
  }

   return "In your cart, you have "+tempCart2.join(", ")
  }
 
}

function total() {
  var total =0
  for(let i =0;i<cart.length;i++){
   total += cart[i].itemPrice; 
  }
 return total
 
}

function removeFromCart(item) {
  for(let i =0;i<cart.length;i++){
    if(cart[i].itemName===item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var cardChecker = new RegExp("[0-9]+")
  if(cardChecker.test(cardNumber)){
    var myTotal = total()
    cart=[]
    return `Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
 function getRandomNum(){
  return Math.floor((Math.random()*(100))+1)
}
