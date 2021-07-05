var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
 
   var price = Math.floor(Math.random() * 101); 
  var itemObj = {itemName:item,itemPrice:price}
  
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart(){
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  
  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
  if (cart.length>1){
   var x = []
    for (var i = 0; i<(cart.length - 1);i++){
    
    x.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have${x}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total (){
  var sum = 0
  for (var b = 0;b<cart.length;b++){
   sum =  sum + parseInt(cart[b].itemPrice)
  }
  return sum ;
}
  
function removeFromCart(item){
 
    for (var i = 0;i<cart.length;i++){
      if(cart[i].itemName === item){
        var newCart = cart.splice(i,1)
        return cart;
      }
    }
      return "That item is not in your cart."
}

function placeOrder(credit){
 
  if(credit) {
    var t = total()
    cart = []
    return `Your total cost is $${t}, which will be charged to the card ${credit}.`
    
  }
  else {return "Sorry, we don't have a credit card on file for you."}
}



