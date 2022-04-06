//codigo del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado){
    return lado * 4;
}



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

function areaCirculo(radio){
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
//trigulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value1 = parseIn(input1.value);
    const value2 = parseIn(input2.value);
    const value3 = parseIn(input3.value);
    

    const perimietro = perimetroTriangulo  (value1,value2,value3);
    alert(perimietro);
}

function calcularAreaTriangulo(){
    
    const input2 = document.getElementById("inputTriangulo3");
    const input3 = document.getElementById("inputTriangulo4");
  
    const value2 = input2.value;
    const value3 = input3.value;

    const area = areaTriangulo(value2,value3);
    alert(area);
}
//circulo
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputCirculo");
    
    const value1 = input1.value;


    const perimietro = perimetroCirculo(value1);
    alert(perimietro);
}

function calcularAreaCirculo(){
    
    const input1 = document.getElementById("inputCirculo");
  
    const value1 = input1.value;

    const area = areaCirculo(value1);
    alert(area);
}
//altura de triangulo isoseles

function calcularAlturaTriangulo(){
    
    const input1 = document.getElementById("inputTrianguloAltura1");
    const input2 = document.getElementById("inputTrianguloAltura2");
    const input3 = document.getElementById("inputTrianguloAltura2");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;



    if(value1 != value2){
        return alert('no es un triangulo isoseles');
    }else if(value1 == value2){
        const alturaTriangulo = Math.sqrt((value1*value2)-(value3*value3)/4);
        alert(alturaTriangulo);

    }
  
    

    
}


