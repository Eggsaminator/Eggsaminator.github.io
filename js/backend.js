//Will verify all checked rows and delete them
function devareItem(){
    var checkboxes = document.getElementsByName("checkb");
    for(var i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].checked){
      checkboxes[i].parentNode.parentNode.remove();
      var checkboxes = document.getElementsByName("checkb");
      i--;
      }
    }
  }
function loadSrc(event){
    document.getElementsByClassName("pimage")[0].src = URL.createObjectURL(event.files[0]);
  }
//This function will transform an editable row to a concrete one
function addProductFinal(target1){
  var oldimage = document.getElementById("imgfile");
  var newcheckbox = document.createElement("input");
  newcheckbox.type = "checkbox";
  newcheckbox.name = "checkb";
  var rowtb = target1.parentElement.parentElement;
  var newimage = document.createElement("img");
  newimage.classList.add("pimage");
  newimage.src = URL.createObjectURL(oldimage.files[0]);
  rowtb.cells[1].appendChild(newimage);
  rowtb.cells[0].firstChild.remove();
  rowtb.cells[0].appendChild(newcheckbox);
  var newname = rowtb.cells[2].firstChild.value;
  rowtb.cells[2].firstChild.remove();
  rowtb.cells[2].innerHTML = newname;
  var newid = rowtb.cells[3].firstChild.value;
  rowtb.cells[3].firstChild.remove();
  rowtb.cells[3].innerHTML = newid;
  var newprice = rowtb.cells[4].firstChild.value;
  rowtb.cells[4].firstChild.remove();
  rowtb.cells[4].innerHTML = newprice;
  var newqty = rowtb.cells[5].firstChild.value;
  rowtb.cells[5].firstChild.remove();
  rowtb.cells[5].innerHTML = newqty;
  var neweditb = document.createElement("button");
  neweditb.type = "button";
  neweditb.innerHTML = "Edit";
  neweditb.classList.add("btn");
  neweditb.classList.add("btn-outline-dark");
  neweditb.classList.add("sbutton");
  rowtb.cells[6].firstChild.remove();
  rowtb.cells[6].appendChild(neweditb);
  neweditb.setAttribute( "onClick", "javascript: becomeEditable(this);" );
}
//Will make a row editable
function becomeEditable(targetf){
  var target = targetf.parentElement.parentElement;
  var inputimage = document.createElement("input");
  var savebutton = document.createElement("button");
  savebutton.classList.add("btn");
  savebutton.classList.add("btn-outline-dark");
  savebutton.classList.add("sbutton");
  savebutton.innerHTML = "Save";
  inputimage.type = "file";
  inputimage.id = "imgfile";
  var productname = document.createElement("input");
  productname.type = "text";
  if(target.cells[2].innerHTML == ""){
    productname.placeholder = "Name";
    }
  else{
      productname.value = target.cells[2].innerHTML;
    }
    productname.style.width = "75px";
    var productid = document.createElement("input")
    productid.type = "text";
  if(target.cells[3].innerHTML == ""){
      productid.placeholder = "ID";
    }
  else{
      productid.value = target.cells[3].innerHTML;
    }
    productid.style.width = "75px";
    var productprice = document.createElement("input")
    productprice.type = "text";
  if(target.cells[4].innerHTML == ""){
      productprice.placeholder = "Price";
    }
  else{
      productprice.value = target.cells[4].innerHTML;
    }
    productprice.style.width = "75px";
    var productqty = document.createElement("input")
    productqty.type = "text";
  if(target.cells[5].innerHTML == ""){
      productqty.placeholder = "Quantity";
    }
  else{
      productqty.value = target.cells[5].innerHTML;
    }
    productqty.style.width = "75px";
    target.cells[2].innerHTML = "";
    target.cells[3].innerHTML = "";
    target.cells[4].innerHTML = "";
    target.cells[5].innerHTML = "";
    target.cells[0].firstChild.remove();
    target.cells[1].firstChild.remove();
    target.cells[6].firstChild.remove();
    target.cells[0].appendChild(inputimage);
    target.cells[6].appendChild(savebutton);
    target.cells[2].appendChild(productname);
    target.cells[3].appendChild(productid);
    target.cells[4].appendChild(productprice);
    target.cells[5].appendChild(productqty);
    savebutton.onclick = function (){
      //Makes sure that all values inside the text fields and images are valid after saving the edited row
      if(document.getElementById('imgfile').files.length == 0){
        alert("Invalid Image");
      }
      else if(this.parentElement.parentElement.cells[2].firstChild.value.search(/[a-zA-z]+/)){
        alert("Invalid Product Name");
      }
      else if(this.parentElement.parentElement.cells[3].firstChild.value.search(/[0-9]+/)){
        alert("Invalid Product ID");
      }
      else if(this.parentElement.parentElement.cells[4].firstChild.value.search(/\${1}[0-9]+\.[0-9][0-9]/)){
        alert("Invalid Product Price");
      }
      else if(this.parentElement.parentElement.cells[5].firstChild.value.search(/[0-9]+/)){
        alert("Invalid Product Quantity");
      }
      else{
        addProductFinal(this);
      }
    }
  }
  //This function will initialize a template row and then use the becomeEditable() function on the row to allow adding products
  function addProduct(){
    var tablebody = document.getElementById("thebody");
    var newrow = document.createElement("tr");
    var checkboxcol = document.createElement("td");
    var imgcol = document.createElement("td");
    var productnamecol = document.createElement("td");
    var productidcol = document.createElement("td");
    var productpricecol = document.createElement("td");
    var productqtycol = document.createElement("td");
    var producteditcol = document.createElement("td");
    var buttoncol1 = document.createElement("button");
    var buttoncol2 = document.createElement("button");
    var buttoncol3 = document.createElement("button");
    tablebody.appendChild(newrow);
    newrow.appendChild(checkboxcol);
    newrow.appendChild(imgcol);
    newrow.appendChild(productnamecol);
    newrow.appendChild(productidcol);
    newrow.appendChild(productpricecol);
    newrow.appendChild(productqtycol);
    newrow.appendChild(producteditcol);
    checkboxcol.appendChild(buttoncol1);
    imgcol.appendChild(buttoncol2);
    producteditcol.appendChild(buttoncol3);
    for(var i = 0; i < 7; i++){
      newrow.childNodes[i].classList.add("ppitems");
    }
    becomeEditable(buttoncol1);
  }
  //Will make sure all inputs in the Add product page are valid and store those values
  function savePage(){
      if(document.getElementById('myFile').files.length == 0){
        alert("Invalid Image");
      }
      else if(document.getElementsByName("addeditpagetext")[0].value.search(/[a-zA-z]+/)){
        alert("Invalid Product Name");
      }
      else if(document.getElementsByName("addeditpagetext")[1].value.search(/[0-9]+/)){
        alert("Invalid Product ID");
      }
      else if(document.getElementsByName("addeditpagetext")[2].value.search(/\${1}[0-9]+\.[0-9][0-9]/)){
        alert("Invalid Product Price");
      }
      else if(document.getElementsByName("addeditpagetext")[3].value.search(/[0-9]+/)){
        alert("Invalid Product Quantity");
      }
      else{
        var productname = document.getElementsByName("addeditpagetext")[0].value;
        var productid = document.getElementsByName("addeditpagetext")[1].value;
        var productprice = document.getElementsByName("addeditpagetext")[2].value;
        var productqty = document.getElementsByName("addeditpagetext")[3].value;
        var imgsrc = URL.createObjectURL(document.getElementById('myFile').files[0]);
        localStorage.setItem("name", JSON.stringify(productname));
        localStorage.setItem("id", JSON.stringify(productid));
        localStorage.setItem("price", JSON.stringify(productprice));
        localStorage.setItem("qty", JSON.stringify(productqty));
        localStorage.setItem("src", JSON.stringify(imgsrc));
        window.location.href = "ProductPage.html";
      }
    }
    //Will add the desired product defined in add product page in the product list
    function addProductPagef(){
      var nowname = JSON.parse(localStorage.getItem("name"));
      var nowid = JSON.parse(localStorage.getItem("id"));
      var nowprice = JSON.parse(localStorage.getItem("price"));
      var nowqty = JSON.parse(localStorage.getItem("qty"));
      var isrc = JSON.parse(localStorage.getItem("src"));
      var tablebody = document.getElementById("thebody");
      var newrow = document.createElement("tr");
      var checkboxcol = document.createElement("td");
      var imgcol = document.createElement("td");
      var productnamecol = document.createElement("td");
      var productidcol = document.createElement("td");
      var productpricecol = document.createElement("td");
      var productqtycol = document.createElement("td");
      var producteditcol = document.createElement("td");
      var img = document.createElement("img");
      var editbutton = document.createElement("button");
      var checkboxe = document.createElement("input");
      checkboxe.type = "checkbox";
      checkboxe.name = "checkb";
      editbutton.innerHTML = "Edit";
      editbutton.classList.add("btn");
      editbutton.classList.add("btn-outline-dark");
      editbutton.classList.add("sbutton");
      editbutton.setAttribute("onClick", "javascript: becomeEditable(this);");
      checkboxcol.appendChild(checkboxe);
      imgcol.appendChild(img);
      productnamecol.innerHTML = nowname;
      productidcol.innerHTML = nowid;
      productpricecol.innerHTML = nowprice;
      productqtycol.innerHTML = nowqty;
      producteditcol.appendChild(editbutton);
      img.src = isrc;
      tablebody.appendChild(newrow);
      newrow.appendChild(checkboxcol);
      newrow.appendChild(imgcol);
      newrow.appendChild(productnamecol);
      newrow.appendChild(productidcol);
      newrow.appendChild(productpricecol);
      newrow.appendChild(productqtycol);
      newrow.appendChild(producteditcol);
      for(var i = 0; i < 7; i++){
        newrow.childNodes[i].classList.add("ppitems");
      }
    }
    //Will create a template user row and make it editable for adding users
    function addUser(){
      var usertable = document.getElementById("thebody");
      var row = document.createElement("tr");
      var usericon = document.createElement("td");
      var username = document.createElement("td");
      var useremail = document.createElement("td");
      var useredit = document.createElement("td");
      var userdelete = document.createElement("td");
      var editbutton = document.createElement("button");
      var deletebutton = document.createElement("button");
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-user-circle", "fa-3x");
      row.appendChild(usericon);
      row.appendChild(username);
      row.appendChild(useremail);
      row.appendChild(useredit);
      row.appendChild(userdelete);
      useredit.appendChild(editbutton);
      userdelete.appendChild(deletebutton);
      usertable.appendChild(row);
      usericon.appendChild(icon);
      userBecomeEditable(row);
    }
    //Will make a user row editable
    function userBecomeEditable(therow){
      var usernamefield = document.createElement("input");
      usernamefield.type = "text";
      usernamefield.style.width = "85px";
      var useremailfield = document.createElement("input");
      useremailfield.type = "text";
      useremailfield.style.width = "100px";
      var savebutton = document.createElement("button");
      savebutton.classList.add("btn");
      savebutton.classList.add("btn-outline-dark");
      savebutton.classList.add("sbutton");
      savebutton.innerHTML = "Save";
      savebutton.type = "button";
      if(therow.cells[1].innerHTML == ""){
        usernamefield.placeholder = "Username";
      }
      else{
        usernamefield.value = therow.cells[1].innerHTML;
        therow.cells[1].innerHTML = "";
      }
      if(therow.cells[2].innerHTML == ""){
        useremailfield.placeholder = "User Email";
      }
      else{
        useremailfield.value = therow.cells[2].innerHTML;
        therow.cells[2].innerHTML = "";
      }
      therow.cells[3].firstChild.remove();
      therow.cells[4].firstChild.remove();
      therow.cells[1].appendChild(usernamefield);
      therow.cells[2].appendChild(useremailfield);
      therow.cells[3].appendChild(savebutton);
      for(var i = 0; i < 5; i++){
        therow.cells[i].classList.add("ppitems1");
      }
      savebutton.setAttribute("onClick", "javascript: saveUserEdit(this.parentElement.parentElement);");
    }
    //This function will make sure the entries in the fields are valid for user page
    function saveUserEdit(therow){
      if(therow.cells[1].firstChild.value.search(/[a-zA-z]+/)){
        alert("Invalid Username");
      }
      else if(therow.cells[2].firstChild.value.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        alert("Invalid Email");
      }
      else {
        var editbutton = document.createElement("button");
        var deletebutton = document.createElement("button");
        editbutton.type = "button";
        editbutton.classList.add("btn");
        editbutton.classList.add("btn-outline-dark");
        editbutton.classList.add("sbutton");
        editbutton.innerHTML = "Edit";
        editbutton.setAttribute("onClick", "javascript: userBecomeEditable(this.parentElement.parentElement);")
        deletebutton.classList.add("btn");
        deletebutton.classList.add("btn-outline-dark");
        deletebutton.classList.add("sbutton");
        deletebutton.innerHTML = "Delete";
        deletebutton.type = "button";
        deletebutton.setAttribute("onClick", "javascript: deleteUser(this.parentElement.parentElement);")
        var username = therow.cells[1].firstChild.value;
        var email = therow.cells[2].firstChild.value;
        therow.cells[1].firstChild.remove();
        therow.cells[2].firstChild.remove();
        therow.cells[3].firstChild.remove();
        therow.cells[1].innerHTML = username;
        therow.cells[2].innerHTML = email;
        therow.cells[3].appendChild(editbutton);
        therow.cells[4].appendChild(deletebutton);
      }
    }
    //Will delete a user row
    function deleteUser(therow){
      therow.remove();
    }