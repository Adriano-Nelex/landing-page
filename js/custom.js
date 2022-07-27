// Javascript -------------------------------
    debounce = function(func, wait, immediate){
        var timeout;
        return function(){
            var context = this, args = arguments;
            var later = function(){
                timeout = null;
                if(!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if(callNow) func.apply(context, args);
        };
    };

    
// ------------------------------------------

// Jquery -------------------------------
    jQuery(document).ready(function($) {
        var windowWidth = window.innerWidth;

        // Menu fixo
            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > 10) {
                    $("#menu-header").addClass("menu-fixo");
                } else {
                    $("#menu-header").removeClass("menu-fixo");
                }
                
            });
        //---------------------------------------
        
        // Ativar Menu quando estiver na sessão
            $('#menu a').click(function () {
                $('#menu a').removeClass("menuActive");
                $(this).addClass("menuActive");
            });
        //-------------------------------------

        // Scroll do menu rolando para a sessão.
            $(".scroll").click(function(event){        
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
            });
        //---------------------------------

        // Scrool Seta Banner
            jQuery(document).ready(function($)  {
                $('.btn').click(function(e) {
                    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
                });
            });
        // -----------------------------

        //Animação de Texto e Imagem 
            (function(){
                var $target = $('.E-subir'),
                    animationClass = 'E-subir-start',
                    offset = $(window).height() * 4/4;
                function animeScroll(){
                    var documentTop = $(document).scrollTop();
                    
                    $target.each(function(){
                        var itemTop = $(this).offset().top;
                        if(documentTop > itemTop - offset){
                            $(this).addClass(animationClass);
                        }
                    });
                }

                animeScroll();

                $(document).scroll(debounce(function(){
                    animeScroll();
                }, 50));
            }());

            (function(){
                var $target = $('.E-descer'),
                    animationClass = 'E-descer-start',
                    offset = $(window).height() * 4/4;
                function animeScroll(){
                    var documentTop = $(document).scrollTop();
                    
                    $target.each(function(){
                        var itemTop = $(this).offset().top;
                        if(documentTop > itemTop - offset){
                            $(this).addClass(animationClass);
                        }
                    });
                }

                animeScroll();

                $(document).scroll(debounce(function(){
                    animeScroll();
                }, 50));
            }());

            (function(){
                var $target = $('.E-direita'),
                    animationClass = 'E-direita-start',
                    offset = $(window).height() * 4/4;
                function animeScroll(){
                    var documentTop = $(document).scrollTop();
                    
                    $target.each(function(){
                        var itemTop = $(this).offset().top;
                        if(documentTop > itemTop - offset){
                            $(this).addClass(animationClass);
                        }
                    });
                }

                animeScroll();

                $(document).scroll(debounce(function(){
                    animeScroll();
                }, 50));
            }());

            (function(){
                var $target = $('.E-esquerda'),
                    animationClass = 'E-esquerda-start',
                    offset = $(window).height() * 4/4;
                function animeScroll(){
                    var documentTop = $(document).scrollTop();
                    
                    $target.each(function(){
                        var itemTop = $(this).offset().top;
                        if(documentTop > itemTop - offset){
                            $(this).addClass(animationClass);
                        }
                    });
                }

                animeScroll();

                $(document).scroll(debounce(function(){
                    animeScroll();
                }, 50));
            }());

            (function(){
                var $target = $('.E-fadein'),
                    animationClass = 'E-fadein-start',
                    offset = $(window).height() * 4/4;
                function animeScroll(){
                    var documentTop = $(document).scrollTop();
                    
                    $target.each(function(){
                        var itemTop = $(this).offset().top;
                        if(documentTop > itemTop - offset){
                            $(this).addClass(animationClass);
                        }
                    });
                }

                animeScroll();

                $(document).scroll(debounce(function(){
                    animeScroll();
                }, 50));
            }());
        //-----------------------

        // Contador de numeros
            const tempo_intervalo = 5; //ms -> define a velocidade da animação
            const tempo = 3000; //ms -> define o tempo total da animaçao

            $('.counter-up').each(function() {			 
                let count_to = parseInt($(this).data('countTo'));
                let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
                let incremento = count_to / intervalos; //quanto cada contador deve aumentar
                let valor = 0;
                let el = $(this);
                
                let timer = setInterval(function() {
                    if (valor >= count_to){ //se já contou tudo tem de parar o timer
                        valor = count_to;
                        clearInterval(timer);
                    }		    
                    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1");
                    el.text(texto);
                    valor += incremento;      
                }, tempo_intervalo);
            });
        // ----------------------------
    });
// --------------------------------------