<script>
    let {Servicios} = $props();

    let estado = $state(0);
</script>




<h2 class="titulo-servicios">nuestros servicios</h2>

<div class="contenedor">


    <a data-sveltekit-preload-data= {estado ? "tap" : "hover"} class="link" href="/link">
        <div class="card">
           
            <h3>sobre <br> kinesiologia</h3>
          
            
        </div>
        </a>
<a data-sveltekit-preload-data= {estado ? "tap" : "hover"} class="link" href="/link">
<div class="card">
   
    <h3>sobre <br> kinesiologia</h3>
  
    
</div>
</a>
</div>




<style>

    .titulo-servicios{
        font-size: 2rem;
        text-align: center;
        padding: 2rem 0;
        color: #1d284e;
    }

    .contenedor{
        display: flex;
        margin: 0 auto;
        gap: 3rem;
        justify-content: center;
    }
    .link{
    text-decoration: none; /* Quita el subrayado del enlace */
    color: inherit; /* Hace que el texto herede su color normal, en lugar de ser azul */
    display: block; /* Asegura que el enlace ocupe todo el espacio del bloque */
    transition: transform 0.2s ease-in-out; /* Efecto sutil al pasar el mouse */

    }

    /* From Uiverse.io by SteveBloX */ 
.card {
  box-sizing: border-box;
  width: 300px;
  height: 254px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 0px 16px 6px -1px rgba(197, 220, 248, 1);
    backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: #1d284e;
}

.card:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

</style>