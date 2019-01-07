var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newObject={[item]: Math.floor(Math.random() * (100 - 1)+1)}
cart.push(newObject)
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  var arr=[]
  if (cart.length==0){
    console.log("Your shopping cart is empty.")
  }
  for (let i=0; i<cart.length; i++){
              var itemAndPrice  = cart[i];
                 var item = Object.keys(itemAndPrice)
                 var price = itemAndPrice[item]
                 arr.push(`${item} at $${price}`)
              }
  if(cart.length==1) { console.log(`In your cart, you have ${arr[0]}\.`)}
  else if (cart.length==2){console.log (`In your cart, you have ${arr[0]} and ${arr[1]}\.`)}
  else {
    arr[arr.length-1]=`and ${arr[arr.length-1]}`
        var itemsAndPrices = arr.join(', ')
          console.log(`In your cart, you have ${itemsAndPrices}\.`)
    }
  }





function total() {var totalP=0
  for (let i=0; i<cart.length; i++){
  var arr=cart[i]
    var item=Object.keys(arr)
    var price = arr[item]
    totalP+=price
  }
  return totalP
  }

function removeFromCart(item) {
    for (let i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
    cart.splice(i, 1)
    return cart
}
}
  console.log("That item is not in your cart.")
return cart
}

function placeOrder(cardNumber) {
if (cardNumber===undefined){console.log("Sorry, we don't have a credit card on file for you.")}
else { console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
cart=[]
}
