var cart= [];

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
  var price = Math.floor((Math.random() * 100 ) + 1);
  var cart2 = {};
  cart2[item] = price;
  cart.push(cart2);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var sent = 'In your cart, you have';
  for(var item in cart)
  {
    var curItem = Object.keys(cart[item]);
    if(item < (cart.length-1))
    {
      sent = sent + ` ${curItem} at $${cart[item][curItem]},`;
    }else{
      sent = sent +` ${curItem} at $${cart[item][curItem]}.`;
    }
  }

  if(cart.length ===0)
  {
    console.log("Your shopping cart is empty.");
  }
  console.log(sent)
}

function removeFromCart(item2){
  console.log(cart)

  for(var item in cart)
    {
      if(cart[item][item2] !== undefined)
      {
         console.log("found "+ cart[item][item2]);
         delete cart[item][item2];
         cart.splice(item, 1);
         return cart
      }
    }
  console.log(`That item is not in your cart.`);
}

function placeOrder(card) {
  if(card === undefined)
  {
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = [];
  }
}
