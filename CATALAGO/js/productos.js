var item = `<div class="card col-md-3" style="width: 18rem;">
                      <img class="card-img-top" src="..." alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Cantidad: <span class="cantidad"></span></p>
                        <p class="card-text">Precio: <span class="precio"></span></p>
                        <a href="#" class="btn btn-dark">Go somewhere</a>
                      </div>
                    </div>`;

    var itemtabla =`<tr class="item-car"><td><img>Imagen</td>
                    <td class="nombre">Nombre</td>
                    <td class=""><span class="cantida">Cantidad</span></td>
                    <td class="">Precio</td>
                    <td>Acciones
                    </td>
                    <td class="">Subtotal</td></tr>`;
        var productos = [
                {
                nombre : "Cafe",
                cantidad : 5,
                precio : 33,
                imagen : "img/cafe.jpg",
                carrito1 : false,
                cantidadEnCarrito : 0
					
                },
                {
                nombre : "Cigarros",
                cantidad : 10,
                precio : 12,
                imagen : "img/cigarros.jpg",
                carrito1 : false,
                cantidadEnCarrito: 0
                },
			    {
                nombre : "Coca-Cola",
                cantidad : 10,
                precio : 12,
                imagen : "img/coca.jpg",
                carrito1 : false,
                cantidadEnCarrito: 0
                },
			    {
                nombre : "Gatorade",
                cantidad : 10,
                precio : 12,
                imagen : "img/gatorade.jpg",
                carrito1 : false,
                cantidadEnCarrito: 0
                },
			    {
                nombre : "Jabón",
                cantidad : 10,
                precio : 12,
                imagen : "img/jabons.jpg",
                carrito1 : false,
                cantidadEnCarrito: 0
                },
			    {
                nombre : "Jabón Liquido",
                cantidad : 10,
                precio : 12,
                imagen : "img/jabonl.jpg",
                carrito1 : false,
                cantidadEnCarrito: 0
                },
			    {
                nombre : "Palomitas",
                cantidad : 10,
                precio : 12,
                imagen : "img/palomitas.jpg",
                carrito1 : false,
                cantidadEnCarrito: 0,
                },
			    {
                nombre : "Papas",
                cantidad : 10,
                precio : 12,
                imagen : "img/papas.jpg",
                carrito1 : false,
                cantidadEnCarrito : 0
                }
			    ];
for(i=0; i < productos.length; i++){
            $("#productos").append(item);
            card = $(".card").get(i);
            $(card).find(".card-img-top").attr("src", productos[i].imagen);
            $(card).find(".card-title").html(productos[i].nombre);
            $(card).find(".cantidad").html(productos[i].cantidad);
            $(card).find(".precio").html(productos[i].precio);
            $(card).find(".btn").attr("onClick", "agregar("+i+")").html("Agregar");
        }
//aqui va el codigo
function agregar(id){
  alert(productos[id].nombre);
  alert("Cantidad "+productos[id].cantidad);
   if(productos[id].cantidad >0)
   {
     if(productos[id].carrito==true)
     {
       productos[id].cantidadEnCarrito=productos[id].cantidadEnCarrito+1;
       productos[id].cantidad= productos[id].cantidad-1;
       subtotal=productos[id].cantidadEnCarrito*productos[id].precio;
                 $("#pro"+id).find(".cantida").html(productos[id].cantidadEnCarrito)
                 $("#pro"+id).find(".subtotal .subtotal").html(subtotal);
                 card = $(".card").get(id);
                  $(card).find(".cantidad").html(productos[id].cantidad) //Actualizar stock
                  calculartotal();
     }else {
       alert("Incluir al su compra");
      productos[id].cantidad= productos[id].cantidad-1;
      card = $(".card").get(id);
                $(card).find(".cantidad").html(productos[id].cantidad)
      //alert("candidada Disponible "+ productos[id].cantidad);

      productos[id].cantidadEnCarrito=productos[id].cantidadEnCarrito+1;
      //alert("cantidad en carrito "+productos[id].cantidadCarrito);

      subtotal=productos[id].cantidadEnCarrito*productos[id].precio;
        itemtabla+='<tr id="pro'+id+'" class="item-car"><td><img width="50" height="50" src="'+productos[id].imagen+'"></td>'
                  +'<td class="nombre">'+productos[id].nombre+'</td>'
                  +'<td class="cantidad"><span class="cantida">'+productos[id].cantidadEnCarrito+'</span></td>'
                  +'<td class="precio">'+productos[id].precio+'</td>'
                  +'<td>'
                     + '<button onclick="mas('+id+')"  class="sumar-cantidad btn btn-outline-warning">+</button>'
                      +'<button onclick="menos('+id+')"  class="restar-cantidad btn btn-outline-danger">-</button>'
                  +'</td>'
                  +'<td class="subtotal"><span class="subtotal">'+subtotal+'</span></td></tr>'
                   $(".table").html(itemtabla);


                    calculartotal();

     }
   }
   else
   {
     alert("No hay "+ productos[id].nombre +" Disponible")
   }
productos[id].carrito=true;
 //alert("Carrito "+productos[id].carrito);
}

