   $(function(){
                
            var btn = $('.menuBtn');
            var closeBtn = $('.closeBtn');
            var menu = $('.phoneMenu');
            closeBtn.on('click', function(e){
                e.preventDefault();
                menu.toggle();
                });
            
            btn.on('click', function(e){
                e.preventDefault();
                menu.slideToggle();
                });
            });