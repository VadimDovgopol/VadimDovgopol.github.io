// get the country data from the plugin
var countryData = $.fn.intlTelInput.getCountryData(),
    telInput = $("#phone"),
    addressDropdown = $("#address-country");

// init plugin
telInput.intlTelInput({
    utilsScript: "js/utils.js" // just for formatting/placeholders etc
});

// populate the country dropdown
$.each(countryData, function (i, country) {
    addressDropdown.append($("<option></option>").attr("value", country.iso2).text(country.name));
});
// set it's initial value
var initialCountry = telInput.intlTelInput("getSelectedCountryData").iso2;
addressDropdown.val(initialCountry);

// listen to the telephone input for changes
telInput.on("countrychange", function (e, countryData) {
    addressDropdown.val(countryData.iso2);
});

// listen to the address dropdown for changes
addressDropdown.change(function () {
    telInput.intlTelInput("setCountry", $(this).val());
});
function validateForm() {
    var firstName = document.forms["myForm"]["first-name"].value;
    var lastName = document.forms["myForm"]["last-name"].value;
    var email = document.forms["myForm"]["email"].value;
    var tel = document.forms["myForm"]["tel"].value;
    var currency = document.forms["myForm"]["currency"].value;
    var form = $('.form-wrapper');
    var message = $('.hide-message');
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (firstName == "" || lastName == "" || email == "" || tel == "" || currency == "" || telInput.intlTelInput("isValidNumber") == false || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert('Not valid email or number or you have empty field');
        return false;
    } else {
        form.hide('slow');
        message.show('slow');
        setTimeout(
            function () {
            $('.form').hide("slowe");
            },3500);
    }
}




