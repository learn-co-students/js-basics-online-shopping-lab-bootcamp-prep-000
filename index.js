 var cart;
 var cart=[];
 var cartObj;
 var cartObjName;
 var cartObjPrice;


function getCart() {
  return cart
 }
 function addToCart(item) {
   var  price=Math.floor(Math.random()*100);
    cart=[...cart,{ [item]: price}]
    console.log(`${item} has been added to your cart.`)
   return cart
 }


 var newarray=[];
 function viewCart() {
    if (cart.length === 0) { console.log('Your shopping cart is empty.')}
      for (var i = 0; i < cart.length; i++) {
        var cartObj=cart[i]
        var cartObjName=Object.keys(cartObj)
        var cartObjPrice=cartObj[cartObjName[0]]
        newarray=[...newarray,' '+cartObjName+' at $'+cartObjPrice]
 }
 console.log('In your cart, you have'+`${newarray}`+'.')
 }

 function removeFromCart(name) {
   for (var i = 0; i < cart.length; i++) {
    var cartObj=cart[i]
    var cartObjName=Object.keys(cartObj)
     if (name === `${cartObjName}`) {
       cart.splice(i,1)
       return cart
     }
 }
 console.log('That item is not in your cart.' )
 }

 function placeOrder(cardNumber) {

   if (cardNumber===undefined) {console.log("We don't have a credit card on file for you to place your order.") }
     console.log ('Your total cost is $'+`${total()}`+', which will be charged to the card '+`${cardNumber}`+'.')
     cart=[];
 }
