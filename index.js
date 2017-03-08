var cart=[];
var cartObj;
var cartObjName;
var cartObjPrice;


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
function getCart() {
  return cart
}
function addToCart(item) {
  var  price=Math.floor(Math.random()*100);
  cart=[...cart,{ [item]: price}]
console.log(`${item} has been added to your cart.`)
  return cart
}


var newarray=[];
function viewCart() {
    if (cart.length === 0) { console.log('Your shopping cart is empty.')} //checking if an array is empty
  for (var i = 0; i < cart.length; i++) { //iterating through cart
    var cartObj=cart[i] //getting each item name&price from an array
    var cartObjName=Object.keys(cartObj) //getting each item key(name)
    var cartObjPrice=cartObj[cartObjName[0]] //getting each item value(price)
    newarray=[...newarray,' '+cartObjName+' at $'+cartObjPrice]
  }
console.log('In your cart, you have'+`${newarray}`+'.')

}

function removeFromCart(name) {
  //iterating through cart to find match
  for (var i = 0; i < cart.length; i++) {
  //getting each item name&price from an array
    var cartObj=cart[i]
    //getting each item key(name)
    var cartObjName=Object.keys(cartObj)
    if (name === `${cartObjName}`) {
      //splice element from an array where i= determine element index from where to start the cut and 1 determine how many element to delete
      cart.splice(i,1)
      return cart
    }
}
console.log('That item is not in your cart.' )
}
function placeOrder(cardNumber) {
  //check if there is no cardnumber mean it's undefined return such string
  if (cardNumber===undefined) {console.log("We don't have a credit card on file for you to place your order.") }
    console.log ('Your total cost is $'+`${total()}`+', which will be charged to the card '+`${cardNumber}`+'.')
    cart=[];
}
