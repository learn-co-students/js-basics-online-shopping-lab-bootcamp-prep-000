var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.random();
 itemPrice*=100;
 itemPrice= Math.floor(itemPrice)+1;


 var itemobj = {[itemName]: itemPrice};
 cart.push(itemobj);
 console.log(`${itemName} has been added to your cart.`);

 return cart
}

function viewCart() {
  if(getCart().length === 0)
  {
    console.log("Your shopping cart is empty.")
    return cart
  }
  else{
    var news = `In your cart, you have `
    for(let i=0;i<getCart().length;i++)
    {
      var keyname = Object.keys(getCart()[i]);
      news+=`${keyname} at $${getCart()[i][keyname]}`

      if((getCart().length-i)===1)
      {
        news+=`.`
        console.log(news);
        return cart
      }
      else{
        if((getCart().length-i)===2)
        {
          if((getCart().length>2))
          {
            news+=`,`
          }
          news+=` and `
        }
        else{
          news+=`, `
        }
      }
    }
  }

}


function total() {
  var sum = 0;
  for(let i=0;i<getCart().length;i++)
  {
    sum+=getCart()[i][Object.keys(getCart()[i])];
  }
  return sum
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++)
  {
    if(cart[i].hasOwnProperty(item))
    {
      cart.splice(i,i);
      return cart;
    }
  }
  console.log('That item is not in your cart.')

}

function placeOrder(cardNumber) {
  if(cardNumber !== undefined)
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([]);
    return cart;
  }
  else{
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
  }
}
