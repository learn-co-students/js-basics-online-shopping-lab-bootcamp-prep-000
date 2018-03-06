var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var itemName = item
  cart.push(Object.assign({}, {[itemName]:itemPrice}))
  console.log(`${itemName} has been added to your cart.`)
  return cart

}

function viewCart() {
  var contents= "In your cart, you have "
  if (!cart.length) {
        console.log("Your shopping cart is empty.")
      } else{
        for(let i=0;i<cart.length;i++){
          let item = `${Object.keys(cart[i])} at $${Object.values(cart[i])}`
          if (i==0){
            contents += `${item}`
          } else if (i==cart.length -1){
            if(cart.length==2){
              contents += ` and ${item}`
            } else  {
            contents += `, and ${item}`
          }
        } else{
            contents += `, ${item}`
        }
      }
    console.log(`${contents}.`)

  }
}

function total() {
  var total=0
  for(let i=0;i<cart.length;i++){
    total += parseInt(Object.values(cart[i]))
  }
  return total
}

function removeFromCart(item) {
    var bool = false
    for(let i=0;i<cart.length;i++){
      if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      bool = true
    }
  }
  if(!bool){
    console.log("That item is not in your cart.")
  }
  return cart
}
function placeOrder(cardNumber) {
if (!arguments.length) {
  console.log("Sorry, we don't have a credit card on file for you.")
}else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart= []
}

}
