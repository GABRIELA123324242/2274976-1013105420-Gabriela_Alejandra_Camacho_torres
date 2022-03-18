var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("red", 10, 300, 220, 10);
dibujarLinea("blue", 10, 200, 220, 30);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

