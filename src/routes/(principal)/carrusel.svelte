<script>

    let { carrusel} = $props();
 

    let indiceActivo = $state(0);

    const diapositivas = [
    {
    img: '/clinicaTuSalud-web/static/imagenes/43f874c1.jpg',
    texto: 'ofrecemenos un servicio de calidad donde recibiras la mejor atencion para el cuidado de tu dentadura' 
    },
    {
    img: '/clinicaTuSalud-web/static/imagenes/saf3f3f.jpg',
    texto: 'tendras la mejor atencion para el cuidado de tu cuerpp'
    }

    ];

    function siguiente(){
        indiceActivo = (indiceActivo + 1) % diapositivas.length;
    }

    function anterior(){
        indiceActivo = (indiceActivo - 1) % diapositivas.length;
    }
</script>

<div class="carrusel">
    <div class="diapositivas-contenedor">
        {#each diapositivas as diapositiva, indice}
            <div class="diapositiva" class:activa={indice === indiceActivo}>
                <img src={diapositiva.img} alt= />
                <div class="texto-superpuesto">
                    <p>{diapositiva.texto}</p>
                </div>
            </div>
        {/each}
    </div>

    <button class="btn-carrusel prev" onclick={irAAnterior}>&#10094;</button>
    <button class="btn-carrusel next" onclick={irASiguiente}>&#10095;</button>
</div>

<style>
    .carrusel {
        padding: 30px;
        border: 1px solid #ccc;
        background: #fff;
        z-index: 1;
        position: relative;
        max-width: 800px; /* Ancho máximo del carrusel */
        margin: 2rem auto; /* Centrar el carrusel en la página */
        overflow: hidden; /* Esconde cualquier cosa que se salga */
        border-radius: 4px;
    }

    .diapositivas-contenedor {
        position: relative;
        width: 100%;
        /* La altura se basará en la proporción de la imagen */
        aspect-ratio: 16 / 9;
    }

    .diapositiva {
        position: absolute;
        inset: 0; /* Ocupa todo el espacio del contenedor (top:0, left:0, right:0, bottom:0) */
        opacity: 0; /* Oculta todas las diapositivas por defecto */
        transition: opacity 0.5s ease-in-out; /* Animación suave de fundido */
    }

    .diapositiva.activa {
        opacity: 1; /* Muestra solo la diapositiva activa */
    }

    .diapositiva img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Hace que la imagen cubra el espacio sin deformarse */
    }

    .texto-superpuesto {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 4rem 1rem 1rem;
        text-align: justify;
        
    }
    
    .texto-superpuesto p {
        margin: 0;
        font-size: 15px;
    }

    .btn-carrusel {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: rgb(255, 255, 255);
        border: none;
        padding: 0.75rem;
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 1;
        transition: background-color 0.s;
    }

    .btn-carrusel:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .prev {
        left: 10px;
        border-radius: 50% 0 0 50%;
    }

    .next {
        right: 10px;
        border-radius: 0 50% 50% 0;
    }
</style>