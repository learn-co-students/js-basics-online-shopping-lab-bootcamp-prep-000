var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newcart = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * Math.floor(100))} 
 cart.push(newcart)
 return `${item} has been added to your cart.`
}

function viewCart() {
 var cartstr = `In your cart, you have `
 var i = 0
 if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1){
    var cartobj1 = cart[0]
     var cartname1 = cartobj1.itemName
     var cartprice1 = cartobj1.itemPrice
    return `In your cart, you have ${cartname1} at $${cartprice1}.`
  }
  else if (cart.length == 2){
    var cartobj2 = cart[1]
    var cartname2 = cartobj2.itemName
    var cartprice2 = cartobj2.itemPrice
    var cartobj11 = cart[0]
    var cartname11 = cartobj11.itemName
    var cartprice11 = cartobj11.itemPrice
    return `In your cart, you have ${cartname11} at $${cartprice11}, and ${cartname2} at $${cartprice2}.`
  }
    else{
      
      while(i<cart.length - 1){
        
        var cartobjx = cart[i]
        var cartnamex = cartobjx.itemName
        var cartpricex = cartobjx.itemPrice
        i++
        cartstr += `${cartnamex} at $${cartpricex}, `
      }
      var finalobj = cart[cart.length - 1]
      var finalname = finalobj.itemName
      var finalprice = finalobj.itemPrice
    cartstr += `and ${finalname} at $${finalprice}.`
      return cartstr 
    }
}


function total() {
 var sum = 0
 for  (var i = 0;i<cart.length;i++){
   var object = cart[i]
   var objectprice = object.itemPrice
   sum += objectprice
    }
  return sum
}

function removeFromCart(item) {
  for (var i = 0;i<cart.length;i++){
    var object = cart[i]
    var objectname = object.itemName
    if (item === objectname){
    cart.splice(i,1)
      
      }
      
        
    
    }
    return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var new_total = total()
  if (cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  cart.length = 0
    return `Your total cost is $${new_total}, which will be charged to the card ${cardNumber}.`
  
}