function calculartotal(){
   var subttotal=0;
   var iva=0;
   var total=0;

    $(".subtotal .subtotal").each(function(index){
      console.log(index+" : "+$( this ).text());
      var subt=parseInt($(this).text());

      subttotal=subttotal+subt;
    });
    iva=subttotal*0.16;
    total=subttotal+iva;
    $("#iva").html(iva);
  $("#total").html(total);
}


 function mas(id){
   if(productos[id].cantidad==0)
   {
     alert("No "+ productos[id].nombre +" Disponible");
   }else{
     productos[id].cantidadEnCarrito=productos[id].cantidadEnCarrito+1;
     productos[id].cantidad= productos[id].cantidad-1;
     subtotal=productos[id].cantidadEnCarrito*productos[id].precio;
               $("#pro"+id).find(".cantida").html(productos[id].cantidadEnCarrito)
               $("#pro"+id).find(".subtotal .subtotal").html(subtotal)

               card = $(".card").get(id);
                $(card).find(".cantidad").html(productos[id].cantidad) 

                calculartotal();
   }
 }
 function menos(id){
   if(productos[id].cantidadEnCarrito==0){
     $("#pro"+id).remove();
    calculartotal();
   }else {
     productos[id].cantidad= productos[id].cantidad+1;
     subtotal=productos[id].cantidadEnCarrito*productos[id].precio;
               $("#pro"+id).find(".cantida").html(productos[id].cantidadEnCarrito)
               $("#pro"+id).find(".subtotal .subtotal").html(subtotal)

               card = $(".card").get(id);
                $(card).find(".cantidad").html(productos[id].cantidad) 
               productos[id].cantidadEnCarrito=productos[id].cantidadEnCarrito-1;

               calculartotal();
   }
 }

      
				
				
				
                //Desabilitar el boton
                //alert("Deshabilitar boton");
            //}else{
                //Agregue a la tabla
              //  alert("Agregarlo al carrito");
                //$(".table").append(itemtabla);
                
                //Resta la cantidad en el producto
                //productos[idProducto].cantidad = productos[idProducto].cantidad -1;
                
                //Actualizar la cantidad en la interfaz
                //alert("Actualizar la cantidad en la interfaz");
                //card = $(".card").get(idProducto);
                //$(card).find(".cantidad").html(productos[idProducto].cantidad)
                
                //alert("Cantidad disponible: " + productos[idProducto].cantidad);
                
                //Agregar la cantidad en carrito
               // productos[idProducto].cantidadEnCarrito = productos[idProducto].cantidadEnCarrito +1;
                
                //Calcular el subtotal
                //subtotal = productos[idProducto].cantidadEnCarrito * productos[idProducto].precio;
                //alert("El subtotal es: " + subtotal);
                
                //Actualizar el subtotal del producto
                //productos[idProducto].subtotalCarrito = subtotal;
                
                //Calcular IVA implica calcular el subtotal * 0.16
                //alert("Calcular el Iva ");
				//var iva= 0.16;
                //Iva= subtotal*iva;
				//alert("El Iva del producto es: "+ Iva)
				
				//Calcular el total de cada producto esto implica sumar el subtotal + el iva
				//totalproducto= Iva + subtotal;
				//alert("EL total a pagar de este producto es " + totalproducto);
				
				//Calcular el total a pagar implica sumar todos los totales de cada producto
				//totalpagar= totalproducto+i;
			//	alert("Calcular el total de la cuenta a pagar:");
				//alert("Su compra realizada en pesos es de :" +totalpagar);
				
				
				
				
				
        
      
            //}
			 
        //}

       