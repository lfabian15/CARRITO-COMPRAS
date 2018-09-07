 var productos = [
	 
{
	
	nombre : "coca-cola",
	imagen : "coca.jpg",
	cantidad : 5,
	precio : 15,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
	
	
	
    
	
},

{
	nombre : "papas",
	imagen : "papas.jpg",
	cantidad : 10,
	precio : 30,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
	
},
	
{
	nombre : "palomitas",
	imagen : "palomitas.jpg",
	cantidad : 15,
	precio : 20,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
	
},
	
{
	nombre : "sopa",
	imagen : "sopa.jpg",
	cantidad : 25,
	precio : 40,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
	
},
	
{
	nombre : "cafe",
	imagen : "cafe.jpg",
	cantidad : 10,
	precio : 25,
	estaenelcarrito : false,
	"masproductos" :0,
	"iva" : 0.16
	
	
},
	
{
	nombre : "pasta-dental",
	imagen : "pasta.jpg",
	cantidad : 15,
	precio : 15,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
},
	
{
	nombre : "jabon-liquido",
	imagen : "jabonl.jpg",
	cantidad : 10,
	precio : 18,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
},
	
{
	nombre : "jabon-solido",
	imagen : "jabons.jpg",
	cantidad : 14,
	precio : 21,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
},
	
{
	nombre : "cigarros",
	imagen : "cigarros.jpg",
	cantidad : 17,
	precio : 12,
	estaenelcarrito : false,
	masproductos :0,
	iva : 0.16
	
	
},
	
{
	nombre : "Bebida-rehidratante",
	imagen : "gatorade.jpg",
	cantidad : 11,
	precio : 25,
	estaenelcarrito : false,
	masproductos :0,
	subtotal : 0,
	iva : 0.16
	
}
]; 




function pedir (pr)  {
alert("Producto-:" +productos[pr].nombre);
	productos[pr].masproductos = productos[pr].masproductos+1;
	
	
subtotal = productos[pr].masproductos * productos[pr].precio;
iva = subtotal * productos[pr].iva;
productos[pr].total = subtotal+iva;	

	
 document.getElementById("ta1").append = +1 '<tbody><td>'+productos[pr].imagen+'</td><td>'+productos[pr].nombre+'</td><td>'+ productos[pr].masproductos+'</td><td>'+productos[pr].precio+ '</td> <td>'+subtotal+ '</td> <td>'+iva+ '</td><td>'+productos[pr].total+ '</td></tbody>';
};






	