function loadGridImages() {
	var query = $("#textfield").val();
	var api = "https://pixabay.com/api/";
	var apiKey = "2714307-54c654f67ca3fd61019f64f4c";
	var count = 6;

	$.ajax({
		method: "GET",
		url: api,
		data: {
			key: apiKey,
			per_page: count,
			q: query
		},
		success: function(data) {
			var container = $(".ideas .GRID");

			if (data.hits.length) {
				container.empty();

				data.hits.forEach(function(imageData) {
					var image = buildImage(imageData.webformatURL, imageData.tags);
					container.append(image);
				});
			}

			$('.GRID').masonry({
				itemSelector: '.GRID-ITEM',
				isFitWidth: true,
				percentPosition: true,
				isResizable: true,
				isAnimated: true,
				animationOptions: {
					queue: false,
					duration: 500
				}
			});
		}
	});

	function buildImage(url, title) {
		var template =
			"<div class='idea-item GRID-ITEM'>" +
				"<div class='idea-area'>" +
					"<div class='idea-content'>" +
						"<div>{title}</div>" +
                		"<div class='image'><img src='{url}' /></div>" +
					"</div>" +
				"</div>" +
			"</div>";

		return $(template.replace("{url}", url).replace("{title}", title));
	}

	return false;

};

$(function() {
	$("#form").submit(loadGridImages);
	loadGridImages(); // Load initial random images
});
