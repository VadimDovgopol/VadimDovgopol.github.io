//
//'use strict';
//
//$(function(){
//    function initializeMasonry(){
//        $container.imagesLoaded( function() {
//            $container.masonry({
//                columnWidth: function( containerWidth ) {
//                    return containerWidth / 3
//                }
//            });
//        });
//    }
//    function randomWord (min,max) {
//        var random = min - 0.5 + Math.random() * (max-min +1);
//        random = Math.round(random);
//        return random;
//    }
//    function searchPicture(text, quantity) {
//        if ((text.indexOf('.') !==-1) || (text.indexOf('\\') !==-1) || (text.indexOf('/') !==-1)|| (text.indexOf('!') !==-1) || (text.indexOf('?') !==-1)|| (text.indexOf('-') !==-1)|| (text.indexOf(':') !==-1)) {
//            $('.grid').append(message);
//            initializeMasonry();}
//        else{
//            $.ajax({
//                url:'http://pixabay.com/api/?key=2563157-05cd126e344fd2fa56a52a281&q='+text+'&per_page='+quantity,
//                dataType: 'jsonp'
//            }).done(function(data) {
//                if (data.hits.length) {
//                    var pictureSection = $('#pictureLayout').html();
//                    var content = _.template(pictureSection)(data);
//                    $('.grid').append(content);
//                    initializeMasonry();
//                }
//                else {
//                    $('.grid').append(message);
//                    initializeMasonry();
//                }
//            });
//        }}
//    function letsSearch() {
//        var elem = $('#seek');
//        string = elem[0].value;
//        if (string) {
//            elem[0].value = '';
//            $container.masonry('destroy');
//            $('.picture').remove();
//            searchPicture(string, 12);
//        }
//    }
//    var message ='<figure class="picture item" id="noPic"><img class="radius" src="img/no.jpg" alt="picture"></figure>';
//    var $container = $('#container');
//    var pool = ['moto','sport','nature','animals','health','history','relax','cat','flower','auto','computer','robot','science','web','audi','subaru','skoda','bmw'];
//    var rand;
//    var string= '';
//    for (var i=0; i<4; i++) {
//        rand = randomWord (0,pool.length-1);
//        searchPicture(pool[rand],3);
//    }
//    $('.searching').on('click',function(e){
//        e.preventDefault();
//        letsSearch()
//    });
//    $('input:text').on('keydown', function(e){
//        if (e.keyCode == 13){
//            letsSearch()
//        }
//    });
//});
