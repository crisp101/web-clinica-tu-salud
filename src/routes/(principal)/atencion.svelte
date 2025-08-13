<script>
    let {Atencion} = $props();
</script>




<h2>necesitas atenderte con nosotros?</h2>
<div class="contenedor">

    <div class="agendar">
        <a class="a-odonto" href="linkwsp">wsp1</a>
    </div>
    <div class="agendar">
        <a href="" class="a-kine">wsp2</a>
    </div> 
</div>


<style>
    h2{
        font-size: 2rem;
        text-align: center;
        padding: 2rem 0;
        color: #1d284e;
    }

    .contenedor{

        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: stretch;
    }
    
    .agendar{

        width: 300px;
        height: 300px;
        margin: auto 2rem ;
        padding: 0;
        display: flex;
        justify-content: center;
        border-radius: 5px; 
border: 2px solid #376bd9;
    }


</style>