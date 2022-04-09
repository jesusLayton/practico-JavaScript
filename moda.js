const lista1 = [
    1,
    1,
    25,
    2,
    1,
    3,
    6,
    4,
    85,
    1,
    1,
    2,
    2,
    1,
    1,
    1,
    2,
]
const listCount = {};

lista1.map(
    function(elemento){
        if(listCount[elemento]){
            listCount[elemento] += 1;

        }else{
            listCount[elemento] = 1;

        }
        

    }
);

const listaArray = Object.entries(listCount).sort(
    function(a,b){
        return a[1]-b[1];
        
    }
);

const moda = listaArray[listaArray.length -1];