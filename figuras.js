//codigo del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado;
}


//console.log("El área del cuadrado: " +areaCuadrado  + "cm2");
console.groupEnd();
//codigo del tirangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//    "los lados del tiangulo miden: " 
//    + ladoTriangulo1 + "cm, " 
//    + ladoTriangulo2 + "cm, " 
//    + baseTriangulo + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("la altura del triangulo: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;

}
//console.log("El perimetro del triangulo: " + perimetroTriangulo + "cm");

//const areaTtiangulo = (baseTriangulo * alturaTriangulo)/2;
function areaTriangulo(base,altura){
    return (base*altura)/2

}
//console.log("El área del triangulo: " +areaTtiangulo  + "cm2");
console.groupEnd();

//codigo del circulo
console.group("Circulos");


//radio
//const radioCirculo = 4;
//console.log("los radio del circulo es: " + radioCirculo + "cm");


//diametro
function diametroCirculo(radio){
    return radio*2;
}



//pi
const PI = Math.PI;
console.log("PI es: " + PI);

//circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI

}

//area

function perimetroCirculo(radio){
    return (radio*radio)*PI

}





console.groupEnd();


//aca se interactua con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


