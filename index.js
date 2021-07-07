var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random()*100)});
 console.log(`${item} has been added to your cart.`);
 return cart;
}


function viewCart() {
  let str = "In your cart, you have "
  if(cart.length > 0){
    for(let i = 0; i < cart.length; i++){
      let item = Object.keys(cart[i])[0];
      if(cart.length === 1){
        str +=  `${item} at $${cart[i][item]}.`
      }else if(i === cart.length - 1){
        str +=  `and ${item} at $${cart[i][item]}.`
      }else if(cart.length === 2){
        str += `${item} at $${cart[i][item]} `
      }else{
        str += `${item} at $${cart[i][item]}, `
      }
    }
  }else{
    str = `Your shopping cart is empty.`
  }
  console.log(str);
}

function total() {
  let total = 0;
  for(let item of cart){
    total += item[Object.keys(item)];
  }
  return total;
}

function removeFromCart(item) {
  let newCart = [];
  for(let product of cart){
      if(Object.keys(product)[0] !== item){
        newCart.push(product);
      }
    }
  if(newCart.length === cart.length){
    console.log(`That item is not in your cart.`);
  }else{
    console.log(newCart);
    cart = newCart;
  }
  return cart;
}


function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;
  }
}
