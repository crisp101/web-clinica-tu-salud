<script>
    let {Atencion} = $props();
    let estado = $state(0);

</script>




<h2>necesitas atenderte con nosotros?</h2>


<div class="contenedor">

    <div class="bloque" id="bloque1">

        <div class="div1">
        <h2>para agendar con dentista</h2>
    </div>
   

    <div class="div2">
<button class="button">
  <a data-sveltekit-preload-data= {estado ? "tap" : "hover"} class="link" href="/link">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
    <span class="lable">agendar</span>
  </a>
  </button>
</div>

</div>

<div class="bloque" id="bloque2">
    <div class="div4">    <h2>para agendar con Odontologo</h2>

    </div>
    
    <div class="div3">
<button class="button">
  <a data-sveltekit-preload-data= {estado ? "tap" : "hover"} class="link" href="/link">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
    <span class="lable">agendar</span>
  </a>
  </button>
</div>
 
</div>
 

</div>



  <style>
    a{
    text-decoration: none;
    color: inherit;
  }
  h2{
        font-size: 2rem;
        text-align: center;
        padding: 2rem 0;
        color: #1d284e;
    }

  .contenedor {
    margin: 0 auto;
    width: 670px;
height: 250px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
.div4 { grid-area: 1 / 2 / 2 / 3; }


  .bloque{
    padding: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    
  }

  .bloque h2{
    font-size: 1rem;
    text-align: center;
    padding-bottom: 2.5rem;
  }
  
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 9px 12px;
      margin: 0 auto;
      gap: 8px;
      height: 40px;
      width: 201px;
      border: none;
      background: #FF342B;
      border-radius: 20px;
      cursor: pointer;
    }
  
    .lable {
      line-height: 22px;
      font-size: 17px;
      color: #fff;
      font-family: sans-serif;
      letter-spacing: 1px;
      
    }
  
    .button:hover {
      background: #e52e26;
    }
  
    .button:hover .svg-icon {
      animation: slope 1s linear infinite;
    }
  
    @keyframes slope {
      0% {
      }
  
      50% {
        transform: rotate(10deg);
      }
  
      100% {
      }
    }

    #bloque1{
        box-shadow: inset -4px 0px 3px -4px rgba(157, 199, 243, 0.72);  
          border-radius: 5px;
    }
    #bloque2{
        box-shadow: inset 4px 0px 3px -4px rgba(157, 199, 243, 0.72);
        border-radius: 5px;

    }
    
  </style>
  