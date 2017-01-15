var cart= new Array();

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
  return cart
}
function getPrice() {
  var price=Math.random()
  return Math.floor(price)
}

function addToCart(item)
{
  cart.push({[item]: getPrice()})
  console.log(`${item} has been added to your cart.`)
  return cart
}
function viewCart()
{

 if(cart.length == 0)
    console.log("Your shopping cart is empty.")
 else
  {
   var s=""
   s+="In your cart, you have "
   for (var i = 0,l=cart.length; i < l; i++)
     for (var item in cart[i])
       if(i==l-1)
        s+=`${item} at $${cart[i][item]}.`
       else
       s+=`${item} at $${cart[i][item]}, `
      console.log(s)
   }
}
function removeFromCart(itemN)
{
  cart.prop=0
  var index
  for (var i = 0,l=cart.length; i < l; i++)
    for (var item in cart[i])
      if(item == itemN){
       index=i
       cart.prop=1
      }
   if(cart.prop==1)
    cart.splice(index-1,1)
   else
    console.log("That item is not in your cart.")
}
const placeOrder= (creditCardNum)=> {if(creditCardNum === undefined)
console.log("We don't have a credit card on file for you to place your order.")
else
{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`)
  do{
    cart.pop()
  }while(cart.length!=0)
}}
