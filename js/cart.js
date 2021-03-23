function decrementCart(item, row, subtotal, itemRQ, itemRP, price){
    document.getElementById(item).stepDown();
    var x = parseFloat(document.getElementById(item).value * price);
    if(x == 0){
        var choice = confirm("Would you like to remove this item from the cart?");
        if(choice == true){
            document.getElementById(item).stepDown();
            removeFromCart(row);
        }
        else{
            document.getElementById(item).value = 1;
            x = parseFloat(document.getElementById(item).value * price);
        }
    }
    var res = "Subtotal:<br />$" + (x.toFixed(2));
    document.getElementById(subtotal).innerHTML = res;
    document.getElementById(itemRP).innerHTML = "$" + x.toFixed(2);
    document.getElementById(itemRQ).innerHTML = "(" + parseFloat(document.getElementById(item).value) + ")";
}
  
function incrementCart(item, subtotal, itemRQ, itemRP, price){
    document.getElementById(item).stepUp();
    var x = parseFloat(document.getElementById(item).value * price);
    var res = "Subtotal:<br />$" + (x.toFixed(2));
    document.getElementById(subtotal).innerHTML = res;
    document.getElementById(itemRP).innerHTML = "$" + x.toFixed(2);
    document.getElementById(itemRQ).innerHTML = "(" + parseFloat(document.getElementById(item).value) + ")";
}
  
function removeFromCart(row){
    var choice = confirm("Would you like to remove this item from the cart?");
    if(choice == true){
        var receipt = row + "R"
        removeFromReceipt(receipt);
        var row = document.getElementById(row);
        row.remove();
    }
}

function removeFromReceipt(item){
    var item = document.getElementById(item);
    item.remove();
}

function reload(){
    var orangeP = document.getElementById('orangeQty').value*1.49;
    var kiwiP = document.getElementById('kiwiQty').value*0.99;
    var broccoliP = document.getElementById('broccoliQty').value*3.49;
    var baconP = document.getElementById('baconQty').value*6.99;
    var scotchP = document.getElementById('scotchQty').value*69.42;
    var champagneP = document.getElementById('champagneQty').value*42.69;

    // var arr = [orangeP, kiwiP, broccoliP, baconP, scotchP, champagneP];
    // var subtotal = 0.0;
    // for (var i = 0; i < arr.length; i++){
    //     if (arr[i] != null && typeof(arr[i]) != 'undefined'){
    //         subtotal = subtotal + arr[i];
    //     }
    // }

    subtotal = orangeP+kiwiP+broccoliP+baconP+scotchP+champagneP;
    document.getElementById('subtotal').innerHTML = "$" + subtotal.toFixed(2);
    var gst = subtotal*0.05;
    document.getElementById('gst').innerHTML = "$" + gst.toFixed(2);
    var qst = subtotal*0.09975;
    document.getElementById('qst').innerHTML = "$" + qst.toFixed(2);
    var total = subtotal+gst+qst;
    document.getElementById('total').innerHTML = "$" + total.toFixed(2);

}

/*
All price related/Checkout JS:
--> + and - buttons change quantity and subtotal in row (change number in receipt, if changed to zero, ask if they want to remove)
--> remove button removes it (removes from receipt)
empty cart button if time permits
*/