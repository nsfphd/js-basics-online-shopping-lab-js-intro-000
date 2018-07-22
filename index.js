var cart = [];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=getRandomInt(100)+1
  var len=cart.length
  var obj=new Object()
  obj.itemName=item
  obj.itemPrice=price
  cart[len]=obj
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty."
  }
  else if( cart.length===1){
    var str=`${cart[0].itemName} at \$${cart[0].itemPrice}.`
    return `In your cart, you have ${str}`
  }
  else{
    var newArr= new Array()
    var str = ""
    for (var i = 0; i<cart.length; i++){
      if(i===cart.length-1){
        str=`and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    }
    else{
      str=` ${cart[i].itemName} at \$${cart[i].itemPrice}`
    }
    newArr[i]=str
    }
    return "In your cart, you have" +newArr
  }

}

function total() {
  var i = 0
  for (var l=0; l<cart.length; l++){
    i=i+cart[l].itemPrice
  }
  return i
}

function removeFromCart(item) {
  var val = ""
  for(var i=0; i<cart.length; i++){
    if(str==cart[i].itemName){
      val= "Item found"
    }
    else{
      val="Item not found"
    }
  }
    return val
}

function placeOrder(cardNumber) {
  // write your code here
}
