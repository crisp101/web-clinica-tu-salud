
<script>
        let estado = $state(0);

</script>

<div class="header-principal">
    <div id="t-principal">
<h2>Clínica tu salud</h2>
</div>
<nav>


<button>
<a href="/">
<span>inicio</span>
</a>
</button>

<button>
<a href="#footer">
    <span>contacto</span>
</a>
</button>

<button id="agendar-btn">
    <a data-sveltekit-preload-data={estado?"tap":"hover"} href="#agendar">
        <span>agendar</span>
    </a>
    </button>


</nav>
</div>




<style>
    
    .header-principal{
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        background-color: white;
        padding-right: 2rem;
        border-bottom: 1px solid black;
        border-radius: 5px;
    }

    #t-principal{
        padding-left: 2rem;
    }
    nav{
        align-items: center;
        display: flex;
        gap: 5px;
    }
    nav a{
        text-decoration: none;
        color: black;
        padding: 0 10px;
        font-size: 1em;
    }

    button{
        width: 80px;
        height: 30px;
        border-radius:15px;
        border: none;
        background: #9dc7f3;
        cursor: pointer;
        text-align: center;
        transition: 0.3s;
        

    }


    button:hover{
        background: rgb(0, 153, 255);
        box-shadow: 0 0 0 5px #3b83f65f

    }

    button:hover span{
        color: white;
    }

    #agendar-btn{
        background: #ff7e77;
      
    }
    #agendar-btn span{
        color: rgb(255, 255, 255);
    }
    #agendar-btn:hover{
        background:#ff483f ;
        box-shadow: 0 0 0 5px #ffbfbb

    }

</style>