//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;calcularPrecioConDescuento
}



//console.log({
//    precioOriginal,
 //   descuento,
 //   porcentajePrecioConDescuento,
  //  precioConDescuento,

//})

function clickButtonPrice(){
  const inputPrice=document.getElementById("input-price");
  const valuePrice1=inputPrice.value;

  const inputdescuento=document.getElementById("input-discount");
  const valuePrice2=inputdescuento.value;

  const precioDescuento = calcularPrecioConDescuento(valuePrice1,valuePrice2);

  const result = document.getElementById("Price-final");
  result.innerText = "El precio con descuento son : $" + precioDescuento;




}

