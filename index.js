var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
    var newObject={}
    newObject={[item]:Math.floor(Math.random()*100)}
    cart.push(newObject)
    console.log(`${item} has been added to your cart.`)
    return cart
}
function viewCart() {
  var message=[]
  if(cart.length==0){
      message= "Your shopping cart is empty."
      console.log(message)
  }else{

      var message= []
      message=["In your cart, you have"]
      var info=[]
      var i=0;
      for(i=0;i<cart.length;i++){
          var itemName= Object.keys(cart[i])
          info.push( ` ${itemName} at $${cart[i][itemName]}`)
      }
      if (cart.length==2){
        info = (`${info[0]} and${info[1]}`)
      }
      if(cart.length>2){
      info.splice(-1, 1, (` and${info[info.length-1]}`))
    }
      message=`${message}${info}.`

  }
  console.log(message)

}

function total() {
  var finalSum=0
  var i=0
    for (i=0;i<cart.length;i++){
        finalSum=finalSum+cart[i][Object.keys(cart[i])]
    }
    return finalSum
}

function removeFromCart(item) {
  var i=0
  var myCart= "unchanged"
  for (i=0;i<cart.length;i++){
        if (item==Object.keys(cart[i])){
            cart.splice(i,1);
            var myCart="changed"

        }

    } if (myCart=="unchanged"){
      console.log("That item is not in your cart.")
    }
}

function placeOrder(cardNumber) {
  if (cardNumber==undefined){
    console.log( "Sorry, we don't have a credit card on file for you.")
  }
  if(cardNumber!= undefined){
   var boo = total()
     cart=[]
     var message=`Your total cost is $${boo}, which will be charged to the card ${cardNumber}.`
     console.log(message)

}
}
