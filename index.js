var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
    var price=Math.floor(Math.random() * 100) + 1;
    //console.log(price)
    let dict={"itemName":item, "itemPrice": price}
    cart.push(dict)
    //console.log(dict)
    return `${item} has been added to your cart.`
  
}


function viewCart() {
  var mainString="In your cart, you have"
  if (cart.length===0){
    return("Your shopping cart is empty.")
  }
  else if (cart.length===1){
    for (var i=0; i<cart.length; i++){
      var string= ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},` 
      mainString+=string
    }
  mainString=mainString.slice(0, mainString.length-1)
  return(mainString+=".")
  }
  else { 
    for (var i=0; i<cart.length; i++){
      if (i===cart.length-1){
        var string= ` and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},` 
        mainString+=string
      }
      else {var string= ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},` 
        mainString+=string    
        }
    }
  mainString=mainString.slice(0, mainString.length-1)
  return(mainString+=".")
  }
    
}
  
function total() {
  var total=0
    for (var i=0; i<cart.length; i++){
        var price= cart[i]["itemPrice"]
        total+=price
    }
return total
}


function removeFromCart(product) {
  var found=0
  for (var i=0; i<cart.length; i++){
    var dict=cart[i]
    //console.log(dict["itemName"]) 
    if (product===dict["itemName"]){
      cart.splice(i,1)
      found=1
      //return "item found"
    }
  }
  if (found===0){
  return "That item is not in your cart."}
  else{
    return cart
  }
}


function placeOrder(cardNumber) {
  if (cardNumber){
    var totalAmount=total()
    cart.splice(0,cart.length)
    return(`Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`)
  }
  else{
    return("Sorry, we don't have a credit card on file for you.")
  }
}
