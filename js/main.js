$(document).ready(function(){


    if(window.location.href.indexOf('index')){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false
          });

                /* POST */
        let posts = [
            {
                title: 'Prueba de titulo1',
                date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore eaque dignissimos ipsam, explicabo ut tenetur mollitia recusandae libero nobis molestias, totam modi in et aliquam necessitatibus animi unde consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium atque quaerat reiciendis veniam, voluptatibus commodi obcaecati architecto, similique officiis, recusandae fuga perferendis ipsa veritatis mollitia error illum eaque illo!',
            },
            {
                title: 'Prueba de titulo2',
                date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore eaque dignissimos ipsam, explicabo ut tenetur mollitia recusandae libero nobis molestias, totam modi in et aliquam necessitatibus animi unde consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium atque quaerat reiciendis veniam, voluptatibus commodi obcaecati architecto, similique officiis, recusandae fuga perferendis ipsa veritatis mollitia error illum eaque illo!',
            },
            {
                title: 'Prueba de titulo3',
                date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore eaque dignissimos ipsam, explicabo ut tenetur mollitia recusandae libero nobis molestias, totam modi in et aliquam necessitatibus animi unde consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium atque quaerat reiciendis veniam, voluptatibus commodi obcaecati architecto, similique officiis, recusandae fuga perferendis ipsa veritatis mollitia error illum eaque illo!',
            },
            {
                title: 'Prueba de titulo4',
                date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore eaque dignissimos ipsam, explicabo ut tenetur mollitia recusandae libero nobis molestias, totam modi in et aliquam necessitatibus animi unde consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium atque quaerat reiciendis veniam, voluptatibus commodi obcaecati architecto, similique officiis, recusandae fuga perferendis ipsa veritatis mollitia error illum eaque illo!',
            },
            {
                title: 'Prueba de titulo5',
                date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore eaque dignissimos ipsam, explicabo ut tenetur mollitia recusandae libero nobis molestias, totam modi in et aliquam necessitatibus animi unde consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium atque quaerat reiciendis veniam, voluptatibus commodi obcaecati architecto, similique officiis, recusandae fuga perferendis ipsa veritatis mollitia error illum eaque illo!',
            },
            {
                title: 'Prueba de titulo6',
                date: 'Publicado el día ' + moment().format("DD") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore eaque dignissimos ipsam, explicabo ut tenetur mollitia recusandae libero nobis molestias, totam modi in et aliquam necessitatibus animi unde consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium atque quaerat reiciendis veniam, voluptatibus commodi obcaecati architecto, similique officiis, recusandae fuga perferendis ipsa veritatis mollitia error illum eaque illo!',
            }
        ];
        
        posts.forEach((item)=>{
            var post = `
                <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            $('#posts').append(post);

        })
    }
    /* Acordeon */
    if(window.location.href.indexOf('about')){
        $('#acordeon').accordion();
    };
    /* Reloj */
    if(window.location.href.indexOf('reloj')){
        setInterval(function(){
            let reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000)
    };

    if(window.location.href.indexOf('contact')){
        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es'
        });
    };

        /* Slider */

        /* Selector de themes */

    let theme = $('#theme');
      $('#to-green').click(function(){
        theme.attr("href", "css/green.css")
      });
      $('#to-blue').click(function(){
        theme.attr("href", "css/blue.css")
      });
      $('#to-red').click(function(){
        theme.attr("href", "css/red.css")
      });

      /* Scroll to up */
      $('.subir').click(function(e){
          e.preventDefault();
          $('html, body').animate({
              scrollTop: 0
          }, 500);
          return false;
      })


      /* Login false */
      $('#login form').submit(function(){
        var formName = $('#form_name').val();
        localStorage.setItem('formName', formName);
      });

      var formName = localStorage.getItem('formName');
      if(formName != null && formName != 'undefined'){
          let aboutParrafo = $('#about p');
          $('#about p').html('<br><strong>Bienvenido, ' + formName +'</strong>');
          aboutParrafo.append('<br><a href="#" id="logout">Cerrar Sesiòn</a>');
          $('#login').hide();

          $('#logout').click(function(){
              localStorage.clear();
              location.reload();
          });
      }
});