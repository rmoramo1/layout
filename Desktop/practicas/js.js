function myFunction() {
    document.getElementById("demo").innerHTML = 5 + 6;
    window.alert(5 + 6);
 };

 function perro() {
 	var roy = "Esto lo hizo Roy"
    document.getElementById("name1").innerHTML = roy;
 };

  function am() {
 	var name = document.getElementById("m23").value.toUpperCase();  
 	var x = 'CAROLINA';
 	var lea = 'LEANDRO';
 	var amanda = 'AMANDA';
switch (name){
    case "CAROLINA":
    document.getElementById("amor").innerHTML = 'TE AMO';
    break;
    case "LEANDRO":
    document.getElementById("amor").innerHTML = 'TE AMO';
    break;
    case "AMANDA":
    document.getElementById("amor").innerHTML = 'TE AMO';
    break;
    default:
    document.getElementById("amor").innerHTML = 'QUIEN ES?';
}

};
        var lugar;
        var nombre;
        nombre=prompt("Tu nombre");
        lugar=prompt("Lugar donde vives?");
        document.write( "Hola"+" "+nombre + " "+ "vives en"+" "+ lugar+ "?");



        