var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 // cart.push({ [itemName]: Math.floor(Math.random() * 100) })
 cart=[...cart, { [itemName]: Math.floor(Math.random() * 100) }]
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
var cart1=[]

 if (cart.length==0){
  console.log("Your shopping cart is empty.")
  } else {
      for(var i=0;i<cart.length;i++){
         if ( (i==cart.length-1)&&( i=>1)&&(i!=0)){
           cart1.push(` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
         }
         else{
           cart1.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
         }
      }
}
if(cart.length==2){
  console.log(`In your cart, you have${cart1.join("")}.`)
  //return `In your cart, you have ${cart1.join("")}.`
  }
    else{
         console.log(`In your cart, you have${cart1}.`)
         //return `In your cart, you have ${cart1}.`
        }
}

function total() {
  // write your code here
var cart1=[]
var totalPrice=0
for (var i=0;i<cart.length;i++){
    cart1.push(cart[i][Object.keys(cart[i])])
    totalPrice=totalPrice+cart1[i]
}

return totalPrice
}

function removeFromCart(item) {
  // write your code here
//  var cart1=[]
  for(var i=0;i<cart.length;i++){
    if (Object.keys(cart[i])==item && i>0 && i<cart.length-1){
      cart.splice(i,1)
      return cart
      // cart1=[...cart.slice(0,i),cart.slice((i+1),cart.length)]
       //return cart1
     }
     else if (Object.keys(cart[i])==item && i==0){
       cart.shift()
       return cart
     }
     else if (Object.keys(cart[i])==item && i==cart.length-1){
       cart.pop()
       return cart
     }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber== null ){
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
    return cart
  }
}
