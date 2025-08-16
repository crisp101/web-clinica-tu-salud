
<script>
    import Banner from './banner.svelte';
    //import Carrusel from './carrusel3.svelte'
    import Servicios from './servicios.svelte';
    import Atencion from './atencion.svelte';
    import Feedback from './feedback.svelte';
</script>

<section class="banner">
    <Banner/>

</section>

<section class="servicios">
    <Servicios/>
</section>

<section class="atencion">
    <Atencion/>
</section>

<section id="feedback">
    <Feedback/>
</section>


<style>
    /*
    h2{
        text-align: center;
        font-size: 2rem;d   
        padding: 2rem 0;
    }*/
    .atencion{
        background: #DEEAFB;
background: linear-gradient(to top, #DEEAFB 70%, #F0F6FE 92%);
}
   



</style>