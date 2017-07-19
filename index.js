var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var price = Math.floor(Math.random() * 100);
   var cartObj = { [item]: price };
   cart.push(cartObj);
   console.log(`${item} has been added to your cart.`);
   return cart;
}
function viewCart(item) {

}

function total(item) {
  let totalCost = 0
   for (var i = 0; i>cart.length; i++)
    for (var item in cart [i])
    console.log `adds up the price of all items in the cart` ;
    let totalCost = sorghumCost + tarragonCost;
    return totalCost()
  }
    //it("adds up the price of all items in the cart", function() {
    //addToCart("sorghum");
      //addToCart("tarragon");
      //const sorghumCost = getCart()[0]["sorghum"];
      //const tarragonCost = getCart()[1]["tarragon"];
      //let totalCost = sorghumCost + tarragonCost;
      //expect(total()).toBe(totalCost);
      //addToCart("urchin");
      //const urchinCost = getCart()[2]["urchin"];
      //totalCost += urchinCost;
      //xpect(total()).toBe(totalCost);

function removeFromCart(item) {
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
  console.log("Sorry, we don't have a credit card on file for you.")
    }
  else {
    var totalPrice = total();
  console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
  return cart = []
    }
  }
