
const body= document.getElementById('body')
const despliegue= document.getElementById('despliegue');
const carrito= document.getElementById('carrito');
const cerrar= document.getElementById('cerrar');
const agregar=document.getElementById('agregar');
console.log(agregar)




carrito.addEventListener('mouseover',()=>{
    despliegue.classList.remove('desaparecer');
    cerrar.addEventListener('click', ()=>{
        despliegue.classList.add('desaparecer');
        console.log('fun')
    
    }) 
})


//funcionalidads

const agregado= document.getElementById('agregado');
agregar.addEventListener('click', ()=>{
    const card= document.createElement('div');
    card.classList.add('card');
    const img= document.createElement('img');
    img.src= '/carrito/assets/img/curso1.jpg';
    img.classList.add('imagen_')
    const h1= document.createElement('h4');
    h1.textContent= "moto";
    const h2= document.createElement('h4');
    h2.textContent= '15k';
    const h3=document.createElement('h4');
    h3.textContent='1';

    card.appendChild(img);
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h3);
    console.log(card)
    agregado.appendChild(card)


});


const eliminar= document.getElementById('eliminar');
eliminar.addEventListener('click', ()=>{
    agregado.replaceChildren();
});















