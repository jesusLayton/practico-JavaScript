const lista1=[
    100,
    200,
    
    500,
    400000000,
];

function par(numero){
    if(numero % 2 ===0){
        return true;

    }else{
        return false;

    }
}

let mediana;

const mitadLista1 = parseInt(lista1.length/2);

if(par(lista1.length)){
    const elemento1 = lista1[mitadLista1-1];;
    const elemento2 =  lista1[mitadLista1];;
    mediana =(elemento1+elemento2)/2
    
}else{
    mediana = lista1[mitadLista1];
}