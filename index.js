var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
   var price = Math.random() * 100
   var roundedPrice = Math.floor(price)
   cart.push({[item]: roundedPrice})
   console.log(item + " has been added to your cart.")
   return cart;
 }

 function viewCart(){
   if (cart.length === 0){
     console.log("Your shopping cart is empty.")
   } else {

     var itemsAndPrices = [];

     for (var i in cart){
       var itemAndPrice = cart[i];
       for (var key in itemAndPrice){
         itemsAndPrices.push(key + " at $" + itemAndPrice[key])
       }
     }
     var cartItems = itemsAndPrices.join(", ");
     console.log("In your cart, you have " + cartItems + ".")
   }
 }

 function removeFromCart(item){
   let itemInCart = false

   for(let i = 0, l = cart.length; i < l; i++){
     if(cart[i].hasOwnProperty(item)){
       let index = cart.lastIndexOf(item)
       cart.splice(index, 1)
       itemInCart = true
       return cart;
     }
   }

   if(itemInCart === false){
     console.log("That item is not in your cart.")
   }
 }


 function placeOrder(cc){
   if(!cc){
     console.log("We don't have a credit card on file for you to place your order.")
   }

   console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
   cart = []
 }
