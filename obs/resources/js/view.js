$(function () {

    var signForm = $('.singUp_window');
    var signButton = $('.singUp');
    var closeBtn = $('.closeBtn');
    var signUp = $('.submit');
    var signUpFooter = $('.foo');

    signButton.on('click', function (e) {
        e.preventDefault();
        signForm.show(300).addClass('flex')

    });

    signUpFooter.on('click', function (e) {
        e.preventDefault();
        signForm.show(300).addClass('flex')

    });

    closeBtn.on('click', function (e) {
        e.preventDefault();
        signForm.hide(300);

    });
    

    
    signUp.on('click', function () {
        window.location.replace("userPage.html");
    });


});