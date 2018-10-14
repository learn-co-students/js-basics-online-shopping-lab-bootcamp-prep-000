var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var addedItem={}
  addedItem["itemName"]=item
  addedItem["itemPrice"]=getRandomInt(100)
  cart.push(addedItem)
  return `${addedItem["itemName"]} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0){
    return "Your shopping cart is empty."
  }
  if (cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  const namesAndPrices = []
  for (var i=0; i<cart.length; i++){
    namesAndPrices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have ${namesAndPrices.slice(0, namesAndPrices.length-1).join(`, `)}, and ${namesAndPrices[namesAndPrices.length-1]}.`
  }


function total() {
  var total=0
  for (var i=0; i<cart.length; i++){
    total+=parseInt(cart[i].itemPrice)
  }
  return total
}

function removeFromCart(item) {
  var index=-1
  for (var i=0; i<cart.length; i++){
    if (cart[i].itemName===item){
      index=i
    }
  }
  cart.splice(index,1)
  if (index===-1){
    return "That item is not in your cart."
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  var retString=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart=[]
  return retString

}
