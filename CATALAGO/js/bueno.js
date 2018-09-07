producto = [
    {
        "nombre" : "aguacate",
        "cantidad" : 5,
         "precio": 33,
        "imagen" : "google.com",
        "estaenelcarrito" : false,
        "cantidadcarrito" : 0,
        "subtotalcarrito"  : 0
    },
    {
        "nombre" : "durazno",
        "cantidad" : 5,
         "precio": 33,
        "imagen" : "google.com",
        "estaenelcarrito" : false,
        "cantidadcarrito" : 0,
        "subtotalcarrito"  : 0
    }
];

ciclo for (elementos arreglos)
           productos[i].nombre
           productos[i].cantidad
           productos[i].precio
           productos[i].imagen
           
           
           
           
           
           
function botonpresionado(idproducto){

    if(productos[idproducto].cantidad==0){
        alert("ya no hay" +
             [productos[idproducto].nombre] + "disponible");
    }else{
        //agregue a la tabla
        alert("agregar al carrito");
        
        //resta la cantidad en el productos
        productos[idproducto].cantidad=
        productos[idproducto].cantidad-1;
        
        //actualizar la cantidad en la interfaz
        alert("Actualizar la cantidad en la interfaz");
        
        
        
        //total implica a todos los productos
        alert("calcular el total");
        for(subtotales){
            totaltotal = subtotal + totaltotal;
        }
    }
    
}