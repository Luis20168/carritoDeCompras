const btnCarrito= document.getElementById("btn-carrito");
const carritoCompras= document.getElementById("carrito_compras");
const btncerrar= document.getElementById("btn_cerrar");

const agregado= document.getElementById("agregado");





btnCarrito.addEventListener('mouseover', ()=>{
    carritoCompras.classList.remove("desaparecer");
    btncerrar.addEventListener('click', ()=>{
        carritoCompras.classList.add("desaparecer");

    });
});

const contenidoProductos= document.getElementById("contenido-productos");

let allProductos=[];
const pagar= document.getElementById("pagar")
const contadorProductos=document.getElementById("contadorProductos");

contenidoProductos.addEventListener('click', (e)=>{
    if(e.target.classList.contains('agregar')){
        const producto= e.target.parentElement;      //lo que hace es llegar al padre del elemnto 
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
        <p>${producto.nombre}</p>
        <p>${producto.precio}</p>
        <p>${producto.cantidad}</p>`;


       
        let cantidad= producto.cantidad;
        let precio= producto.precio.slice(1);
        
        total_= total_+ cantidad*precio;
        

        totalUnico=  totalUnico+ producto.cantidad;
        agregado.append(contenedorProducto);

    })
    console.log(total_)


    pagar.textContent = total_
    contadorProductos.innerText= `${totalUnico}`;




}

