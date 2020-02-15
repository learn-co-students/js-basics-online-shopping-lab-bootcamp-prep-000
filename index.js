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

var price = Math.floor(Math.random()*100)
 var obj = { itemName: item, itemPrice : price }
 cart.push(obj);
  return  (`${obj.itemName} has been added to your cart.`)

}

function viewCart() {
  // write your code here
         if(cart.length === 0)
         {
          return ('Your shopping cart is empty.')
         }

       var str ="In your cart, you have"
       var str1 =`${str} ${cart[0].itemName} at $${cart[0].itemPrice}`
       
        if(cart.length  == 1)
         {
         return `${str1}.`
         }
       
        if(cart.length  == 2)
        {
         var  str2 =`${str1}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
         return str2
        }
        if(cart.length  == 3)
         {
          var  str3 =`${str1}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
          return str3
         }

}

function total() {
  // write your code here
  var total=0
  for(var item in cart)
  {
    total += cart[item].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for( var i in cart )
  {
    if( cart[i].itemName == item)
    {
    cart.splice(i,1)
    }
    
  }
  if(typeof cart.item == "undefined" )
  {
    return 'That item is not in your cart.'
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(typeof cardNumber == "undefined")
  {
   return "Sorry, we don't have a credit card on file for you."
  }
  var totalcost = total()
  cart = 0
  return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`
}
