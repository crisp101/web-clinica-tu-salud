
<script>
    let { children } = $props();
</script>

<header>
        <div class="header-principal">
            <div id="t-principal">
        <h2>clínica tu salud</h2>
    </div>
        <nav>
        <a href="/inicio">inicio</a>
        <a href="/contacto">contacto</a>
        </nav>
        </div>
</header>

<main>
    {@render children()}
</main>

<style>
    
    .header-principal{
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        
    }

    #t-principal{
        display: flex;
    }
    nav{
        display: flex;
        gap: 1rem;
    }


</style>