var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

 function addToCart(item) {
  // write your code here
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 20)
  })

  return `${item} has been added to your cart.`
 }

 function total() {
   var sum = 0
   var cart = getCart()
   var cartLength = cart.length

   console.log('Sum = ' + sum)
   for (let i = 0; i < cartLength; i++) {
     console.log('Price: ' + cart[i].itemPrice)
     console.log('Sum before: ' + sum)
     sum += cart[i].itemPrice
     console.log('Sum after: ' + sum)
   }
   return sum
 }

setCart([]);
addToCart("sorghum");
addToCart("tarragon");

const sorghumCost = getCart()[0].itemPrice;
const tarragonCost = getCart()[1].itemPrice;

let totalCost = sorghumCost + tarragonCost;

console.log(total() === totalCost)
addToCart("urchin");
totalCost += getCart()[2].itemPrice;
var cost = total()

console.log(`${sorghumCost}`)
console.log(`${tarragonCost}`)
console.log(`${getCart()[2].itemPrice}`)
console.log(cost === totalCost)
console.log(`Total cost: ${totalCost}`)
console.log(`Total costMethod: ${cost}`)
