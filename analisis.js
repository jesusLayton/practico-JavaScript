const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;

    }
);

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaArimetrica(lista){
    // let  sumaLista = 0;
     //for(let i =0; i<lista.length;i++){
       //  sumaLista+=lista[i]
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
 
        }
    );
     
     const promedioLista = sumaLista/lista.length;
     return promedioLista;
 
 }

function medianaSalarios(lista){
    const mitad =parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 =lista[mitad - 1];
        const personaMitad2 =lista[mitad];

        const mediana = calcularMediaArimetrica([personaMitad1,personaMitad2]);
        return mediana;

    }else{
        const personaMitad =lista[mitad];
        return personaMitad;
    }
}



const apliceStart = (salarioColSorted.length*90)/100;
const spliceCount =salarioColSorted.length - apliceStart;
const salarioColTop10 = salarioColSorted.splice(
    apliceStart,
    spliceCount,
);

const medianaGeneral = medianaSalarios(salarioColSorted);

const mediana10 =  medianaSalarios(salarioColTop10);

console.log({
    medianaGeneral,
    mediana10,

});