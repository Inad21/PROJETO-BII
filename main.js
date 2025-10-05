function mostrarResultado() {
  let num1, num2, num3,num4,num5;


     switch (document.getElementById("select1").value) {
    case "RS Instrution": num1 = "0011" ; break;
    case "MODBUSRTU": num1 = "100" ; break;
    case "SLAVE": num1= "0010" ;break;
    case "FX2N": num1= "0000" ;break;
    default: num1 = "";
  }

  switch (document.getElementById("select2").value) {
    case "BAUDRRATE38400": num2 = "0101"; break;
    case "BAUDRRATE19200": num2 = "1001"; break;
    case "BAUDRRATE9600": num2 = "1000"; break;
    case "BAUDRRATE4800": num2 = "0111"; break;
     case "BAUDRRATE2400":num2 = "0110"; break;
    case "BAUDRRATE1200": num2 = "0101"; break;
    case "BAUDRRATE600": num2 = "0100,"; break;
    case "BAUDRRATE300": num2 = "1100"; break;
    default: num2 = "";
  }

  
  switch (document.getElementById("select3").value) {
    case "1stop": num3 = 0; break;
    case "2stop": num3 = 1; break;
    default: num3 = "";
  }
   
  
    switch (document.getElementById("select4").value) {
    case "even": num4 = "11" ; break;
    case "odd": num4 = "01" ; break;
    case "none": num4= "00" ;break;
    default: num4 = "";
  }

     switch (document.getElementById("select5").value) {
    case "8bit": num5 = 1; break;
    case "7bit": num5 = 0; break;
    default: num5 = ""; 
  }

  

var num = num1.toString() +  "00000".toString() + num2.toString() + num3.toString()+ num4.toString() +  num5.toString();;
  var numBinario = parseInt(num, 2).toString(16).toUpperCase();

 document.getElementById("resultado").innerText = "H"+numBinario;


 }
