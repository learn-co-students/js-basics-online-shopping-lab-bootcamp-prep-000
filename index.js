var cart;
var cart=[]
var x = 0
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
function getCart(){
    return cart;
}
function addToCart(item){
    //generate random price.
    var cost = Math.floor(Math.random()*10);

    cart.push({[item]: cost});
    console.log(`${item} has been added to your cart.`)
    return cart;
}
function viewCart(){
    if(cart.length==0){
        console.log('Your shopping cart is empty.')}

        else {
          var itemsWithPrices = []
          for (let i = 0; i < cart.length; i++) {
              for (let key in cart[i]) {
                   itemsWithPrices.push(`${key} at $${cart[i][key]}`);

        }
            }
            console.log(`In your cart, you have ${itemsWithPrices.join(', ')}.`)
}
}
function removeFromCart(item){
    let inCart= false
    for(var i=0; i<cart.length; i++){
        if(cart[i].hasOwnProperty(item)){
            cart.splice(i,1);
            inCart=true;
   }
    }
    if(inCart===false){
        console.log("That item is not in your cart.")
    }
}
function placeOrder(cardNumber){
        if(!cardNumber){
            console.log("We don't have a credit card on file for you to place your order.")
        }
            else{
                console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
            }

    setCart([]);
}
