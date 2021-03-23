function moreDesc(){
  var x = document.getElementById("moreDesc");
  if(x.style.display == "none")
  x.style.display = "block";
  else{
    x.style.display = "none";
  }
}

function goBack(){
  window.history.back();
}

function increment(price){
  document.getElementById("quantity").stepUp();
  var x = parseFloat(document.getElementById("quantity").value * price);
  var res = "$" + x.toFixed(2);
  document.getElementById("total").innerHTML = res;
}

function addToCart(product){
  var x = parseFloat(document.getElementById("quantity").value);
  var total = document.getElementById("total").innerHTML;
  alert("Added " + x  + " " + product + " to the cart for a total of " + total );
}

function remove(){
  document.getElementById("quantity").value = "0";
  document.getElementById("total").innerHTML = "$0.00";
}

function decrement(price){
  document.getElementById("quantity").stepDown();
  var x = parseFloat(document.getElementById("quantity").value * price);
  var res = "$" + (x.toFixed(2));
  document.getElementById("total").innerHTML = res;
}

function checkForm(){
  var userName = document.getElementById("userName").value;
  var itemName = document.getElementById("itemName").value;
  var order = document.getElementById("orderNumber").value;
  var questions = document.getElementById("questions").value;
  var ok = order.search(/^#?\d{5}[A-Z_a-z]{2}$/);
  var result = "";
  var filledOut = true;
  if(userName ===""){
    result = "No username given. Please Try Again.";
    filledOut = false;
  }
  if(itemName ===""){
    result += "\nNo item name given. Please Try Again.";
    filledOut = false;
  }
  if(ok != 0){
    result += "\nOrder number invalid. Please Try Again.";
    filledOut = false;
  }
  if(questions ===""){
    result += "\nNo questions given. Please Try Again.";
    filledOut = false;
  }
  if(filledOut){
    alert("Form Submitted. Thank you for your cooperation.");
  }
  else
  alert(result);
}