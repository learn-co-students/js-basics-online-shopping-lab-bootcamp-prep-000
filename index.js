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

const ItemAndPrice = [] // creating empty array 'item&price' to store the 'item' & 'price' to be retrieved from below for body //

  for(let i = 0; i < cart.length; i++)
  { /// begin of for body
    let ItemPriceObj = cart[i] // getting ind. 'itmp-price obj. pair' from 'cart'(array of multiple itemp-price obj. pairs) //
    let item = Object.keys(ItemPriceObj)[0] // getting 'item(key)' sepratly from the above retrieved 'item-price' 'obj. pair' //
    let price = ItemPriceObj[item] // getting 'price(value)' sepratly from the above retrieved 'item-price' 'obj. pair' //

    inp.push (`${item} at \$${price}`) // clubbing above retrieved 'item' & 'price' & storing them into empty array 'inp' //
  } // end of for body

  console.log(`In your cart you have ${ItemAndPrice}.`)
}
