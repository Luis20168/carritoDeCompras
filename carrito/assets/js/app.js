
const body= document.getElementById('body')
const despliegue= document.getElementById('despliegue');
const carrito= document.getElementById('carrito');
const cerrar= document.getElementById('cerrar');
const agregar=document.getElementById('agregar');




carrito.addEventListener('mouseover',()=>{
    despliegue.classList.remove('desaparecer');
    cerrar.addEventListener('click', ()=>{
        despliegue.classList.add('desaparecer');
        console.log('fun')
    
    }) 
})


//funcionalidads

// const agregado= document.getElementById('agregado');
// agregar.addEventListener('click', ()=>{
//     const card= document.createElement('div');
//     card.classList.add('card');
//     const img= document.createElement('img');
//     img.src= '/carrito/assets/img/curso1.jpg';
//     img.classList.add('imagen_')
//     const h1= document.createElement('h4');
//     h1.textContent= "moto";
//     const h2= document.createElement('h4');
//     h2.textContent= '15k';
//     const h3=document.createElement('h4');
//     h3.textContent='1';

//     card.appendChild(img);
//     card.appendChild(h1);
//     card.appendChild(h2);
//     card.appendChild(h3);
//     console.log(card)
//     agregado.appendChild(card)


// });


// const eliminar= document.getElementById('eliminar');
// eliminar.addEventListener('click', ()=>{
//     agregado.replaceChildren();
// });


//g---------------------------

const contenidoProductos= document.getElementById('contenido-productos');

let allProducts=[];



contenidoProductos.addEventListener('click', (e)=>{
    // console.log(e.target.classList.contains('agregar'))

    if(e.target.classList.contains('agregar')){
        // console.log(e.target.parentElement); //con el parent element lo que se hace es llegar al div pafre de el parametro e botton
        const producto= e.target.parentElement;
        // console.log(producto.querySelector('h4').textContent ) //asi se saca la informacion de cada tarjeta
        // console.log(producto.querySelector('p').textContent)

        const infoProducto= {
            cantidad: 1,
            titulo: producto.querySelector('h4').textContent,
            descripcion: producto.querySelector('p').textContent,
            precio: producto.querySelector('h5').textContent  
        }


        allProducts=[...allProducts, infoProducto];
        console.log(allProducts)

    }

});

    















