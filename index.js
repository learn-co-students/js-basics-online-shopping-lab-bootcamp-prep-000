var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function price  () {return  Math.floor(Math.random() * 99 + 1  );}

function addToCart(item) {
 cart.push({ [item] : price() });
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  if (getCart().length == 0)
  console.log( "Your shopping cart is empty.");
  let s = "";
  let length = getCart().length;

  getCart().forEach( (item,i) => {
    let product = Object.keys(item)[0];
    let value = item[product];
    if (i == 0)
        s += `you have ${product} at $${value}`;
    else if (length==2)
      s += ` and ${product} at $${value}`
    else if (i !=length -1)
      s += `, ${product} at $${value}`;
    else s+= `, and ${product} at $${value}`
  })
  console.log( `In your cart, ${s}.`);
  }

function total() {
  return getCart().reduce( (acc,item)=> {
    let key = Object.keys(item)[0]
    return acc + item[key]; },0 )
}

function removeFromCart(item) {

  let id =getCart().findIndex( elt => Object.keys(elt)[0] == item)
  if (id == -1)
    console.log("That item is not in your cart.")
  else
      cart.splice(id,1);
  return cart ;

}

function placeOrder(cardNumber) {
  if (!cardNumber)
    console.log(`Sorry, we don't have a credit card on file for you.`);
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);

  }
}
