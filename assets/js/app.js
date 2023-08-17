const btnCarrito= document.getElementById("btn-carrito");
const carritoCompras= document.getElementById("carrito_compras");
const btncerrar= document.getElementById("btn_cerrar");

const agregado= document.getElementById("agregado");





btnCarrito.addEventListener('mouseover', ()=>{
    carritoCompras.classList.remove("desaparecer");

    

    cerrarCarro();
    
});

function cerrarCarro(){
    btncerrar.addEventListener('click', ()=>{
        carritoCompras.classList.add("desaparecer");

    });
}



const contenidoProductos= document.getElementById("contenido-productos");

let allProductos=[];
const pagar= document.getElementById("pagar")
const contadorProductos=document.getElementById("contadorProductos");

contenidoProductos.addEventListener('click', (e)=>{
    if(e.target.classList.contains('agregar')){
        const producto= e.target.parentElement;      //lo que hace es llegar al padre del elemnto 
        carritoCompras.classList.remove("desaparecer"); //aparecer el carrito
        cerrarCarro();
        const infoProducto={
            cantidad: 1,
            img: producto.querySelector('img').src,
            nombre: producto.querySelector('h4').textContent,
            precio: producto.querySelector('h5').textContent

            
            


        }


        const duplicado= allProductos.some(producto=> producto.nombre=== infoProducto.nombre)
        if(duplicado){
            const productos= allProductos.map(producto=>{
                if(producto.nombre== infoProducto.nombre){
                    producto.cantidad++;
                    return producto;

                }
                else{
                    return producto;
                }

                
            })                
            
            allProductos=[...allProductos];

        }else{
            allProductos= [...allProductos, infoProducto]

        }
        

        
        mostrar();
        
        

    }
 
    
})


agregado.addEventListener('click',(e)=>{

    if(e.target.classList.contains('eliminar')){
        const product= e.target.parentElement.parentElement;
        const title= product.querySelector('h5').textContent;
        
        allProductos= allProductos.filter(
            producto => producto.nombre !== title
            
        );

        console.log(allProductos);
        mostrar();
        

    }


})

const compra= document.querySelector('.compra');
compra.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-eliminar-todo')){
        console.log("se elimina")

    }


})








//mostrar

function mostrar(){
     //limpiar html
     
     let total_= 0;
     let totalUnico= 0;
     agregado.innerHTML='';

     

    allProductos.forEach(producto=>{
       
        let contenedorProducto= document.createElement('div');
        contenedorProducto.classList.add('producto');

        
        

        contenedorProducto.innerHTML=`
        <img src=${producto.img} width="100px" alt="">
        <h5 >${producto.nombre}</h5>
        <h6>${producto.precio}</h6>
        <p> <i class="fa-solid fa-minus"></i>    ${producto.cantidad}   <i class="fa-solid fa-plus"></i>  <i class="fa-solid fa-trash eliminar"></i> </p>  `  ;


       
        let cantidad= producto.cantidad;
        let precio= producto.precio.slice(1);
        
        total_= total_+ cantidad*precio;
        

        totalUnico=  totalUnico+ producto.cantidad;
        agregado.append(contenedorProducto);

    })
    

    


    pagar.textContent = total_
    contadorProductos.innerText= `${totalUnico}`;




}



 

