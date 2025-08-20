<script>

    let estado = $state(0);
</script>




<h2 class="titulo-servicios">nuestros servicios</h2>

<div class="contenedor">

  <a data-sveltekit-preload-data= {estado ? "tap" : "hover"} class="link" href="/link">

<div class="card">
  <div class="card-details">
    <p class="text-title">Odontologia</p>
    <p class="text-body">atencion de calidad para el cuidado de tu sonrisa</p>
  </div>
  
  <button class="card-button">Mas informacion</button>
  
</div>
  </a>

<div class="card">
  <a data-sveltekit-preload-data= {estado ? "tap" : "hover"} class="link" href="/link">

  <div class="card-details">
    <p class="text-title">Kinesiologia</p>
    <p class="text-body">atencion de calidad para el cuidado de tu saludc</p>
  </div>
  
  <button class="card-button">Mas informacion</button>
 
</a>
</div>

</div>

<style>
  a{
    text-decoration: none;
    color: inherit;
  }
  h2{
        font-size: 2rem;
        text-align: center;
        padding: 2rem 0;
        color: #1d284e;
    }

  .contenedor{
    display: flex; /* ✅ Activa Flexbox. Esto pone los hijos en una fila. */
  justify-content: center; /* Centra horizontalmente el grupo de tarjetas. */
  align-items: center; /* Centra verticalmente las tarjetas (opcional, pero bueno). */
  gap: 3rem; /* Añade un espacio de 32px entre las tarjetas. Es la forma moderna de hacerlo. */
  padding: 2rem; /* Añade un poco de espacio alrededor de toda la sección. */

  }
  .card {
     display: grid;
   width: 190px;
   height: 254px;
   border-radius: 20px;
   background: #f5f5f5;
   position: relative;
   padding: 1.8rem;
   border: 2px solid #c3c6ce;
   transition: 0.5s ease-out;
   overflow: visible;
   cursor: pointer;
  }

  .card-details {
   color: black;
   height: 100%;
   gap: .5em;
   display: grid;
   place-content: center;
  }

  .card-button {
   transform: translate(-50%, 125%);
   width: 60%;
   border-radius: 1rem;
   border: none;
   background-color: #008bf8;
   color: #fff;
   font-size: 1rem;
   padding: .5rem 1rem;
   position: absolute;
   left: 50%;
   bottom: 0;
   opacity: 0;
   transition: 0.3s ease-out;
   cursor: pointer;
  }

  .text-body {
   color: rgb(134, 134, 134);
  }

  /*Text*/
  .text-title {
   font-size: 1.5em;
   font-weight: bold;
  }

  /*Hover*/
  .card:hover {
   border-color: #008bf8;
   box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
   transform: translate(-50%, 50%);
   opacity: 1;
  }
</style>



