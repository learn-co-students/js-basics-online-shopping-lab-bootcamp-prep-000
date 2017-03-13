var cart = [];

//---------------------------------------------------
function setCart(newCart)
{
  cart = newCart;
}


//---------------------------------------------------
function total()
{
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


//---------------------------------------------------
var getCart = () =>
{
  return cart;
}

//---------------------------------------------------
var addToCart = (item) =>
{
  let price = Math.floor(Math.random() * (100 - 1) + 1);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

//---------------------------------------------------
var viewCart = () => {

  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
  }

  else{
        var cartContents = 'In your cart, you have';
          for (var i = 0; i<cart.length; i++){
            for (var eachItem in cart[i]){
            cartContents = cartContents + ` ${eachItem} at $${cart[i][eachItem]}`;
            if (i === cart.length - 1) {cartContents = cartContents +'.'; }
            else { cartContents = cartContents +',';}
            }
          }
      }

        console.log(cartContents);
      }


}
