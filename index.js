var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}


function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function removeFromCart(item){
  var removed = false;
  for(let i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i);
      removed = true;
    }
  }
  if(removed === true){
    return cart;
  }else{
    console.log("That item is not in your cart.");
  }
}

function viewCart(){
  var string = "In your cart, you have "

  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }else{
    for(let i=0; i<cart.length; i++){
      for(var item in cart[i]){
        string = string + item + " at $" + cart[i][item] + ", ";
      }
    }
  }

  console.log(string.substring(0,string.length-2) + ".");
}

function total() {
  let t = 0;

  for (let i=0; i<cart.length; i++) {
    for(var item in cart[i]){
      t = t + cart[i][item];
    }
  }

  return t;
}

function placeOrder(creditCard){
  if(creditCard == null){
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
