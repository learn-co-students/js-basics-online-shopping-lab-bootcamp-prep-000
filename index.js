var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var food = {[item]:Math.floor(Math.random()*99)+1}
 cart.push(food)
 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {

 if(cart.length==0)
 {
   console.log("Your shopping cart is empty.")
 }
 else
 {
   var cartnow = []
   var firstitem;
   for(let i=0;i<cart.length;i++)
   {
     var thekey = Object.keys(cart[i])
     var value = cart[i][thekey]
     if(cart.length>2)
     {
       if(i!=(cart.length-1))
       {
         var item = " "+thekey+" at $"+value
         cartnow = cartnow+item+","
       }
       else {
         var item = " and "+thekey+" at $"+value
         cartnow = cartnow+item
       }
     }
     else
     {
       if(i!=(cart.length-1)||cart.length==1)
       {
         var item = " "+thekey+" at $"+value
         cartnow = cartnow+item
       }
       else{
         var item =" and "+thekey+" at $"+value
         cartnow = cartnow+item
       }
     }
   }
   console.log(`In your cart, you have${cartnow}.`)
 }
}



function total() {
  var total = 0;
  if(cart.length>0)
  {
  for(let i=0;i<cart.length;i++)
  {
    var thekey = Object.keys(cart[i])
    var value = cart[i][thekey]
    total = total+value;
  }
}
else {
  return total
}
  return total
}

function removeFromCart(item) {
  for (let i=0;i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)===true){
      cart.splice(i,1);
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
if(cardNumber===undefined || cardNumber === null)
{
  console.log("Sorry, we don't have a credit card on file for you.")
}
else if(total()>0) {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
else{
  console.log('Your total is 0')
}
cart = []
}
