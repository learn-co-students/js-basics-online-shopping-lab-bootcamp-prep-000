var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let cost=Math.floor(Math.random()*100)+1
 cart.push({[item]: cost})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length===0){
    return console.log("Your shopping cart is empty.")
  }
  let outputArray=[]
  for (let i=0;i<cart.length;i++){
    let cartInstance=cart[i]
    let item=Object.keys(cartInstance)[0]
    let price=cartInstance[item]
    outputArray.push(`${item} at $${price}`)
  }
  switch(outputArray.length){
    case 1:
      break;
    case 2:
      outputArray=outputArray.join(" and ")
      break;
    default:
      outputArray[cart.length-1]="and ".concat(outputArray[cart.length-1])
      outputArray=outputArray.join(", ")
  }
  console.log(`In your cart, you have ${outputArray}.`)
}
function total() {
  let sum=0
  for (let i=0;i<cart.length;i++){
    let item=Object.keys(cart[i])[0]
    let price=cart[i][item]
    sum+=price
  }
  return sum
}

function removeFromCart(item) {
  let presentInArray=false
  for(let i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      presentInArray=true
      cart=cart.slice(0,i).concat(cart.slice(i+1))
    }
  }
  if(!presentInArray){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
  }
}
