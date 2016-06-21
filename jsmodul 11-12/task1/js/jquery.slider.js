
$(document).ready(function() {
    var left = $('.carousel-arrow-left');
    var right = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 625 ;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;
 
    left.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 625;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    right.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 625;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
});
