
<script>
    import Carrusel from './carrusel3.svelte'
    import Servicios from './servicios.svelte';
    import Atencion from './atencion.svelte';
</script>

<Carrusel />

<div class="contenedor-bienvenida">
        <img src="/" alt="">
        <p></p>
</div>

<section >
    <Servicios/>
</section>

<section >
    <Atencion/>
</section>

<section >

    <div class="contenedor">
    <div class="ubicacion">
        <h4>ubicacion</h4>
    </div>
    <div class="horario">
        <h4>horario de atencion</h4>
    </div>
    <div class="telefono">
        <h4>telefono de contacto</h4>
    </div>
    </div>
</section>

<style>
    
    h2{
        text-align: center;
        font-size: 2rem;
        padding: 2rem 0;
    }
    .contenedor{
        display: flex;
    }




</style>