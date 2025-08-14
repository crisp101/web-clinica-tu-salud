<script>
        let { carrusel} = $props();
        import img1 from '../../imagenes/43f874c1.jpg';
        import img2 from '../../imagenes/saf3f3f.jpg';


        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;


        var manualnav = function(manual){
            slides.forEach((slide)=> {
                slides.forEach((slide) => {
                    slide.classList.remove('active');

                    btns.forEach((btn)=> {
                        btn.classList.remove('active');
                    });
                 });

                 slides[manual].classList.add('active');
                 btns[manual].classList.add('active');
            }
        
            btns.forEach((btn, i) => {
                btn.addEventListener("click", ()=> {
                    manualnav(i);
                    currentSlide = i;
                });
            })
        )
            
            };
        


</script>
https://wireframe.cc/c1JaUU
<div class="contenedor-slider">
	<div class="slide">
		<img src={img1} alt="" />
		<div class="texto">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime maiores harum beatae
				consequuntur dignissimos quibusdam nesciunt voluptate blanditiis repellendus quos possimus
				consectetur nulla accusantium odit veritatis eligendi rem, aperiam placeat.
			</p>
		</div>
	</div>

	<div class="slide">
		<img src={img2} alt="" />
		<div class="texto">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime maiores harum beatae
				consequuntur dignissimos quibusdam nesciunt voluptate blanditiis repellendus quos possimus
				consectetur nulla accusantium odit veritatis eligendi rem, aperiam placeat.
			</p>
		</div>
	</div>

	<div class="navigation">
		<div class="btn"></div>
		<div class="btn"></div>
	</div>
</div>

<style>
	.contenedor-slider {
		position: relative;
		width: 800px;
		height: 500px;
		margin: auto;
	}

	.contenedor-slider .slide {
		z-index: 1;
		position: absolute;
		width: 100%;
	}

	.contenedor-slider .slide img {
		z-index: 1;
		width: 100%;
		border-radius: 5px;
	}

	.contenedor-slider .slide .texto {
		position: absolute;
		padding: 15px 30px;
	}

	.contenedor-slider .slide .texto p {
		color: #fff;
		background: rgba(0, 0, 0, 0.1);
		font-size: 16px;
		width: 100%;
		padding: 3px;
	}

	.contenedor-slider .navigation {
		z-index: 2;
		position: absolute;
		display: flex;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
	}

	.contenedor-slider .navigation .btn {
		background: rgba(255, 255, 255, 0.5);
		width: 12px;
		height: 12px;
		margin: 10px;
		border-radius: 50%;
		cursor: pointer;
	}

	@media (max-width: 820px) {
		.contenedor-slider {
			width: 600px;
			height: 375px;
		}

		.contenedor-slider .slide .texto {
			padding: 10px 25px;
		}
		.contenedor-slider .navigation {
			bottom: 25px;
		}

		.contenedor-slider .slide .texto p {
			width: 70%;
			font-size: 15px;
		}

		.contenedor-slider .navigation {
			bottom: 25px;
		}

		.contenedor-slider .navigation .btn {
			width: 10px;
			height: 10px;
			margin: 8px;
		}
	}

	@media (max-width: 620px) {
		.contenedor-slider {
			width: 400px;
			height: 250px;
		}

		.contenedor-slider .slide .texto {
			padding: 10px 20px;
		}
		.contenedor-slider .navigation {
			bottom: 25px;
		}

		.contenedor-slider .slide .texto p {
			width: 80%;
			font-size: 13px;
		}

		.contenedor-slider .navigation {
			bottom: 15px;
		}

		.contenedor-slider .navigation .btn {
			width: 8px;
			height: 8px;
			margin: 6px;
		}
	}

	@media (max-width: 620px) {
		.contenedor-slider {
			width: 320px;
			height: 200px;
		}

		.contenedor-slider .slide .texto {
			padding: 5px 10px;
		}
		.contenedor-slider .navigation {
			bottom: 25px;
		}

		.contenedor-slider .slide .texto p {
			width: 90%;
			font-size: 11px;
		}

		.contenedor-slider .navigation {
			bottom: 10px;
		}
	}
</style>
