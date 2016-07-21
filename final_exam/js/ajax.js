function loadGridImages() {
    var query = $("#textfield").val();
    var api = "https://pixabay.com/api/";
    var apiKey = "2714307-54c654f67ca3fd61019f64f4c";
    var count = 9;
    $.ajax({
        method: "GET"
        , url: api
        , data: {
            key: apiKey
            , per_page: count
            , q: query
        }
        , success: function (data) {
            var container = $("#gallery");
            if (data.hits.length) {
                container.empty();
                data.hits.forEach(function (imageData) {
                    var image = buildImage(imageData.webformatURL, imageData.tags);
                    container.append(image);
                });
            }
        }
    });

    function buildImage(url, title) {
        var template = "<div class='item-masonry sizer4'>" + "<img src='{url}' />" + "<div class='idea-content'>" + "<p>{title}</p>" + "</div>" + "</div>";
        return $(template.replace("{url}", url).replace("{title}", title));
    }
    return false;
};
$(function () {
    $("#form").submit(loadGridImages);
    loadGridImages(); // Load initial random images
});
