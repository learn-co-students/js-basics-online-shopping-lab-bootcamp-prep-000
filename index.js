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

function getCart()
{
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({item:price})

  console.log(`${item} has been added to your cart.`)

  return getCart()
}

function viewCart()
{

  if(!cart.length)
  {console.log("Your shopping cart is empty.")}

  else {
const ItemAndPrice = []

  for(let i = 0; i < cart.length; i++)
  {
    let ItemPriceObj = cart[i]
    let item = Object.keys(ItemPriceObj)[0]
    let price = ItemPriceObj[item]

    ItemAndPrice.push (`${item} at \$${price}`)
  }
    console.log(`In your cart you have ${ItemAndPrice}.`)
}
}
