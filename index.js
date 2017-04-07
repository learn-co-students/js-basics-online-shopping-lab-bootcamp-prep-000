var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var addedItem = item
  var price = Math.floor(Math.random()*100)
  cart.push({addedItem : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function viewCart(){
  var currentItem, key, value
  var allItems = ""
  var messageArray=[]

    for (var ii=0;ii<cart.length;ii++){
      for (var currentCart in cart[ii]){
      messageArray.push(`${currentCart} at ${cart[ii]}`)
    }
      for (var jj = 0; ii < messageArray.length-1 ; jj++){
          allItems = allItems + messageArray[jj] + ", "
        }
        allItems = allItems + messageArray[messageArray.length-1] + "."
}
  if (cart.length===0){
    console.log('Your shopping cart is empty.');
  }
else{
    console.log(`In your cart, you have ${allItems}`)
  }
}
