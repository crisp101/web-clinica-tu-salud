
<script>
    let { children} = $props();
</script>

<main>
    {@render children()}
</main>

<footer>
    <p>© 2025 Clínica Tu Salud. Todos los derechos reservados.</p>
</footer>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;

    }
    main{
        margin: 0 2rem;
    }
</style>