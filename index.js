var cart = []

function getCart(){
  return cart
}


var cart = [];

function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


addToCart('glove')
addToCart('ball')
addToCart('skis')
addToCart('shoes')

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem)

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(printTwoItems)
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(printThreeOrMoreItems)
  }
}
viewCart(cart)


function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
  var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    }
  
  for (var j =0; j<pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j]+=totalPrice
  }
  return totalPrice
}
total(cart)

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    } 
  }
  console.log('That item is not in your cart.')
  return cart
}

removeFromCart('skis')
  
  
  
function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
  }

placeOrder()




/*function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart
}
function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function addToCart(item){
  
  var price=Math.ceil(Math.random()*100);
  cart.push({[item]:price});
  return `${item} has been added to your cart`;
}

function viewcart(){
  if(cart.length===0){
    console.log("Your cart is empty.");
  }
  
  var newArray=[];
  for(let i=0;i<cart.length;i++){
    var keys=Object.keys(cart[i])[0];
    newArray.push(keys+ "at $" +cart[i][keys]);
  }
  var mystring =" In your cart, you have,";
  if(cart.length===1){
  mystring += (newArray[0] + "and" + newarray[1] +".");
  }
  else if(newArray.length>2){
    var lastelement=newArray.pop();
    var other_item=newArray.join(",");
    mystring += (other_item + ", and" + lastelement + ".");
  }
  console.log(mystring);
}
function total(){
 
 var t;
  for(i=0;i<cart.length;i++){
    t+=Object.keys(cast[i]);
  }
 return t;
}
function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}

/*unction viewcart(){
   var tempCart=[];
   
   mystring= " In your cart, you have,";
     if(cart.length===0){ 
       return "Your shopping cart is empty.";
      }
     else if(cart.length===1){
       //tempCart=cart.push({[item]:price});
       tempCart.push(keys+"at $"+ cart[-------])
       return `${mystring} ${[item]} at $${price}. `;
         
     }
     else if(cart.length===2){
       tempCart=cart.push({[item]:price});
       return `${mystring}, ${item[0]} at $${price}.`;
       
     }
}

function removeFromCart(item){

  }

  // return "That item is not in your cart."
  

function placeOrder(cardNumber) {

}
*/