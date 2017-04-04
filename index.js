var cart = [];

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

//-----***----- my code below here -----***-----//

function getCart(){
  return cart
}


var cartlen = cart.length

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  var inyourcart = `${item} has been added to your cart.`
  console.log(inyourcart)
  return cart
}

function viewCart(){
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  } else {
    var itemprice = [];

    for (let i=0; i < cart.length; i++){
        var itemnum = cart[i];
        var item = Object.keys(itemnum)[0];
        var price = itemnum[item];
        itemprice.push(item + " at $"+ price);
  }
  console.log(`In your cart, you have ${itemprice.join(", ")}.`);
}
}

function removeFromCart(item){
  var inCart = false
  for (let i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      inCart = true
    }
  }
  if (!inCart){
    console.log("That item is not in your cart.")
  } else {
    return cart
  }
}



function placeOrder(CCN){
  if (!CCN){
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${CCN}.`)
  }
  cart = []
}
