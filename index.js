var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { itemName: item, itemPrice: Math.floor( Math.random() * 100 ) })
  return `${ item } has been added to your cart.`
}

function viewCart() {
  if( cart.length > 0 ) {
    let cartString = `In your cart, you have ${ cart[0].itemName } at $${ cart[0].itemPrice }`
    for (let i = 1; i < cart.length - 1; i++)
      cartString = `${ cartString }, ${ cart[i].itemName } at $${ cart[i].itemPrice }`

    if( cart.length > 1)
      return `${ cartString }, and ${ cart[cart.length - 1].itemName } at $${ cart[cart.length - 1].itemPrice }.`
      else
        return `${ cartString }.`

  }else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  let total = 0
  for( let i = 0; i < cart.length; i++ )
    total = total + cart[i].itemPrice
  return total
}

function removeFromCart(item) {
  let oldLength = cart.length
  for( let i = 0; i < cart.length; i++ ){
    if( item === cart[i].itemName )
      cart.splice( i, 1 )
  }
  if( oldLength != cart.length )
    return cart
  else
    return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if( cardNumber === undefined )
    return `Sorry, we don't have a credit card on file for you.`
  else{
    var returnTotal = total()
    cart = []
    return `Your total cost is $${returnTotal}, which will be charged to the card ${ cardNumber }.`
  }
}
