var cart = new Array();

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice=Math.floor(Math.random()*100)
 var newItem= new Object({[itemName]: itemPrice})

 console.log(`${itemName} has been added to your cart.`)

 cart.push(newItem)


 return (cart)
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    var string='Your shopping cart is empty.'
    console.log(string)
    return (string)
  } else{
      var firstItem=cart[0]
      var itemName=Object.keys(firstItem)
      var firstItemName=itemName.shift()
      var firstPrice=firstItem[firstItemName]
       var string=`In your cart, you have ${firstItemName} at $${firstPrice}`
       for (var i=1; i<cart.length; i++){
         if (cart.length>2){
           string=string+','
         }
         if (i===cart.length-1){
           string=string+" and"
         }

         var currentItem=cart[i]
         var itemName=Object.keys(currentItem)
         var currentItemName=itemName.shift()
         var price=currentItem[currentItemName]
        var string= string+` ${currentItemName} at $${price}`

       }
       string=string+"."
       console.log(string)
       return(string)
      }
}

function total() {
  // write your code here
  var cartTotal=0
for (var i=0; i<cart.length; i++){
  var currentItem=cart[i]
  var itemName=Object.keys(currentItem)
  var currentItemName=itemName.shift()
  var price=currentItem[currentItemName]
  cartTotal=cartTotal+price
}
  return(cartTotal)
}

function removeFromCart(item) {
  // write your code here
  var itemFound=false
  var i=0
  while (i<cart.length && !itemFound){
    var currentItem=cart[i]
    var itemName=Object.keys(currentItem)
    var currentItemName=itemName.shift()
    var price=currentItem[currentItemName]
    if (item===currentItemName){
       itemFound=true
       cart=[...cart.slice(0,i),...cart.slice(i+1)]
    }
    i++
  }
  if (!itemFound){
    console.log("That item is not in your cart.")
  }
    return(cart)
}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
      var totalCost=total()
      console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  }
  cart=[]
}
