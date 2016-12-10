
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



//begin here

function getCart () {
  return cart;
}


function addToCart( item) {
  var price = Math.random()*100;
  price = Math.floor(price);
  var pair = {[item]:price};
  if (cart.length===0)
    cart[0]={[item]:price};
  else{
    cart.push(pair)
    }

  //  cart = [...cart, pair];
//  cart += [{price:item}]


  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart () {

 if (cart.length===0)
    console.log("Your shopping cart is empty.")

  else {
    var temp = "In your cart, you have "
    var arra =[];
    for (let i = 0; i<cart.length; i++) {
      for (var items in cart[i]) {
        //temp+= `${items} at $${cart[i][items]}`
        var it = items;
        var pr = cart[i][items];
        arra.push(it +` at $` + pr);
      //  temp  += `${it} at $${pr}`
      }


    } //end for
    temp+= arra.join(", ");
  //  temp += arra;
    temp +='.'
    console.log(temp);

  }
}//end function


function removeFromCart (item) {

  var inCart = false;

  for (var i =0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      inCart = true;
      cart.splice(i, 1);
    }
  }
  if (inCart===false)
    console.log("That item is not in your cart.");
}


function placeOrder(cardNumber) {

  var notNull = true;

//  console.log(notNull)
  if (typeof cardNumber==='undefined') { //} || typeof cardNumber ==='undefined') {
    console.log("We don\'t have a credit card on file for you to place your order.")
  //  notNull=false;
  }
  console.log(notNull)
  if (notNull===true) {
    var output= "Your total cost is $"
    output+= `${total()}`
    output+=`, which will be charged to the card ${cardNumber}.`
    cart = [];
    console.log(output)
  }


}
