
<script>
    let { children} = $props();
    import Footer from './footer.svelte';
    import Header from './(principal)/header.svelte';

</script>

<header>
    <Header/>
</header>

<main>
    {@render children()}
</main>

<footer id="footer" >
<Footer/>
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
background-color: #f0f6fe;    }

footer{
        background-color: #DEEAFB ;
    }

    header{
        position: sticky;
        top: 0;
        z-index: 10;
    }
</style>