//js-basics-online-shopping-lab-bootcamp-prep-000
var cart;

var setCart = (newCart) => {
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

var getCart = () => {return cart;}

var addToCart = (item) => {
    var price = Math.floor(Math.random(0,1) * 100);
    cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

var viewCart = () => {
    var string = "";
    if(cart.length === 0) {
      console.log('Your shopping cart is empty.');}
    else {
      for(let i = 0 ; i < cart.length ; i++)
      {
        for(var item in cart[i]) {
          string += `${item} at $`;
          string += cart[i][item];
          if(item === Object.keys(cart[cart.length-1])[0]) {
            string += ".";}
          else {
            string += ", ";}
        }
      }
      console.log(`In your cart, you have ${string}`);}
}

var removeFromCart = (item) => {
    var cartLength = cart.length;
    for(let i=0 ; i < cart.length ; i++ ) {
        if(Object.keys(cart[i])[0] === item){
            cart = [...cart.slice(0,i),...cart.slice(i,cart.length-1)];
        }
    }
    if(cartLength === cart.length) {
      console.log("That item is not in your cart.");
    }
}

var placeOrder = (cardNumber) => {
    cardNumber ? console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`) : console.log("We don't have a credit card on file for you to place your order.")
    cart = [];
}
