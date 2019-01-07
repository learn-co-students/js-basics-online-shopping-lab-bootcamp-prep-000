var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj=new Object()
  obj[item]=Math.floor((Math.random()*100 +1));
  cart.push(obj);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    console.log('Your shopping cart is empty.')
    return
  }

  var key=Object.keys(cart[0])[0]
  var itemtext=`${key} at $${cart[0][key]}`
  var carttext=`In your cart, you have ${itemtext}`
  carttext+= (cart.length===1 ? "." : (cart.length===2 ? " " : ", "))

  var i=1
  while(cart[i]){
    key=Object.keys(cart[i])[0]
    itemtext=`${key} at $${cart[i][key]}`
    if (i===cart.length-1){
      carttext+="and "
      itemtext+="."
    }else {
      itemtext += ", "
    }

    carttext+=itemtext;
    i++
  }

  console.log(carttext)
}

function total() {
  // write your code here
  var total=0, itemkey;
  for(var i=0; i< cart.length; i++){
    itemkey=Object.keys(cart[i])[0]
    total+=cart[i][itemkey]
  }

  return total
}

function removeFromCart(item) {
  // write your code here
  var itemkey;
  for(var i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
  }
}
