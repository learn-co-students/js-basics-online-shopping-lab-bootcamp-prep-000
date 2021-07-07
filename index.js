var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newObject= {}
  newObject["itemName"]=item
  newObject["itemPrice"]=Math.floor(Math.random()*100)
  cart.push(newObject)
  return `${item} has been added to your cart.`
}


function viewCart() {
  let newString="In your cart, you have "
  if(!cart.length)return `Your shopping cart is empty.`
  for(let i=0;i<cart.length;i++){
    newString+=`${cart.length-1===i&&cart.length>1?"and ":""}${cart[i].itemName} at $${cart[i].itemPrice}${cart.length-1===i&&cart.length>=1?".":", "}`
  }
  return newString
}

function total() {
  let total=0
  cart.forEach((elem,i)=>{
    total+=elem.itemPrice
  })
  return total
}

function removeFromCart(item) {
  let removedItem=cart.findIndex((elem,i)=>elem.itemName===item)
  if(removedItem===-1){
    return "That item is not in your cart."
  }
  else{
    cart.splice(removedItem,1)
    return cart
  }
  
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    let print=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart=[]
    return print
  }
}
