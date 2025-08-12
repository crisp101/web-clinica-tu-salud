
<script>
    import Carrusel from './carrusel2svelte.svelte'
</script>

<Carrusel />

<div class="contenedor-bienvenida">
        <img src="/" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus nemo commodi molestiae dolor
            dicta odit, repellat quod quibusdam harum. Animi deserunt ipsam illum commodi laborum neque architecto,
            expedita ab.</p>
</div>

<section >
    <h2 class="titulo-servicios">nuestros servicios</h2>

    <div class="contenedor">
        <div class="servicio-odonto">
            <a class="s-odonto" href="/servicios/odontologia">odontologia</a>
        </div>
        <div class="servicio-kine">
            <a class="s-kine" href="/servicios/kinesiologia">kinesiologia</a>
        </div>
    </div>
</section>

<section >

    <h2>necesitas atenderte con nosotros?</h2>
<div class="contenedor">

    <div class="agendar-odonto">
        <a class="a-odonto" href="linkwsp">wsp1</a>
    </div>
    <div class="agendar-kine">
        <a href="linkwsp" class="a-kine">wsp2</a>
    </div>
</div>
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